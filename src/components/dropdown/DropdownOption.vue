<script setup lang="ts">
    import { Option } from '@/instances/Option';
    import { computed } from 'vue';
    import { Settings } from '@/settings/Settings';

    const props = withDefaults(defineProps<{
        option: Option,
        optionSlot?: string,
        editable?: boolean
        icon?: string
        modal?: string
    }>(), {
        option: () => ({}),
        optionSlot: '',
        editable: false,
        icon: '',
        modal: '',
    });

    const computedIcon = computed(() => {
            if (props.option.icon !== '') return props.option.icon;
            return props.icon;
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
            return 'div'
        }),
        computedContainerAttrs = computed(() => {
            if (computedContainerComponent.value === 'lkt-button') {
                return {
                    modal: props.modal,
                    modalKey: props.option.value,
                    icon: computedIcon.value,
                };
            }
            return {
            };
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
            {{ option.label }}
        </div>
    </component>
</template>