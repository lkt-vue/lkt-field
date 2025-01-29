<script setup lang="ts">

    import { Option } from '../instances/Option';
    import { ref, watch } from 'vue';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: string
        options?: Option[]
        editable: boolean,
        focusing: boolean,
        disabled: boolean,
        readonly: boolean,
        tabindex: number,
    }>(), {
        modelValue: '',
        options: () => [],
    });

    const value = ref(props.modelValue),
        input = ref(null);

    watch(value, v => emit('update:modelValue', v));

    const hasFocus = ref(props.focusing);
    const container = ref(null);
    let blurTimeout:ReturnType<typeof setTimeout>|undefined = undefined;

    const focusFormula = () => {
            clearTimeout(blurTimeout);
            // @ts-ignore
            if (input.value && typeof input.value.focus === 'function') {
                // @ts-ignore
                input.value.focus();
            }
        },
        addBasicNumber = (n: number) => {
            value.value += '' + n;
            focusFormula();
        },
        addBasicOperator = (op: string) => {
            value.value += ' ' + op + ' ';
            focusFormula();
        },
        addAdvanceOperator = (op: string) => {
            value.value += ' ' + op + '(';
            focusFormula();
        },
        addSqrt = () => {
            value.value += ' sqrt(';
            focusFormula();
        },
        addParenthesis = (op: string) => {
            value.value += '' + op;
            focusFormula();
        },
        addDot = () => {
            value.value += '.';
            focusFormula();
        },
        addSpace = () => {
            value.value += ' ';
            focusFormula();
        },
        addCustomNumber = (button: Option) => {
            value.value += '' + button.value;
            focusFormula();
        };

    const onFocus = () => {
            hasFocus.value = true;
        },
        onBlur = () => {
            blurTimeout = setTimeout(() => {
                hasFocus.value = false;
            }, 100);
        };

    watch(hasFocus, v => {
        if (v) emit('focus');
        else emit('blur');
    });
</script>

<template>
    <div ref="container">
        <div class="lkt-calc--formula">
            <input
                type="text"
                ref="input"
                v-model="value"
                @focus="onFocus"
                @blur="onBlur"
            />
        </div>

        <lkt-tooltip
            v-if="editable"
            ref="dropdownEl"
            class="lkt-field--calc"
            v-model="hasFocus"
            :referrer="container"
            location-x="left-corner"
            location-y="bottom"
        >
            <div class="lkt-calc--custom-pad">
                <lkt-button
                    v-for="button in options"
                    :icon="button.icon"
                    :text="button.label"
                    @click="addCustomNumber(button)" />
            </div>
            <div class="lkt-calc--pad">
                <div class="lkt-calc--numeric-pad">
                    <lkt-button @click="addBasicNumber(7)" text="7" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(8)" text="8" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(9)" text="9" class="lkt-calc--btn-number" />

                    <lkt-button @click="addBasicNumber(4)" text="4" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(5)" text="5" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(6)" text="6" class="lkt-calc--btn-number" />

                    <lkt-button @click="addBasicNumber(1)" text="1" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(2)" text="2" class="lkt-calc--btn-number" />
                    <lkt-button @click="addBasicNumber(3)" text="3" class="lkt-calc--btn-number" />

                    <lkt-button @click="addDot()" text="." />
                    <lkt-button @click="addBasicNumber(0)" text="0" class="lkt-calc--btn-number" />
                    <lkt-button @click="addSpace()" text="&nbsp;" />
                </div>
                <div class="lkt-calc--math-pad">
                    <lkt-button @click="addParenthesis('[')" text="[" />
                    <lkt-button @click="addParenthesis(']')" text="]" />

                    <lkt-button @click="addParenthesis('(')" text="(" />
                    <lkt-button @click="addParenthesis(')')" text=")" />

                    <lkt-button @click="addBasicOperator('+')" text="+" />
                    <lkt-button @click="addBasicOperator('-')" text="&minus;" />

                    <lkt-button @click="addBasicOperator('*')" text="&times;" />
                    <lkt-button @click="addBasicOperator('/')" text="&divide;" />
                </div>
                <div class="lkt-calc--advance-math-pad">
                    <lkt-button @click="addSqrt()" text="&Sqrt;" />
                    <lkt-button @click="addAdvanceOperator('log')" text="log" />
                    <lkt-button @click="addAdvanceOperator('ln')" text="ln" />

                    <lkt-button @click="addAdvanceOperator('sin')" text="sin" />
                    <lkt-button @click="addAdvanceOperator('cos')" text="cos" />
                    <lkt-button @click="addAdvanceOperator('tan')" text="tan" />
                </div>
            </div>
        </lkt-tooltip>
    </div>
</template>