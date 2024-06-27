<script lang="ts" setup>
// Emits
import {generateRandomString, isEmail} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";
import {Settings} from "../settings/Settings";
import {LktObject} from "lkt-ts-interfaces";
//@ts-ignore
import {httpCall, HTTPResponse} from "lkt-http-client";
import {__} from "lkt-i18n";
import {ValidationCode} from "../types/ValidationCode";

const emits = defineEmits(['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-info', 'click-error', 'validation', 'validating']);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    modelValue: string|number
    placeholder?: string
    label?: string
    palette?: string
    name?: string
    valid?: boolean
    autocomplete?: boolean
    disabled?: boolean
    readonly?: boolean
    readMode?: boolean
    allowReadModeSwitch?: boolean
    tabindex?: number
    mandatory?: boolean
    showPassword?: boolean
    reset?: boolean
    resetMessage?: string
    mandatoryMessage?: string
    infoMessage?: string
    errorMessage?: string
    switchEditionMessage?: string
    min?: number|string|undefined
    max?: number|string|undefined
    step?: number|string
    isTel?: boolean
    isEmail?: boolean
    isPassword?: boolean
    isSearch?: boolean
    isNumber?: boolean
    enableAutoNumberFix?: boolean
    emptyValueSlot?: string
    valueSlot?: string
    editSlot?: string
    slotData?: LktObject
    validationResource?: string
    validationResourceData?: LktObject
    autoValidation?: boolean
    validationStack?: string
}>(), {
    modelValue: '',
    placeholder: '',
    label: '',
    palette: '',
    name: generateRandomString(16),
    valid: false,
    autocomplete: true,
    disabled: false,
    readonly: false,
    readMode: false,
    allowReadModeSwitch: false,
    tabindex: undefined,
    mandatory: false,
    showPassword: false,
    reset: false,
    resetMessage: '',
    mandatoryMessage: '',
    infoMessage: '',
    errorMessage: '',
    showPasswordMessage: '',
    switchEditionMessage: '',
    min: undefined,
    max: undefined,
    step: 1,
    isTel: false,
    isEmail: false,
    isPassword: false,
    isSearch: false,
    isNumber: false,
    enableAutoNumberFix: true,
    emptyValueSlot: '',
    valueSlot: '',
    editSlot: '',
    slotData: () => ({}),
    validationResource: '',
    validationResourceData: () => ({}),
    autoValidation: false,
    validationStack: 'default',
});

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    showPasswordIcon = ref(false),
    focusing = ref(false),
    hadFirstBlur = ref(false),
    hadFirstFocus = ref(false),
    localValidationStatus = ref(<ValidationCode>[]),
    editable = ref(!props.readMode);


const isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    showInfoUi = computed(() => {
        return props.reset || props.infoMessage !== '' || props.errorMessage !== '' || (props.isPassword && props.showPassword);
    }),
    amountOfIcons = computed(() => {
        let r = 0;
        if (props.reset) ++r;
        if (props.infoMessage) ++r;
        if (props.isPassword && props.showPassword) ++r;
        return r;
    }),
    resetText = computed(() => {
        if (props.resetMessage !== '') return props.resetMessage;
        return '';
    }),
    passwordIcon = computed(() => {
        return showPasswordIcon.value === true ? 'lkt-field__hide-password-icon' : 'lkt-field__show-password-icon';
    }),
    autocompleteText = computed(() => {
        return props.autocomplete === true ? 'on' : 'off';
    }),
    isFilled = computed(() => {
        return value.value !== '';
    }),
    type = computed(() => {
        if (props.isPassword && showPasswordIcon.value === true) return 'text';
        if (props.isEmail) return 'email';
        if (props.isPassword) return 'password';
        if (props.isNumber) return 'number';
        if (props.isTel) return 'tel';
        if (props.isSearch) return 'search';
        return 'text';
    }),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-text'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (type) r.push(`is-${type.value}`);
        if (changed.value) r.push('is-changed');
        if (props.disabled) r.push('is-disabled');
        if (props.mandatory && editable.value) r.push('is-mandatory-field');
        if (focusing.value) r.push('has-focus');

        if (props.autoValidation && hadFirstFocus.value && hadFirstBlur.value) {
            if (localValidationStatus.value.length > 0) r.push('is-invalid');
            else r.push('is-valid');
        }

        if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    }),
    readModeTitle = computed(() => {
        if (typeof value.value === 'number') return value.value.toString();
        return value.value;
    }),
    MinimumValue = computed(() :number => {
        if (typeof props.min === 'string') return parseFloat(props.min);
        if (typeof props.min === 'number') return props.min;
        //@ts-ignore
        return false;
    }),
    MaximumValue = computed((): number => {
        if (typeof props.max === 'string') return parseFloat(props.max);
        if (typeof props.max === 'number') return props.max;
        //@ts-ignore
        return false;
    }),
    computedLabel = computed(() => {
        if (props.label.startsWith('__:')) {
            return __(props.label.substring(3));
        }
        return props.label;
    }),
    computedPlaceholder = computed(() => {
        if (props.placeholder.startsWith('__:')) {
            return __(props.placeholder.substring(3));
        }
        return props.placeholder;
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            //@ts-ignore
            inputElement.value.focus();
        }
    });
};

const doRemoteValidation = async () => {
    if (props.validationResource) {
        emits('validating');
        const response: HTTPResponse = await httpCall(props.validationResource, {...props.validationResourceData, value: value.value});
        emits('validation', response);
    }
}


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => {
    if (props.isNumber) return reAssignNumericValue(v);
    value.value = v
})
watch(value, (v) => {
    emits('update:modelValue', v);
    doRemoteValidation();
    doLocalValidation();
})

const doLocalValidation = () => {
    if (!hadFirstBlur.value || !hadFirstFocus.value) {
        return;
    }

    localValidationStatus.value = [];

    nextTick(() => {

        if (!props.isNumber && !props.isEmail && props.mandatory && value.value === '') {
            localValidationStatus.value.push('ko-empty');

        } else if (!props.isEmail) {

            let min = Number(props.min);
            if (min > 0) {
                if (!props.isNumber && value.value.length < min) {
                    localValidationStatus.value.push('ko-min-str');

                } else if (value.value < min) {
                    localValidationStatus.value.push('ko-min-num');
                }
            }
        }

        let max = Number(props.max);
        if (max > 0) {
            if (!props.isNumber && value.value.length > max) {
                localValidationStatus.value.push('ko-max-str');

            } else if (value.value > max) {
                localValidationStatus.value.push('ko-max-num');
            }
        }

        if (props.isEmail && props.mandatory && value.value === '') {
            localValidationStatus.value.push('ko-empty');

        } else if (props.isEmail && !isEmail(value.value)) {
            localValidationStatus.value.push('ko-email');
        }

        console.log('doLocalValidation', localValidationStatus.value);
    })
}

const reset = () => value.value = originalValue.value,
    getValue = () => value.value,
    onKeyUp = ($event: any) => {
        doLocalValidation();
        emits('keyup', $event, createLktEvent(Identifier, {value: value.value}))
    },
    onKeyDown = ($event: any) => emits('keydown', $event, createLktEvent(Identifier, {value: value.value})),
    onFocus = ($event: any) => {
        hadFirstFocus.value = true;
        doLocalValidation();
        (focusing.value = true) && emits('focus', $event, createLktEvent(Identifier, {value: value.value}))
    },
    onChange = ($event: any) => {
        // (focusing.value = true) && emits('focus', $event, createLktEvent(Identifier, {value: value.value}))
    },
    onBlur = ($event: any) => {
        hadFirstBlur.value = true;
        doLocalValidation();
        (focusing.value = false) && emits('blur', $event, createLktEvent(Identifier, {value: value.value}))
    },
    onClick = ($event: any) => {
        emits('click', $event, createLktEvent(Identifier, {value: value.value}))
    },
    onClickInfo = ($event: any) => emits('click-info', $event, createLktEvent(Identifier, {value: value.value})),
    onClickError = ($event: any) => emits('click-error', $event, createLktEvent(Identifier, {value: value.value})),
    onClickShowPassword = ($event: any) => showPasswordIcon.value = !showPasswordIcon.value,
    onClickSwitchEdition = ($event: any) => {
        editable.value = !editable.value;
        if (editable.value) focus();
    },
    reAssignNumericValue = (n: string | number) => {

        if (!props.enableAutoNumberFix) return false;

        let N = Number(n),
            reAssign = false;

        // @ts-ignore
        if (MinimumValue.value !== false && N < MinimumValue.value) {
            N = MinimumValue.value;
            reAssign = true;
        }

        // @ts-ignore
        if (MaximumValue.value !== false && N > MaximumValue.value) {
            N = MaximumValue.value;
            reAssign = true;
        }

        if (reAssign === true) {
            value.value = N;
            return true;
        }
        return false;
    };

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});

reset();

const hasCustomValueSlot = computed(() => {
        if (value.value === '') {
            return (props.emptyValueSlot !== '' && typeof Settings.customValueSlots[props.emptyValueSlot] !== 'undefined') || (Settings.defaultEmptyValueSlot && typeof Settings.customValueSlots[Settings.defaultEmptyValueSlot] !== 'undefined');
        }
        return props.valueSlot !== '' && typeof Settings.customValueSlots[props.valueSlot] !== 'undefined';
    }),
    customValueSlot = computed(() => {
        if (value.value === '') {
            return Settings.customValueSlots[props.emptyValueSlot] ?? Settings.customValueSlots[Settings.defaultEmptyValueSlot];
        }

        return Settings.customValueSlots[props.valueSlot];
    }),
    hasCustomEditSlot = computed(() => props.editSlot !== '' && typeof Settings.customEditSlots[props.editSlot] !== 'undefined'),
    customEditSlot = computed(() => Settings.customEditSlots[props.editSlot]);
</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
    >
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label && computedLabel !== ''" :for="Identifier" v-html="computedLabel"></label>

        <template v-if="editable">
            <template v-if="slots['edit']">
                <div v-on:click="onClick">
                    <slot name="edit" v-bind:value="value" :title="readModeTitle" :data="slotData"></slot>
                </div>
            </template>
            <div v-else-if="hasCustomEditSlot" v-on:click="onClick">
                <component  v-bind:is="customEditSlot"
                       v-bind:value="value" :title="readModeTitle" :data="slotData"></component>
            </div>

            <template v-else-if="computedPlaceholder">
                <div class="lkt-field-main">
                <input v-model="value"
                       :ref="(el:any) => inputElement = el"
                       v-bind:value="value"
                       v-bind:type="type"
                       v-bind:name="name"
                       v-bind:id="Identifier"
                       v-bind:disabled="disabled"
                       v-bind:readonly="readonly"
                       v-bind:placeholder="computedPlaceholder"
                       v-bind:tabindex="tabindex"
                       v-bind:autocomplete="autocompleteText"
                       v-bind:min="MinimumValue"
                       v-bind:max="MaximumValue"
                       v-bind:step="step"
                       v-on:keyup="onKeyUp"
                       v-on:keydown="onKeyDown"
                       v-on:focus="onFocus"
                       v-on:blur="onBlur"
                       v-on:click="onClick"
                       v-on:change="onChange"
                >
                </div>
            </template>
            <template v-else>
                <div class="lkt-field-main">
                <input v-model="value"
                       :ref="(el:any) => inputElement = el"
                       v-bind:value="value"
                       v-bind:type="type"
                       v-bind:name="name"
                       v-bind:id="Identifier"
                       v-bind:disabled="disabled"
                       v-bind:readonly="readonly"
                       v-bind:tabindex="tabindex"
                       v-bind:autocomplete="autocompleteText"
                       v-bind:min="MinimumValue"
                       v-bind:max="MaximumValue"
                       v-bind:step="step"
                       v-on:keyup="onKeyUp"
                       v-on:keydown="onKeyDown"
                       v-on:focus="onFocus"
                       v-on:blur="onBlur"
                       v-on:click="onClick"
                       v-on:change="onChange">
                </div>
            </template>

            <div class="lkt-field__state" v-if="showInfoUi">
                <i v-if="props.errorMessage" class="lkt-field__error-icon" :title="props.errorMessage"
                   v-on:click="onClickError"></i>
                <i v-if="props.infoMessage" class="lkt-field__info-icon" :title="props.infoMessage"
                   v-on:click="onClickInfo"></i>
                <i v-if="props.isPassword && props.showPassword && isFilled" :class="passwordIcon"
                   :title="props.showPasswordMessage"
                   v-on:click="onClickShowPassword"></i>
                <i v-if="props.reset && isFilled" class="lkt-field__reset-icon" :title="resetText"
                   v-on:click="reset"></i>
                <i v-if="allowReadModeSwitch" class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </template>

        <div v-if="!editable" class="lkt-field-text__read" v-on:click="onClick">

            <template v-if="slots['value']">
                <slot name="value" v-bind:value="value" :title="readModeTitle" :data="slotData"></slot>
            </template>
            <component v-else-if="hasCustomValueSlot" v-bind:is="customValueSlot"
                       v-bind:value="value" :title="readModeTitle" :data="slotData"></component>
            <template v-else>
                <a v-if="isEmail" class="lkt-field-text__read-value" :title="readModeTitle" :href="'mail:' + value">{{value}}</a>
                <a v-else-if="isTel" class="lkt-field-text__read-value" :title="readModeTitle" :href="'tel:' + value">{{value}}</a>
                <div v-else class="lkt-field-text__read-value" v-html="value" :title="readModeTitle"></div>
            </template>

            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <lkt-field-validations v-if="autoValidation && localValidationStatus.length > 0" :items="localValidationStatus" :stack="validationStack"/>
    </div>
</template>