<script setup lang="ts">
    import {
        AnchorConfig,
        booleanFieldTypes,
        FieldReadModeConfig,
        FieldType,
        LktObject,
        MultipleOptionsDisplay, Option, OptionsConfig,
    } from 'lkt-vue-kernel';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import { computed, useSlots } from 'vue';
    import { Settings } from '../settings/Settings';
    import { DropdownOptionProps } from '@/config/DropdownOptionProps.ts';

    const emit = defineEmits(['click']);
    const slots = useSlots();

    const props = withDefaults(defineProps<{
        type?: FieldType
        value: any
        isLoading?: boolean
        label?: string
        title?: string
        fileName?: string
        valueSlot?: string
        emptyValueSlot?: string
        slotData?: LktObject
        download?: string | Function
        anchor?: AnchorConfig | Function
        multiple?: boolean
        multipleDisplay?: MultipleOptionsDisplay
        modal?: string
        modalKey?: string
        modalData?: LktObject
        optionSlot?: string
        optionsDownload?: string | Function
        optionsModal?: string | Function
        optionsModalData?: LktObject | Function
        optionsIcon?: string | Function
        optionsText?: string | Function
        optionsClass?: string | Function
        optionsLabelFormatter?: Function
        prop?: LktObject
        readModeConfig?: FieldReadModeConfig
        optionsConfig: OptionsConfig
    }>(), {
        type: FieldType.Text,
        title: '',
        valueSlot: '',
        emptyValueSlot: '',
        slotData: () => ({}),
        download: '',
        multiple: false,
        isLoading: false,
        multipleDisplay: MultipleOptionsDisplay.List,
        modal: '',
        modalKey: '',
        modalData: () => ({}),
        optionSlot: '',
        optionsDownload: '',
        optionsModal: '',
        optionsModalData: () => ({}),
        optionsIcon: '',
        prop: () => ({}),
    });

    const onClick = () => emit('click');

    const computedEmptyValueSlot = computed(() => {
            switch (props.type) {
                case FieldType.Select:
                    if (props.multiple && Array.isArray(props.value) && props.value.length > 0) {
                        return '';
                    }
                    if (props.multiple && props.multipleDisplay === MultipleOptionsDisplay.Count) return '';
                    if (!props.multiple && !!props.value) return '';
                    break;

                case FieldType.Date:
                    if (props.value !== '') return '';
                    break;

                default:
                    if (props.value !== '') return '';
            }
            return Settings.customValueSlots[props.emptyValueSlot] ?? Settings.defaultEmptyValueSlot;
        }),
        customValueSlot = computed(() => {
            return Settings.customValueSlots[props.valueSlot] ?? '';
        });

    const computedValue = computed(() => {
        let r = props.value;
        if (props.type === FieldType.Select && props.multiple && !Array.isArray(r)) {
            r = [];
        }

        if (props.type === FieldType.Textarea || props.type === FieldType.Text) {
            if (typeof props.readModeConfig?.textMaxLength !== 'undefined' && r.length > props.readModeConfig.textMaxLength) {
                r = r.substring(0, props.readModeConfig.textMaxLength) + '...';
            }
            else if (typeof Settings.readTextMaxLength !== 'undefined' && r.length > Settings.readTextMaxLength) {
                r = r.substring(0, Settings.readTextMaxLength) + '...';
            }
        }

        return r;
    })
</script>

<template>
    <div class="lkt-field--read" v-on:click="onClick">
        <lkt-loader v-if="isLoading"/>
        <template v-else-if="slots['value']">
            <slot
                name="value"
                :value="computedValue"
                :title="title"
                :data="slotData" />
        </template>

        <component
            v-else-if="computedEmptyValueSlot"
            :is="computedEmptyValueSlot"
            :data="slotData" />

        <component
            v-else-if="customValueSlot"
            :is="customValueSlot"
            :value="computedValue"
            :title="title"
            :data="slotData" />

        <template v-else>
            <template v-if="type === FieldType.File || type === FieldType.Image">
                <div class="lkt-field-main">
                    <lkt-button
                        class="lkt-field--toggle-button"
                        :text="type === FieldType.File ? fileName : ''"
                        disabled
                    >
                        <lkt-image
                            v-if="type === FieldType.Image"
                            :src="computedValue"
                            class="lkt-field--image-cover"
                        />
                        <lkt-image
                            v-if="type === FieldType.Image"
                            :src="computedValue"
                            class="lkt-field--image-main"
                        />
                    </lkt-button>
                </div>
            </template>
            <lkt-anchor
                v-else-if="type === FieldType.Email"
                type="mail"
                class="lkt-field--read-value"
                :title="title"
                :to="computedValue">{{ computedValue }}
            </lkt-anchor>
            <lkt-anchor
                v-else-if="type === FieldType.Tel"
                type="tel"
                class="lkt-field--read-value"
                :title="title"
                :to="computedValue">{{ computedValue }}
            </lkt-anchor>
            <div
                v-else-if="booleanFieldTypes.includes(type)"
                class="lkt-field--read-value">
                <lkt-tag
                    :icon="computedValue ? 'lkt-icn-check' : 'lkt-icn-cancel'"
                    :featured-text="label"
                    :title="title" />
            </div>
            <div
                v-else-if="type === FieldType.Date"
                class="lkt-field--read-value"
                v-html="computedValue" :title="title"/>
            <div
                v-else-if="type === FieldType.Select"
                class="lkt-field--read-value"
                :title="title">

                <template v-if="multiple">
                    <div v-if="multipleDisplay === MultipleOptionsDisplay.Count">
                        {{ computedValue.length }}
                    </div>

                    <lkt-table
                        v-else-if="multipleDisplay === MultipleOptionsDisplay.Table"
                        :model-value="computedValue"
                        v-bind="optionsConfig.table"
                    />

                    <ul v-else-if="computedValue.length > 0" class="lkt-field-select-read" :class="`multiple-display-${multipleDisplay}`">
                        <template v-for="(_, i) in computedValue" :key="`${i}-${computedValue[i].value}`">
                            <li :title="computedValue[i]?.label">
                                <dropdown-option
                                    v-bind="<DropdownOptionProps>{
                                        item: computedValue[i],
                                        data: {
                                            optionSlot,
                                            editable: false,
                                            prop,
                                            optionsConfig,
                                        }
                                    }"
                                />
                            </li>
                        </template>
                    </ul>
                </template>

                <dropdown-option
                    v-else-if="computedValue.length > 0"
                    v-bind="<DropdownOptionProps>{
                        item: computedValue[0],
                        data: {
                            optionSlot,
                            editable: false,
                            prop,
                            optionsConfig,
                        }
                    }"
                />
            </div>
            <lkt-button
                v-else-if="modal"
                class="lkt-field--read-value"
                :title="title"
                :modal="modal"
                :modal-key="modalKey"
                :modal-data="modalData"
            >
                <div v-html="computedValue"/>
            </lkt-button>

            <dropdown-option
                v-else-if="download"
                v-bind="<DropdownOptionProps>{
                    item: {value: '', label: computedValue},
                    data: {
                        optionSlot,
                        editable: false,
                        prop,
                        optionsConfig,
                        anchor,
                        download,
                    }
                }"
            />
            <div
                v-else-if="type === FieldType.Number"
                class="lkt-field--read-value"
                v-html="title" :title="title"/>
            <div
                v-else
                class="lkt-field--read-value"
                v-html="computedValue" :title="title"/>
        </template>
    </div>
</template>