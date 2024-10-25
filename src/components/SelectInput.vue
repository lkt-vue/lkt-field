<script setup lang="ts">

    import { MultipleDisplayType } from '@/enums/MultipleDisplayType';
    import DropdownOption from '@/components/dropdown/DropdownOption.vue';
    import { ValidFieldValue } from '@/types/ValidFieldValue';
    import { Option } from '@/instances/Option';
    import { LktObject } from 'lkt-ts-interfaces';
    import { nextTick, ref, watch } from 'vue';

    const emit = defineEmits(['update:modelValue', 'update:showOptions', 'focus', 'blur', 'navigate', 'search']);

    const props = withDefaults(defineProps<{
        modelValue: ValidFieldValue,
        searchable: boolean,
        searchMode: boolean,
        multiple: boolean,
        optionsIcon: string,
        optionSlot: string,
        optionsModal: string | Function,
        optionsDownload: string | Function,
        optionsLabelFormatter: string | Function,
        optionsModalData: LktObject,
        pickedOptions: Option[],
        // name: string,
        // label: string,
        // id: string,
        showOptions: boolean,
        editable: boolean,
        focusing: boolean,
        // disabled: boolean,
        // readonly: boolean,
        searchPlaceholder: string,
        multipleDisplayEdition: string,
    }>(), {
        modelValue: false,
    });

    /**
     * Search query
     */
    const query = ref(''),
        queryField = ref(null);

    /**
     * Options visibility
     */
    const visibleOptions = ref(props.showOptions);
    watch(visibleOptions, v => emit('update:showOptions', v));

    /**
     * Focus state
     */
    const hasFocus = ref(props.focusing),
        queryHasFocus = ref(false),
        buttonHasFocus = ref(false);

    const checkGlobalFocus = () => {
        nextTick(() => {
            hasFocus.value = queryHasFocus.value || buttonHasFocus.value;
            visibleOptions.value = hasFocus.value;
        });
    };

    watch(queryHasFocus, v => {
        if (v) buttonHasFocus.value = false;
        checkGlobalFocus();
    });

    watch(buttonHasFocus, v => {
        if (v) queryHasFocus.value = false;
        checkGlobalFocus();
    });

    watch(hasFocus, v => {
        if (v) emit('focus');
        else emit('blur');
    });

    let queryBlurTimeout:Timeout|undefined = undefined,
        buttonBlurTimeout:Timeout|undefined = undefined;

    const onBlurQueryInput = (event: Event) => {
            queryBlurTimeout = setTimeout(() => {
                queryHasFocus.value = false;
            }, 100);
        },
        onKeyUpQueryInput = (event: KeyboardEvent) => {
            queryHasFocus.value = true;
            if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                emit('navigate', event);
            } else {
                emit('search', query.value);
            }
        },
        onFocusQueryInput = (event: FocusEvent) => {
            queryHasFocus.value = true;
        };

    const onBlurSelectButton = (event: Event) => {
            buttonBlurTimeout = setTimeout(() => {
                buttonHasFocus.value = false;
            }, 100);
        },
        onKeyUpSelectButton = (event: KeyboardEvent) => {
            buttonHasFocus.value = true;

            if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                emit('navigate', event);
            }
        },
        onFocusSelectButton = (event: FocusEvent) => {
            buttonHasFocus.value = true;
        };

    defineExpose({
        keepFocused: () => {
            clearTimeout(queryBlurTimeout);
            clearTimeout(buttonBlurTimeout);
            if (queryField.value) queryField.value.focus();
        },
    });

</script>

<template>
    <div v-if="searchable && (multiple || searchMode)" class="lkt-field--searchable-box">

        <lkt-tag
            v-if="multiple"
            :icon="optionsIcon"
            :text="pickedOptions.length"
        />

        <lkt-tag
            v-else-if="pickedOptions.length > 0"
        >
            <dropdown-option
                :option="pickedOptions[0]"
                :option-slot="optionSlot"
                :icon="optionsIcon"
                :modal="optionsModal"
                :modal-data="optionsModalData"
                :download="optionsDownload"
                :label-formatter="optionsLabelFormatter"
                :editable="editable"
            />
        </lkt-tag>

        <input
            v-model="query"
            ref="queryField"
            :value="query"
            :placeholder="searchPlaceholder"
            type="text"
            tabindex="-1"
            autocomplete="off"
            @keyup="onKeyUpQueryInput"
            @blur="onBlurQueryInput"
            @focus="onFocusQueryInput"
        />
    </div>

    <lkt-button
        ref="selectButton"
        v-show="multiple || (!searchable || !searchMode)"
        class="lkt-field--toggle-button lkt-field--select-button"
        v-model:open-tooltip="visibleOptions"
        @keyup="onKeyUpSelectButton"
        @blur="onBlurSelectButton"
        @focus="onFocusSelectButton"
    >
        <template v-if="multiple && pickedOptions.length > 0">
            <div v-if="multipleDisplayEdition === MultipleDisplayType.Count">
                {{ pickedOptions.length }}
            </div>

            <ul v-else class="lkt-field-select-read">
                <li v-for="(option, i) in pickedOptions" :title="option.label">
                    <dropdown-option
                        :option="pickedOptions[i]"
                        :option-slot="optionSlot"
                        :icon="optionsIcon"
                        :modal="optionsModal"
                        :modal-data="optionsModalData"
                        :download="optionsDownload"
                        :label-formatter="optionsLabelFormatter"
                        :editable="editable"
                    />
                </li>
            </ul>
        </template>
        <dropdown-option
            v-else-if="!multiple && pickedOptions.length > 0"
            :option="pickedOptions[0]"
            :option-slot="optionSlot"
            :icon="optionsIcon"
            :modal="optionsModal"
            :modal-data="optionsModalData"
            :download="optionsDownload"
            :label-formatter="optionsLabelFormatter"
            :editable="editable"
        />
    </lkt-button>
</template>