<script setup lang="ts">
    import { FieldType } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        type: FieldType
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

</script>

<template>
    <lkt-modal
        :modal-name="modalName"
        :modal-key="modalKey"
        :z-index="zIndex"
        title="File Browser"
        class="lkt-file-browser"
    >
        <div class="lkt-grid-1">

        </div>
    </lkt-modal>
</template>

<style lang="css">

</style>