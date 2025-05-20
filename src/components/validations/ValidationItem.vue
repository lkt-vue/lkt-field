<script setup lang="ts">
    import { computed } from 'vue';
    import { getCodeMessage } from '../../functions/validation-functions';
    import { __ } from 'lkt-i18n';
    import { fill } from 'lkt-string-tools';
    import { Settings } from '../../settings/Settings';
    import { FieldValidation, IconConfig, ValidationStatus } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<{
        validation: FieldValidation
        stack: string
    }>(), {
        stack: 'default',
    });

    const computedMessage = computed(() => {
            let msg = getCodeMessage(props.validation.code, props.stack),
                replacements = {
                    min: props.validation.min,
                    max: props.validation.max,
                    value: props.validation.equalToValue,
                };

            let statusMsg = getCodeMessage(props.validation.status + '-' + props.validation.code, props.stack);
            if (statusMsg) msg = statusMsg;

            if (!msg) return props.validation.code;

            if (msg.startsWith('__:')) {
                return __(msg.substring(3), replacements);
            }

            return fill(msg, replacements, ':', '');
        }),
        hasIconSlot = computed(() => {
            return Settings.validationIconSlot !== '';
        }),
        iconSlot = computed(() => {
            return Settings.validationIconSlot;
        }),
        computedClasses = computed(() => {
            let r = [];

            r.push('code-' + props.validation.code);
            r.push('is-' + props.validation.status);

            return r.join(' ');
        }),
        computedIconConfig = computed(() => {
            switch (props.validation.status) {
                case ValidationStatus.Ok:
                    return Settings.validationIconOk;
                case ValidationStatus.Ko:
                    return Settings.validationIconKo;
                case ValidationStatus.Info:
                    return Settings.validationIconInfo;
            }
        });
</script>

<template>
    <div class="lkt-field-validation-message" :class="computedClasses">
        <template v-if="computedIconConfig && typeof computedIconConfig === 'string'">
            <lkt-icon v-bind="<IconConfig>{
                icon: computedIconConfig
            }"/>
        </template>
        <template v-else-if="computedIconConfig && typeof computedIconConfig === 'object'">
            <lkt-icon v-bind="computedIconConfig"/>
        </template>
        <template v-else-if="hasIconSlot">
            <component
                :is="iconSlot" />
        </template>
        {{ computedMessage }}
    </div>
</template>