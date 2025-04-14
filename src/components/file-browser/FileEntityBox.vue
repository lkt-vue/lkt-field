<script setup lang="ts">
    import { FileEntity, FileEntityType, IconConfig } from 'lkt-vue-kernel';
    import { computed, ref } from 'vue';

    const props = withDefaults(defineProps<{
        modelValue: FileEntity
    }>(), {

    })

    const emit = defineEmits([
        'double-click'
    ]);

    const entity = ref(props.modelValue);
    const clicks = ref(0);
    let clickTimer = undefined;

    const onClick = () => {

        ++clicks.value;
        if (clicks.value === 1) {
            clickTimer = setTimeout( () => {
                entity.value.isPicked = !entity.value.isPicked;
                clicks.value = 0
            }, 200);
        } else {
            clearTimeout(clickTimer);
            emit('double-click', entity.value);
            clicks.value = 0
        }
    }

    const computedPickedIcon = computed(() => {
        if (entity.value.isPicked) return 'lkt-icn-checkbox';
        return 'lkt-icn-checkbox-empty';
    })
</script>

<template>
    <div class="lkt-file-entity-box" @click="onClick">
        <div class="lkt-file-entity-main">
            <i class="lkt-file-entity-picked-indicator" :class="computedPickedIcon"/>
            <template v-if="entity.type === FileEntityType.Directory">
                <lkt-icon
                    v-bind="<IconConfig>{
                        icon: 'lkt-icn-upload',
                        text: entity.name,
                    }"
                />
            </template>
            <template v-else-if="entity.type === FileEntityType.Image">
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