<script setup lang="ts">
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import {
        ButtonType,
        LktObject,
        MultipleOptionsDisplay,
        Option, OptionsConfig,
        TableConfig,
        TagConfig,
        ValidFieldValue,
    } from 'lkt-vue-kernel';
    import { computed, nextTick, ref, watch } from 'vue';

    const emit = defineEmits([
        'update:modelValue',
        'update:showOptions',
        'update:pickedOptions',
        'focus',
        'blur',
        'navigate',
        'search',
        'change',
        'tag',
        'untag',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: ValidFieldValue
        searchable: boolean
        searchMode: boolean
        multiple: boolean
        canTag: boolean
        optionsConfig: OptionsConfig
        optionSlot?: string
        pickedOptions: Option[]
        showOptions: boolean
        editable: boolean
        focusing: boolean
        searchPlaceholder: string
        multipleDisplayEdition: string
        searchString: string
        prop?: LktObject
        max?: number
    }>(), {
        modelValue: false,
        prop: () => ({})
    });

    const tagsEnabled = props.multiple && props.canTag;

    /**
     * Search query
     */
    const query = ref(props.searchString),
        queryField = ref(null),
        editableOptions = ref(props.pickedOptions);

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

    const keepFocused = () => {
        clearTimeout(queryBlurTimeout);
        clearTimeout(buttonBlurTimeout);
        nextTick(() => {
            //@ts-ignore
            if (queryField.value) queryField.value.focus();
        })
    }

    const onBlurSelectButton = (event: Event) => {
            if (computedRenderSearchUI.value) return;
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
        keepFocused,
    });

    watch(() => props.pickedOptions, (v) => {
        emit('change')
        editableOptions.value = v;
    }, {deep: true})

    watch(editableOptions, (v) => {
        emit('update:pickedOptions', v);
    }, {deep: true})

    const computedRenderMultipleSearchUi = computed(() => {
        return props.multiple && (props.canTag || props.searchable);
    })

    const computedRenderSearchUI = computed(() => {
        return !props.multiple && props.searchable && hasFocus.value;
    })

</script>

<template>
    <div v-if="computedRenderSearchUI || computedRenderMultipleSearchUi" class="lkt-field--searchable-box">

        <lkt-tag
            v-if="multiple"
            v-bind="<TagConfig>{
                icon: optionsConfig.icon,
                text: pickedOptions.length
            }"
        />

        <lkt-tag
            v-else-if="pickedOptions.length > 0"
            v-bind="<TagConfig>{
                icon: pickedOptions[0].icon ?? optionsConfig.icon,
                text: pickedOptions[0].label
            }"
        />

        <input
            v-model="query"
            ref="queryField"
            :value="query"
            :placeholder="searchPlaceholder"
            :disabled="pickedOptions.length === max"
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
        :type="tagsEnabled ? ButtonType.Content : ButtonType.Button"
        v-show="!computedRenderSearchUI || computedRenderMultipleSearchUi"
        class="lkt-field--toggle-button lkt-field--select-button"
        v-model:open-tooltip="visibleOptions"
        @keyup="onKeyUpSelectButton"
        @blur="onBlurSelectButton"
        @focus="onFocusSelectButton"
    >
        <template v-if="tagsEnabled || (multiple && pickedOptions.length > 0)">
            <div v-if="multipleDisplayEdition === MultipleOptionsDisplay.Count">
                {{ pickedOptions.length }}
            </div>

            <lkt-table
                v-else-if="multipleDisplayEdition === MultipleOptionsDisplay.Table"
                v-model="editableOptions"
                v-bind="<TableConfig>{
                    ...optionsConfig.table,
                    editMode: editable
                }"
            />

            <ul v-else class="lkt-field-select-read" :class="`multiple-display-${multipleDisplayEdition}`">
                <li v-for="(option, i) in pickedOptions" :title="option.label" :key="`${i}-${option.value}`">
                    <dropdown-option
                        :option="pickedOptions[i]"
                        :option-slot="optionSlot"
                        :icon="optionsConfig.icon"
                        :text="optionsConfig.text"
                        :custom-class="optionsConfig.class"
                        :modal="optionsConfig.modal"
                        :modal-data="optionsConfig.modalData"
                        :download="optionsConfig.download"
                        :label-formatter="optionsConfig.labelFormatter"
                        :editable="editable"
                        :is-tag="tagsEnabled"
                        :prop="prop"
                        :key="i"
                        @click-icon="onClickOptionIcon"
                    />
                </li>
            </ul>
        </template>
        <dropdown-option
            v-else-if="!multiple && pickedOptions.length > 0"
            :option="pickedOptions[0]"
            :option-slot="optionSlot"
            :icon="optionsConfig.icon"
            :text="optionsConfig.text"
            :custom-class="optionsConfig.class"
            :modal="optionsConfig.modal"
            :modal-data="optionsConfig.modalData"
            :download="optionsConfig.download"
            :label-formatter="optionsConfig.labelFormatter"
            :editable="editable"
            :prop="prop"
        />
    </lkt-button>
</template>