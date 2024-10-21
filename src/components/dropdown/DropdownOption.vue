<script setup lang="ts">
    import { Option } from '@/instances/Option';
    import { computed } from 'vue';

    const props = withDefaults(defineProps<{
        option: Option,
        icon?: string
    }>(), {
        option: () => ({}),
        icon: '',
    });

    const computedIcon = computed(() => {
            if (props.option.icon !== '') return props.option.icon;
            return props.icon;
        }),
        computedClass = computed(() => {
            return `lkt-opt-${props.option.value}`;
        });
</script>

<template>
    <div
        class="lkt-field--dropdown-option"
        :class="computedClass"
        :title="option.label">
        <div v-if="computedIcon" class="lkt-field--dropdown-option--icon-container">
            <i :class="computedIcon"></i>
        </div>
        <div class="lkt-field--dropdown-option--label-container">
            {{ option.label }}
        </div>
    </div>
</template>