<script setup lang="ts">
    import { computed } from 'vue';
    import { ButtonConfig, ButtonType, HttpCallConfig } from 'lkt-vue-kernel';

    const emit = defineEmits([
        'click',
    ]);

    const props = withDefaults(defineProps<{
        config: ButtonConfig
        fileUploadHttp: HttpCallConfig
        insideEllipsis?: boolean
    }>(), {
        insideEllipsis: false,
    });

    const computedClass = computed(() => {
        if (props.insideEllipsis) return 'lkt-field--info-split-btn';
        return 'lkt-field--info-btn';
    });

    const onClick = () => emit('click');
</script>

<template>
    <lkt-button
        v-bind="config"
        :type="config.type ? config.type : ButtonType.FileUpload"
        :resource="config.resource ?? fileUploadHttp.resource"
        :resource-data="config.resourceData ?? fileUploadHttp.data"
        :text="insideEllipsis ? config.text : ''"
        :class="computedClass"
        class="lkt-field--btn-file-upload"
        icon="lkt-icn-upload"
        @click="onClick"
    />
</template>