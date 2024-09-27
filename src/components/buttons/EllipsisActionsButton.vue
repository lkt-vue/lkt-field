<script setup lang="ts">

import UndoButton from "./UndoButton.vue";
import ClearButton from "./ClearButton.vue";
import PasswordButton from "./PasswordButton.vue";
import EditionButton from "./EditionButton.vue";
import {ref, watch} from "vue";

const emit = defineEmits(['undo', 'clear', 'update:showPasswordCheck', 'update:showEditionCheck']);
const props = withDefaults(defineProps<{
    showUndo?: boolean
    showClear?: boolean
    showPassword?: boolean
    showPasswordCheck?: boolean
    showEdition?: boolean
    showEditionCheck?: boolean
}>(), {
});


const showPasswordChecked = ref(props.showPasswordCheck);
watch(() => props.showPasswordCheck, v => showPasswordChecked.value = v);
watch(showPasswordChecked, (v) => emit('update:showPasswordCheck', v));

const showEditionChecked = ref(props.showEditionCheck);
watch(() => props.showEditionCheck, v => showEditionChecked.value = v);
watch(showEditionChecked, (v) => emit('update:showEditionCheck', v));
</script>

<template>
    <lkt-button
        split
        split-icon="lkt-field-icon-ellipsis-vert"
        class="lkt-field--info-btn"
    >
        <template #split="{doClose}">
            <undo-button v-if="showUndo" @click="() => emit('undo')" inside-ellipsis/>
            <clear-button v-if="showClear" @click="() => emit('clear')" inside-ellipsis/>
            <password-button v-if="showPassword" v-model="showPasswordChecked" inside-ellipsis/>
            <edition-button v-if="showEdition" v-model="showEditionChecked" inside-ellipsis/>
        </template>
    </lkt-button>
</template>

<style scoped>

</style>