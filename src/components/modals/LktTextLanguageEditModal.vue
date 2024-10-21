<script setup lang="ts">
import {computed} from "vue";
import LktFieldText from "../../lib-components/LktField.vue";
import {LktObject} from "lkt-ts-interfaces";
import {availableLanguages, currentLanguage} from "lkt-i18n";
import {ValidFieldType} from "../../types/ValidFieldType";

const props = withDefaults(defineProps<{
    modalName: string
    modalKey: string
    zIndex: number
    type: ValidFieldType
    translations: LktObject
}>(), {
    modalName: '',
    modalKey: '_',
    zIndex: 500,
    translations: () => ({}),
});

const computedAvailableLanguages = computed(() => {
    return availableLanguages.value.filter(z => z !== currentLanguage.value);
})

</script>

<template>
    <lkt-modal
        :modal-name="modalName"
        title="__:lmm.confirmFormLeave"
        :modal-key="modalKey"
        :z-index="zIndex"
    >
        <div class="lkt-grid-1">
            <lkt-field-text
                :type="type"
                label="Idioma actual (ES)"
                v-model="translations['es']"
                can-clear
                can-undo
            />

            <lkt-field-text
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