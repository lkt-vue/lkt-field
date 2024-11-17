<script setup lang="ts">

    import { FieldType } from '../enums/FieldType';
    import { BooleanFieldTypes } from '../constants/field-type-constants';
    import { MultipleDisplayType } from '../enums/MultipleDisplayType';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import { computed, useSlots } from 'vue';
    import { Settings } from '../settings/Settings';
    import { LktObject } from 'lkt-ts-interfaces';

    const emit = defineEmits(['click']);
    const slots = useSlots();

    const props = withDefaults(defineProps<{
        type?: FieldType
        value: any
        label?: string
        title?: string
        fileName?: string
        valueSlot?: string
        emptyValueSlot?: string
        slotData?: LktObject
        download?: string | Function
        multiple?: boolean
        multipleDisplay?: MultipleDisplayType
        modal?: string
        modalKey?: string
        modalData?: LktObject
        optionSlot?: string
        optionsDownload?: string | Function
        optionsModal?: string | Function
        optionsModalData?: LktObject | Function
        optionsIcon?: string | Function
        optionsLabelFormatter?: Function
        optionsResource?: string
        optionsResourceData?: LktObject
    }>(), {
        type: FieldType.Text,
        title: '',
        valueSlot: '',
        emptyValueSlot: '',
        slotData: () => ({}),
        download: '',
        multiple: false,
        multipleDisplay: MultipleDisplayType.List,
        modal: '',
        modalKey: '',
        modalData: () => ({}),
        optionSlot: '',
        optionsDownload: '',
        optionsModal: '',
        optionsModalData: () => ({}),
        optionsIcon: '',
        optionsResource: '',
        optionsResourceData: () => ({}),

    });

    const onClick = () => emit('click');

    const computedEmptyValueSlot = computed(() => {
            switch (props.type) {
                case FieldType.Select:
                    if (props.multiple && Array.isArray(props.value) && props.value.length > 0) {
                        return '';
                    }
                    if (props.multiple && props.multipleDisplay === MultipleDisplayType.Count) return '';
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

    let calculatedValue = props.value;
    if (props.type === FieldType.Select && props.multiple && !Array.isArray(calculatedValue)) {
        calculatedValue = [];
    }
</script>

<template>
    <div class="lkt-field--read" v-on:click="onClick">
        <template v-if="slots['value']">
            <slot
                name="value"
                :value="calculatedValue"
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
            :value="calculatedValue"
            :title="title"
            :data="slotData" />

        <template v-else>
            <template v-if="type === FieldType.File || type === FieldType.Image">
                <div class="lkt-field-main">
                    <lkt-button
                        class="lkt-field--toggle-button"
                        :text="type === FieldType.File ? fileName : ''"
                    >
                        <lkt-image
                            v-if="type === FieldType.Image"
                            :src="calculatedValue"
                            class="lkt-field--image-cover"
                        />
                        <lkt-image
                            v-if="type === FieldType.Image"
                            :src="calculatedValue"
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
                :to="calculatedValue">{{ calculatedValue }}
            </lkt-anchor>
            <lkt-anchor
                v-else-if="type === FieldType.Tel"
                type="tel"
                class="lkt-field--read-value"
                :title="title"
                :to="calculatedValue">{{ calculatedValue }}
            </lkt-anchor>
            <div
                v-else-if="BooleanFieldTypes.includes(type)"
                class="lkt-field--read-value">
                <lkt-tag
                    :icon="calculatedValue ? 'lkt-field-icon-ok' : 'lkt-field-icon-cancel'"
                    :featured-text="label"
                    :title="title" />
            </div>
            <div
                v-else-if="type === FieldType.Date"
                class="lkt-field--read-value"
                v-html="calculatedValue" :title="title"></div>
            <div
                v-else-if="type === FieldType.Select"
                class="lkt-field--read-value"
                :title="title">

                <template v-if="multiple">
                    <div v-if="multipleDisplay === MultipleDisplayType.Count">
                        {{ calculatedValue.length }}
                    </div>

                    <ul v-else-if="calculatedValue.length > 0" class="lkt-field-select-read">
                        <template v-for="(option, i) in calculatedValue">
                            <li :title="calculatedValue[i]?.label">
                                <dropdown-option
                                    :option="calculatedValue[i]"
                                    :option-slot="optionSlot"
                                    :icon="optionsIcon"
                                    :modal="optionsModal"
                                    :modal-data="optionsModalData"
                                    :download="optionsDownload"
                                    :label-formatter="optionsLabelFormatter"
                                />
                            </li>
                        </template>
                    </ul>
                </template>

                <dropdown-option
                    v-else-if="calculatedValue.length > 0"
                    :option="calculatedValue[0]"
                    :option-slot="optionSlot"
                    :icon="optionsIcon"
                    :modal="optionsModal"
                    :modal-data="optionsModalData"
                    :download="optionsDownload"
                    :label-formatter="optionsLabelFormatter"
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
                <div v-html="calculatedValue" />
            </lkt-button>
            <dropdown-option
                class="lkt-field--read-value"
                v-else-if="download"
                :option="{value: '', label: calculatedValue}"
                :download="download"
            />
            <div
                v-else-if="type === FieldType.Number"
                class="lkt-field--read-value"
                v-html="title" :title="title"></div>
            <div
                v-else
                class="lkt-field--read-value"
                v-html="calculatedValue" :title="title"></div>
        </template>
    </div>
</template>