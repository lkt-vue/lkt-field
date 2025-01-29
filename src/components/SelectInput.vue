<script setup lang="ts">

    import { MultipleDisplayType } from '../enums/MultipleDisplayType';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import { ValidFieldValue } from '../types/ValidFieldValue';
    import { Option } from '../instances/Option';
    import { LktObject } from 'lkt-ts-interfaces';
    import { nextTick, ref, watch } from 'vue';

    const emit = defineEmits([
        'update:modelValue',
        'update:showOptions',
        'focus',
        'blur',
        'navigate',
        'search',
        'tag',
        'untag',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: ValidFieldValue,
        searchable: boolean,
        searchMode: boolean,
        multiple: boolean,
        canTag: boolean,
        optionsIcon: string|Function,
        optionSlot?: string,
        optionsModal: string | Function,
        optionsDownload: string | Function,
        optionsLabelFormatter?: Function,
        optionsModalData: LktObject,
        pickedOptions: Option[],
        showOptions: boolean,
        editable: boolean,
        focusing: boolean,
        searchPlaceholder: string,
        multipleDisplayEdition: string,
    }>(), {
        modelValue: false,
    });

    const tagsEnabled = props.multiple && props.canTag;

    /**
     * Search query
     */
    const query = ref(''),
        queryField = ref(null);

    /**
     * Options visibility
     */
    const visibleOptions = ref(props.showOptions);
    watch(visibleOptions, v => {
        if (!tagsEnabled) emit('update:showOptions', v);
    });

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

    let queryBlurTimeout:ReturnType<typeof setTimeout>|undefined = undefined,
        buttonBlurTimeout:ReturnType<typeof setTimeout>|undefined = undefined;

    const onBlurQueryInput = (event: Event) => {
            queryBlurTimeout = setTimeout(() => {
                queryHasFocus.value = false;
            }, 100);
        },
        onKeyUpQueryInput = (event: KeyboardEvent) => {
            queryHasFocus.value = true;
            if (tagsEnabled && event.key === 'Enter') {
                emit('tag', query.value);
                query.value = '';
            }
            else if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
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
        },
        onClickOptionIcon = (option: Option) => {
            emit('untag', option);
        };

    defineExpose({
        keepFocused: () => {
            clearTimeout(queryBlurTimeout);
            clearTimeout(buttonBlurTimeout);
            //@ts-ignore
            if (queryField.value) queryField.value.focus();
        },
    });

</script>

<template>
    <div v-if="(searchable && (multiple || searchMode)) || tagsEnabled" class="lkt-field--searchable-box">

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
        :type="tagsEnabled ? 'content' : ''"
        ref="selectButton"
        v-show="multiple || (!searchable || !searchMode)"
        class="lkt-field--toggle-button lkt-field--select-button"
        v-model:open-tooltip="visibleOptions"
        @keyup="onKeyUpSelectButton"
        @blur="onBlurSelectButton"
        @focus="onFocusSelectButton"
    >
        <template v-if="tagsEnabled || (multiple && pickedOptions.length > 0)">
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
                        :is-tag="tagsEnabled"
                        @click-icon="onClickOptionIcon"
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