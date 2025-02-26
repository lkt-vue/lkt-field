<script setup lang="ts">
    import { computed } from 'vue';
    import LktField from '../../lib-components/LktField.vue';
    import { FieldType, LktObject } from 'lkt-vue-kernel';
    import { availableLanguages, currentLanguage } from 'lkt-i18n';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        type: FieldType
        translations: LktObject
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
        translations: () => ({}),
    });

    const computedAvailableLanguages = computed(() => {
        return availableLanguages.value.filter(z => z !== currentLanguage.value);
    });

</script>

<template>
    <lkt-modal
        :modal-name="modalName"
        title="__:lmm.confirmFormLeave"
        :modal-key="modalKey"
        :z-index="zIndex"
    >
        <div class="lkt-grid-1">
            <lkt-field
                :type="type"
                label="Idioma actual (ES)"
                v-model="translations['es']"
                can-clear
                can-undo
            />

            <lkt-field
                :type="type"
                v-for="lang in computedAvailableLanguages"
                :label="'Idioma (' + lang+')'"
                v-model="translations[lang]"
                can-clear
                can-undo
            />
        </div>
    </lkt-modal>
</template>