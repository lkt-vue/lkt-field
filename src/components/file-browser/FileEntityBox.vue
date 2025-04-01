<script setup lang="ts">

    import { IconConfig, LktObject } from 'lkt-vue-kernel';
    import { ref } from 'vue';

    const props = withDefaults(defineProps<{
        modelValue: LktObject
    }>(), {

    })

    const entity = ref(props.modelValue);
</script>

<template>
    <div class="lkt-file-entity-box">
        <div class="lkt-file-entity-main">
            <template v-if="entity.type === 'dir'">
                <lkt-icon
                    v-bind="<IconConfig>{
                        icon: 'lkt-icn-upload',
                        text: entity.name,
                    }"
                />
            </template>
            <template v-else-if="entity.type === 'img'">
                <lkt-image
                    v-bind="<IconConfig>{
                        src: entity.src,
                        text: entity.name,
                    }"
                />
            </template>
        </div>
    </div>
</template>

<style lang="css">
.lkt-file-entity-box {

}
</style>