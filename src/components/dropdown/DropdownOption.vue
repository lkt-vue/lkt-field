<script setup lang="ts">
    import { Option } from '@/instances/Option';
    import { computed } from 'vue';
    import { Settings } from '@/settings/Settings';
    import { LktObject } from 'lkt-ts-interfaces';

    const props = withDefaults(defineProps<{
        option: Option,
        optionSlot?: string,
        editable?: boolean
        icon?: string|Function
        modal?: string|Function
        modalData?: LktObject|Function
        download?: string|Function
        labelFormatter?: Function
    }>(), {
        option: () => ({}),
        optionSlot: '',
        editable: false,
        icon: '',
        modal: '',
        modalData: () => ({}),
        download: '',
    });

    const computedIcon = computed(() => {
            if (props.option.icon !== '') return props.option.icon;

            if (typeof props.icon === 'function') {
                return props.icon(props.option);
            }
            return props.icon;
        }),
        computedLabel = computed(() => {
            if (typeof props.labelFormatter === 'function') return props.labelFormatter(props.option);
            return props.option.label;
        }),
        computedClass = computed(() => {
            return `lkt-opt-${props.option.value}`;
        }),
        optionSlot = computed(() => {
            if (!props.optionSlot) return undefined;
            if (typeof Settings.optionSlots[props.optionSlot] === 'undefined') return undefined;
            return Settings.optionSlots[props.optionSlot];
        }),
        computedContainerComponent = computed(() => {
            if (optionSlot.value) return optionSlot.value;
            if (!props.editable && props.modal !== '') return 'lkt-button';
            if (!props.editable && props.download !== '') return 'lkt-anchor';
            return 'div'
        }),
        computedContainerAttrs = computed(() => {
            if (computedContainerComponent.value === 'lkt-button') {
                let modal = props.modal;
                if (typeof props.modal === 'function') {
                    modal = () => {
                        return props.modal(props.option);
                    }
                }

                return {
                    modal,
                    modalData: props.modalData,
                    modalKey: props.option.value,
                    icon: computedIcon.value,
                };
            }

            if (computedContainerComponent.value === 'lkt-anchor') {
                let href = props.download;
                if (typeof props.download === 'function') {
                    href = () => {
                        return props.download(props.option);
                    }

                } else if (props.download.startsWith('prop:')) {
                    href = props.download.substring(5);
                    href = props.option[href];
                }

                let isDownload = props.download !== '';

                return {
                    href,
                    target: isDownload ? '_blank' : '',
                    download: isDownload
                };
            }

            return {};
        });
</script>

<template>
    <component
        :is="computedContainerComponent"
        v-bind="computedContainerAttrs"
        class="lkt-field--dropdown-option"
        :class="computedClass"
        :title="option.label">
        <div v-if="computedIcon && computedContainerComponent !== 'lkt-button'" class="lkt-field--dropdown-option--icon-container">
            <i :class="computedIcon"></i>
        </div>
        <div class="lkt-field--dropdown-option--label-container">
            {{ computedLabel }}
        </div>
    </component>
</template>