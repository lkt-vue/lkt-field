declare class No {
    constructor(t?: {});
    modelValue: string;
    type: any;
    placeholder: string;
    searchPlaceholder: string;
    label: string;
    labelIcon: string;
    labelIconAtEnd: boolean;
    name: string;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    mandatory: boolean;
    showPassword: boolean;
    canClear: boolean;
    canUndo: boolean;
    canI18n: boolean;
    canStep: boolean;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    step: number;
    enableAutoNumberFix: boolean;
    emptyValueSlot: string;
    slotData: {};
    resource: string;
    resourceData: {};
    validationResourceData: {};
    autoValidation: boolean;
    autoValidationType: string;
    validationStack: string;
    featuredButton: string;
    infoButtonEllipsis: boolean;
    fileName: string;
    customButtonText: string;
    customButtonClass: string;
    options: any[];
    multiple: boolean;
    multipleDisplay: any;
    multipleDisplayEdition: any;
    searchable: boolean;
    autoloadOptionsResource: boolean;
    optionsDownload: string;
    optionsModal: string;
    optionsModalData: {};
    optionsIcon: string;
    optionsResource: string;
    optionsResourceData: {};
    icon: string;
    download: string;
    modal: string;
    modalKey: string;
    modalData: {};
    data: {};
}
declare class yt {
    constructor(t?: {});
    label: string;
    data: {};
    disabled: boolean;
    group: string;
    icon: string;
    modal: string;
}
declare namespace zo {
    function install(e: any): void;
}
declare function Mo(e: any): any;
declare function Vo(e: any): any;
declare function Po(e: any): any;
declare function Bo(e: any): void;
declare function Io(e: any): any;
declare function Zo(e?: number, t?: string, i?: string, s?: boolean, l?: string): boolean;
declare function Ro(e: any, t: any): void;
declare function Fo(e: any): any;
declare function Oo(e: any): any;
declare function Ho(e: any): any;
declare function Do(e: any): any;
declare function Ao(e: any): any;
declare function Wo(e: any): boolean;
declare function Uo(e: any, t: any, i?: string): void;
declare function $o(e: any): void;
declare function To(e: any, t: any): boolean;
declare function Lo(e: any, t: any): boolean;
export { No as Field, yt as Option, zo as default, Mo as setFieldClearText, Vo as setFieldDateReadFormat, Po as setFieldDefaultDateReadFormat, Bo as setFieldEmptySlot, Io as setFieldI18nText, Zo as setFieldNumberFormat, Ro as setFieldOptionSlot, Fo as setFieldShowPasswordOffText, Oo as setFieldShowPasswordOnText, Ho as setFieldSwitchEditionOffText, Do as setFieldSwitchEditionOnText, Ao as setFieldUndoText, Wo as setFieldValidationIconSlot, Uo as setFieldValidationMessage, $o as setReadTextMaxLength, To as setTextEditSlot, Lo as setTextValueSlot };
