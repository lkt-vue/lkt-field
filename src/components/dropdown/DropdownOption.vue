<script setup lang="ts">
    import { Option } from '@/instances/Option';
    import { computed } from 'vue';

    const props = withDefaults(defineProps<{
        option: Option,
        editable?: boolean
        icon?: string
        modal?: string
    }>(), {
        option: () => ({}),
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
        computedContainerComponent = computed(() => {
            if (!props.editable && props.modal !== '') return 'lkt-button';
            return 'div'
        }),
        computedContainerAttrs = computed(() => {
            if (computedContainerComponent.value === 'lkt-button') {
                return {
                    modal: props.modal,
                    modalKey: props.option.value,
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
        <div v-if="computedIcon" class="lkt-field--dropdown-option--icon-container">
            <i :class="computedIcon"></i>
        </div>
        <div class="lkt-field--dropdown-option--label-container">
            {{ option.label }}
        </div>
    </component>
</template>