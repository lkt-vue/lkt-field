<script setup lang="ts">

    import LktField from '@/lib-components/LktField.vue';
    import RgbaRange from '@/components/color/RgbaRange.vue';
    import { computed, ref, watch } from 'vue';
    import { calculateColorValue, decodeHexColor, getContrastFontColor } from '@/functions/color-functions';

    const emit = defineEmits(['update:modelValue']);

    const props = withDefaults(defineProps<{
        modelValue: string,
    }>(), {
        modelValue: '',
    });

    const decodeColor = (value: string) => {
            if ([0, 1].includes(value.length)) {
                pickedColorRed.value = 0;
                pickedColorGreen.value = 0;
                pickedColorBlue.value = 0;
                pickedColorAlpha.value = 255;

            } else if ([7, 9].includes(value.length)) {
                let decoded = decodeHexColor(value);

                pickedColorRed.value = decoded.r;
                pickedColorGreen.value = decoded.g;
                pickedColorBlue.value = decoded.b;
                pickedColorAlpha.value = decoded.a;
            }
        },
        onRgbaChanged = ($event) => {
            value.value = calculateColorValue(
                pickedColorRed.value,
                pickedColorGreen.value,
                pickedColorBlue.value,
                pickedColorAlpha.value,
            );
        },
        onColorChange = ($event) => {
            decodeColor(value.value);
        };

    const pickedColorRed = ref(255),
        pickedColorGreen = ref(255),
        pickedColorBlue = ref(255),
        pickedColorAlpha = ref(255),
        value = ref(props.modelValue);

    decodeColor(value.value);

    watch([pickedColorRed, pickedColorGreen, pickedColorBlue, pickedColorAlpha], onRgbaChanged);

    watch(() => props.modelValue, v => value.value = v);
    watch(value, v => emit('update:modelValue', v));

    const computedComplementaryColor = computed(() => {
        return getContrastFontColor(decodeHexColor(value.value));
    });

    const computedColorStyles = computed(() => {
        if (value.value === '' || value.value === '#') {
            return {};
        }

        return {
            background: value.value,
            '--lkt-btn-bg': value.value,

            color: computedComplementaryColor.value,
            '--lkt-btn-color': computedComplementaryColor.value,
        };
    });

    const computedColorStylesHex = computed(() => {
        if (value.value === '' || value.value === '#') {
            return {};
        }

        return {
            '--lkt-field-bg-input': value.value,
            '--lkt-field-color': computedComplementaryColor.value,
        };
    });
</script>

<template>
    <lkt-button
        class="lkt-field--toggle-button"
        :style="computedColorStyles"
        :text="value"
        tooltip
        tooltip-class="lkt-field-color--alpha--tooltip"
        tooltip-location-y="bottom"
        tooltip-location-x="left-corner"
    >
        <template #tooltip="{doClose}">
            <div class="lkt-grid-1">
                <div class="lkt-field-color--tooltip--rgba-container">
                    <div class="lkt-field-color--tooltip--hex-input-container">
                        <label class="like-lkt-field-label">HEX</label>
                        <lkt-field
                            v-model="value"
                            :style="computedColorStylesHex"
                            @change="onColorChange"
                        />
                    </div>
                </div>
                <rgba-range v-model="pickedColorRed" label="R" range-class="color-range--red" />
                <rgba-range v-model="pickedColorGreen" label="G" range-class="color-range--green" />
                <rgba-range v-model="pickedColorBlue" label="B" range-class="color-range--blue" />
                <rgba-range v-model="pickedColorAlpha" label="A" range-class="color-range--alpha" />
            </div>
        </template>
    </lkt-button>
</template>