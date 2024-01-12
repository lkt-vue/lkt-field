declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        autocomplete: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabindex: {
            type: NumberConstructor;
            default: any;
        };
        mandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        resetMessage: {
            type: StringConstructor;
            default: string;
        };
        mandatoryMessage: {
            type: StringConstructor;
            default: string;
        };
        infoMessage: {
            type: StringConstructor;
            default: string;
        };
        errorMessage: {
            type: StringConstructor;
            default: string;
        };
        showPasswordMessage: {
            type: StringConstructor;
            default: string;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        min: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        isTel: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEmail: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        isNumber: {
            type: BooleanConstructor;
            default: boolean;
        };
        enableAutoNumberFix: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueSlot: {
            type: StringConstructor;
            default: string;
        };
        editSlot: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-info"?: (...args: any[]) => any;
        "onClick-error"?: (...args: any[]) => any;
    }, {
        Identifier: string;
        reset: () => string | number;
        focus: () => void;
        value: () => string | number;
        isMandatory: () => boolean;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "update:modelValue" | "click-info" | "click-error")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        autocomplete: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabindex: {
            type: NumberConstructor;
            default: any;
        };
        mandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        resetMessage: {
            type: StringConstructor;
            default: string;
        };
        mandatoryMessage: {
            type: StringConstructor;
            default: string;
        };
        infoMessage: {
            type: StringConstructor;
            default: string;
        };
        errorMessage: {
            type: StringConstructor;
            default: string;
        };
        showPasswordMessage: {
            type: StringConstructor;
            default: string;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        min: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        isTel: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEmail: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        isNumber: {
            type: BooleanConstructor;
            default: boolean;
        };
        enableAutoNumberFix: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueSlot: {
            type: StringConstructor;
            default: string;
        };
        editSlot: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-info"?: (...args: any[]) => any;
        "onClick-error"?: (...args: any[]) => any;
    }, {
        max: string | number;
        name: string;
        label: string;
        reset: boolean;
        autocomplete: boolean;
        disabled: boolean;
        readonly: boolean;
        mandatory: boolean;
        step: string | number;
        placeholder: string;
        tabindex: number;
        min: string | number;
        modelValue: string | number;
        palette: string;
        valid: boolean;
        readMode: boolean;
        allowReadModeSwitch: boolean;
        showPassword: boolean;
        resetMessage: string;
        mandatoryMessage: string;
        infoMessage: string;
        errorMessage: string;
        showPasswordMessage: string;
        switchEditionMessage: string;
        isTel: boolean;
        isEmail: boolean;
        isPassword: boolean;
        isSearch: boolean;
        isNumber: boolean;
        enableAutoNumberFix: boolean;
        valueSlot: string;
        editSlot: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        autocomplete: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabindex: {
            type: NumberConstructor;
            default: any;
        };
        mandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        resetMessage: {
            type: StringConstructor;
            default: string;
        };
        mandatoryMessage: {
            type: StringConstructor;
            default: string;
        };
        infoMessage: {
            type: StringConstructor;
            default: string;
        };
        errorMessage: {
            type: StringConstructor;
            default: string;
        };
        showPasswordMessage: {
            type: StringConstructor;
            default: string;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        min: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        max: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        step: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        isTel: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEmail: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        isNumber: {
            type: BooleanConstructor;
            default: boolean;
        };
        enableAutoNumberFix: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueSlot: {
            type: StringConstructor;
            default: string;
        };
        editSlot: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onKeydown?: (...args: any[]) => any;
        onKeyup?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-info"?: (...args: any[]) => any;
        "onClick-error"?: (...args: any[]) => any;
    }, {
        Identifier: string;
        reset: () => string | number;
        focus: () => void;
        value: () => string | number;
        isMandatory: () => boolean;
    }, {}, {}, {}, {
        max: string | number;
        name: string;
        label: string;
        reset: boolean;
        autocomplete: boolean;
        disabled: boolean;
        readonly: boolean;
        mandatory: boolean;
        step: string | number;
        placeholder: string;
        tabindex: number;
        min: string | number;
        modelValue: string | number;
        palette: string;
        valid: boolean;
        readMode: boolean;
        allowReadModeSwitch: boolean;
        showPassword: boolean;
        resetMessage: string;
        mandatoryMessage: string;
        infoMessage: string;
        errorMessage: string;
        showPasswordMessage: string;
        switchEditionMessage: string;
        isTel: boolean;
        isEmail: boolean;
        isPassword: boolean;
        isSearch: boolean;
        isNumber: boolean;
        enableAutoNumberFix: boolean;
        valueSlot: string;
        editSlot: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: any;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    showPasswordMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    isTel: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEmail: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableAutoNumberFix: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueSlot: {
        type: StringConstructor;
        default: string;
    };
    editSlot: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onClick-info"?: (...args: any[]) => any;
    "onClick-error"?: (...args: any[]) => any;
}, {
    Identifier: string;
    reset: () => string | number;
    focus: () => void;
    value: () => string | number;
    isMandatory: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "click" | "focus" | "keydown" | "keyup" | "update:modelValue" | "click-info" | "click-error")[], "blur" | "click" | "focus" | "keydown" | "keyup" | "update:modelValue" | "click-info" | "click-error", {
    max: string | number;
    name: string;
    label: string;
    reset: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    mandatory: boolean;
    step: string | number;
    placeholder: string;
    tabindex: number;
    min: string | number;
    modelValue: string | number;
    palette: string;
    valid: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    showPassword: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    showPasswordMessage: string;
    switchEditionMessage: string;
    isTel: boolean;
    isEmail: boolean;
    isPassword: boolean;
    isSearch: boolean;
    isNumber: boolean;
    enableAutoNumberFix: boolean;
    valueSlot: string;
    editSlot: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label: (_: {}) => any;
        edit: (_: {
            value: string | number;
            title: string;
        }) => any;
        value: (_: {
            value: string | number;
            title: string;
        }) => any;
    };
});
export default _default;
