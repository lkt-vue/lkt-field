<script lang="ts">
export default {name: "LktFieldText", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";

const emits = defineEmits(['update:modelValue', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    modelValue: {type: [String, Number], default: ''},

    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    autocomplete: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    readMode: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    tabindex: {type: Number, default: undefined},
    mandatory: {type: Boolean, default: false},
    showPassword: {type: Boolean, default: false},
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
    showPasswordMessage: {type: String, default: ''},
    switchEditionMessage: {type: String, default: ''},
    isTel: {type: Boolean, default: false},
    isEmail: {type: Boolean, default: false},
    isPassword: {type: Boolean, default: false},
    isSearch: {type: Boolean, default: false},
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
        if (focusing.value) r.push('has-focus');

        if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    }),
    readModeTitle = computed(() => {
        if (typeof value.value === 'number') return value.value.toString();
        return value.value;
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            inputElement.value.focus();
        }
    });
};


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => value.value = v)
watch(value, (v) => emits('update:modelValue', v))

const reset = () => value.value = originalValue.value,
    getValue = () => value.value,
    onKeyUp = ($event: any) => emits('keyup', $event, createLktEvent(Identifier, {value: value.value})),
    onKeyDown = ($event: any) => emits('keydown', $event, createLktEvent(Identifier, {value: value.value})),
    onFocus = ($event: any) => (focusing.value = true) && emits('focus', $event, createLktEvent(Identifier, {value: value.value})),
    onBlur = ($event: any) => (focusing.value = false) && emits('blur', $event, createLktEvent(Identifier, {value: value.value})),
    onClick = ($event: any) => emits('click', $event, createLktEvent(Identifier, {value: value.value})),
    onClickInfo = ($event: any) => emits('click-info', $event, createLktEvent(Identifier, {value: value.value})),
    onClickError = ($event: any) => emits('click-error', $event, createLktEvent(Identifier, {value: value.value})),
    onClickShowPassword = ($event: any) => showPasswordIcon.value = !showPasswordIcon.value,
    onClickSwitchEdition = ($event: any) => {
        editable.value = !editable.value;
        if (editable.value) focus();
    };

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});

reset();
</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
    >
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label" :for="Identifier" v-html="label"></label>

        <div v-if="editable" class="lkt-field-text__main">
            <template v-if="placeholder">
                <input v-model="value"
                       :ref="(el:any) => inputElement = el"
                       v-bind:value="value"
                       v-bind:type="type"
                       v-bind:name="name"
                       v-bind:id="Identifier"
                       v-bind:disabled="disabled"
                       v-bind:readonly="readonly"
                       v-bind:placeholder="placeholder"
                       v-bind:tabindex="tabindex"
                       v-bind:autocomplete="autocompleteText"
                       v-on:keyup="onKeyUp"
                       v-on:keydown="onKeyDown"
                       v-on:focus="onFocus"
                       v-on:blur="onBlur"
                       v-on:click="onClick"
                >
            </template>
            <template v-else>
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
                       v-on:keyup="onKeyUp"
                       v-on:keydown="onKeyDown"
                       v-on:focus="onFocus"
                       v-on:blur="onBlur"
                       v-on:click="onClick">
            </template>

            <div class="lkt-field__state" v-if="showInfoUi">
                <i v-if="props.errorMessage" class="lkt-field__error-icon" :title="props.errorMessage"
                   v-on:click="onClickError"></i>
                <i v-if="props.infoMessage" class="lkt-field__info-icon" :title="props.infoMessage"
                   v-on:click="onClickInfo"></i>
                <i v-if="props.isPassword && props.showPassword && isFilled" :class="passwordIcon"
                   :title="props.showPasswordMessage"
                   v-on:click="onClickShowPassword"></i>
                <i v-if="props.reset && isFilled" class="lkt-field__reset-icon" :title="resetText" v-on:click="reset"></i>
                <i v-if="props.mandatory" class="lkt-field__mandatory-icon" :title="props.mandatoryMessage"></i>
                <i  v-if="allowReadModeSwitch" class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable" class="lkt-field-text__read">
            <div class="lkt-field-text__read-value" v-html="value" :title="readModeTitle"></div>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>
    </div>
</template>