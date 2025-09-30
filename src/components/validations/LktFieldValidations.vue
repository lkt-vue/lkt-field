<script setup lang="ts">
    import ValidationItem from './ValidationItem.vue';
    import { ButtonConfig, ButtonType, FieldValidation, FieldValidationConfig } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<{
        items: FieldValidation[]
        stack: string
        config: FieldValidationConfig
    }>(), {
        items: () => [],
        stack: 'default',
    });
</script>

<template>
    <div class="lkt-field-validation-info">
        <template v-if="config.groupConstraints">
            <lkt-button
                v-bind="<ButtonConfig>{
                    ...props.config.groupConstraintsButton,
                    type: ButtonType.TooltipEver
                }">
                <template #tooltip="{doClose}">
                    <validation-item
                        v-for="validation in items"
                        :validation="validation"
                        :stack="stack"
                        :key="validation.code" />
                </template>
            </lkt-button>
        </template>
        <template v-else>
            <validation-item
                v-for="validation in items"
                :validation="validation"
                :stack="stack"
                :key="validation.code" />
        </template>
    </div>
</template>