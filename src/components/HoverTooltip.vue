<script setup lang="ts">
const props = withDefaults(defineProps<{
    content: string
}>(), {
    content: '',
});
</script>

<template>
    <div class="lkt-field--hover-tooltip" v-html="content"/>
</template>

<style scoped>

</style>