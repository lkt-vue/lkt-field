<script setup lang="ts">
    import { LktObject, Option } from 'lkt-vue-kernel';
    import { computed } from 'vue';
    import { Settings } from '../../settings/Settings';

    const emit = defineEmits([
        'click',
        'click-icon'
    ]);

    const props = withDefaults(defineProps<{
        option: Option
        optionSlot?: string
        editable?: boolean
        icon?: string | Function
        text?: string | Function
        customClass?: string | Function
        modal?: string | Function
        modalData?: LktObject | Function
        download?: string | Function
        labelFormatter?: Function
        isTag?: boolean
        prop?: LktObject
    }>(), {
        option: () => (new Option()),
        optionSlot: '',
        editable: false,
        icon: '',
        text: '',
        modal: '',
        modalData: () => ({}),
        download: '',
        isTag: false,
        prop: () => ({})
    });

    const computedIcon = computed(() => {
            if (props.option.icon !== '') return props.option.icon;

            if (typeof props.icon === 'function') {
                return props.icon(props.option, props.prop);
            }
            return props.icon;
        }),
        computedText = computed(() => {
            if (typeof props.text !== 'undefined') {
                if (typeof props.text === 'function') {
                    return props.text(props.option, props.prop);
                }

                if (props.text !== '') return props.text;
            }


            return computedLabel.value;
        }),
        computedLabel = computed(() => {
            if (typeof props.labelFormatter === 'function') return props.labelFormatter(props.option);
            return props.option.label;
        }),
        computedClass = computed(() => {
            if (typeof props.customClass === 'function') return props.customClass(props.option);
            if (typeof props.customClass !== 'undefined') return props.customClass;
            return `lkt-opt-${props.option.value}`;
        }),
        optionSlot = computed(() => {
            if (!props.optionSlot) return undefined;
            if (typeof Settings.optionSlots[props.optionSlot] === 'undefined') return undefined;
            return Settings.optionSlots[props.optionSlot];
        }),
        computedContainerComponent = computed(() => {
            if (optionSlot.value) return optionSlot.value;
            if (props.isTag) return 'lkt-tag';
            if (!props.editable && (props.modal !== '' || props.option.modal !== '')) return 'lkt-button';
            if (!props.editable && props.download !== '') return 'lkt-anchor';
            return 'div';
        }),
        computedContainerAttrs = computed(() => {
            if (computedContainerComponent.value === 'lkt-button') {
                let modal = props.option.modal;
                if (props.modal) modal = props.modal;
                let modalVal = modal;
                if (typeof modal === 'function') {
                    modalVal = () => {
                        return modal(props.option);
                    };
                }

                return {
                    modal: modalVal,
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
                    };

                } else if (props.download.startsWith('prop:')) {
                    href = props.download.substring(5);
                    href = props.option[href];
                }

                let isDownload = props.download !== '';

                return {
                    href,
                    target: isDownload ? '_blank' : '',
                    download: isDownload,
                };
            }

            if (computedContainerComponent.value === 'lkt-tag') {
                return {
                    type: 'action-icon',
                    icon: 'lkt-icn-cancel',
                };
            }

            return {};
        });

    const onClick = () => {
            emit('click');
        },
        onClickIcon = () => {
            emit('click-icon', props.option);
        };
</script>

<template>
    <component
        :is="computedContainerComponent"
        v-bind="computedContainerAttrs"
        class="lkt-field--dropdown-option"
        :class="computedClass"
        :title="computedText"
        @click="onClick"
        @click-icon="onClickIcon"
    >
        <div
            v-if="computedIcon && computedContainerComponent !== 'lkt-button'"
            class="lkt-field--dropdown-option--icon-container">
            <i :class="computedIcon"></i>
        </div>
        <div class="lkt-field--dropdown-option--label-container">
            {{ computedText }}
        </div>

        <lkt-tag
            v-for="tag in option.tags"
            v-bind="tag"
        />
    </component>
</template>