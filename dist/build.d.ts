declare class pu {
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
declare class Li {
    constructor(t?: {});
    label: string;
    data: {};
    disabled: boolean;
    group: string;
    icon: string;
    modal: string;
}
declare namespace mu {
    function install(e: any): void;
}
declare function yu(e: any): any;
declare function Su(e: any): any;
declare function Eu(e: any): any;
declare function gu(e: any): void;
declare function _u(e: any): any;
declare function Nu(e?: number, t?: string, i?: string, l?: boolean, n?: string): boolean;
declare function vu(e: any, t: any): void;
declare function xu(e: any): any;
declare function ku(e: any): any;
declare function Cu(e: any): any;
declare function wu(e: any): any;
declare function bu(e: any): any;
declare function Lu(e: any): boolean;
declare function Tu(e: any, t: any, i?: string): void;
declare function zu(e: any, t: any): void;
declare function Bu(e: any): void;
declare function hu(e: any, t: any): boolean;
declare function fu(e: any, t: any): boolean;
export { pu as Field, Li as Option, mu as default, yu as setFieldClearText, Su as setFieldDateReadFormat, Eu as setFieldDefaultDateReadFormat, gu as setFieldEmptySlot, _u as setFieldI18nText, Nu as setFieldNumberFormat, vu as setFieldOptionSlot, xu as setFieldShowPasswordOffText, ku as setFieldShowPasswordOnText, Cu as setFieldSwitchEditionOffText, wu as setFieldSwitchEditionOnText, bu as setFieldUndoText, Lu as setFieldValidationIconSlot, Tu as setFieldValidationMessage, zu as setModalPerItemType, Bu as setReadTextMaxLength, hu as setTextEditSlot, fu as setTextValueSlot };
