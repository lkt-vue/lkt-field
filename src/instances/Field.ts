import { ValidFieldValue } from '../types/ValidFieldValue';
import { FieldType } from '../enums/FieldType';
import { LktObject } from 'lkt-ts-interfaces';
import { Option } from './Option';
import { MultipleDisplayType } from '../enums/MultipleDisplayType';
import { LktFieldConfigType } from '../types/LktFieldConfigType';
import { generateRandomString } from 'lkt-string-tools';

export class Field implements LktFieldConfigType {
    modelValue: ValidFieldValue = '';
    type: FieldType = FieldType.Text;
    valid?: boolean = undefined;
    placeholder?: string = '';
    searchPlaceholder?: string = '';
    label?: string = '';
    labelIcon?: string = '';
    labelIconAtEnd?: boolean = false;
    name?: string = generateRandomString(16);
    autocomplete?: boolean = false;
    disabled?: boolean = false;
    readonly?: boolean = false;
    readMode?: boolean = false;
    allowReadModeSwitch?: boolean = false;
    tabindex?: number = undefined;
    mandatory?: boolean = false;
    showPassword?: boolean = false;
    canClear?: boolean = false;
    canUndo?: boolean = false;
    canI18n?: boolean = false;
    canStep?: boolean = true;
    mandatoryMessage?: string = '';
    infoMessage?: string = '';
    errorMessage?: string = '';
    min?: number | string | undefined = undefined;
    max?: number | string | undefined = undefined;
    step?: number | string = 1;
    enableAutoNumberFix?: boolean = true;
    emptyValueSlot?: string = '';
    optionSlot?: string = undefined;
    valueSlot?: string = undefined;
    editSlot?: string = undefined;
    slotData?: LktObject = {};
    resource?: string = '';
    resourceData?: LktObject = {};
    validationResource?: string
    validationResourceData?: LktObject = {};
    autoValidation?: boolean = false;
    autoValidationType?: 'focus' | 'blur' | 'always' = 'blur';
    validationStack?: string = 'default';
    minNumbers: number | string | undefined = undefined;
    maxNumbers: number | string | undefined = undefined;
    minChars: number | string | undefined = undefined;
    maxChars: number | string | undefined = undefined;
    minUpperChars: number | string | undefined = undefined;
    maxUpperChars: number | string | undefined = undefined;
    minLowerChars: number | string | undefined = undefined;
    maxLowerChars: number | string | undefined = undefined;
    minSpecialChars: number | string | undefined = undefined;
    maxSpecialChars: number | string | undefined = undefined;
    checkEqualTo: number | string | undefined = undefined;
    featuredButton?: string = '';
    infoButtonEllipsis?: boolean = false
    fileName?: string = '';
    customButtonText?: string = '';
    customButtonClass?: string = '';
    options?: string | Option[] = [];
    multiple?: boolean = false;
    multipleDisplay?: MultipleDisplayType = MultipleDisplayType.List;
    multipleDisplayEdition?: MultipleDisplayType = MultipleDisplayType.Inline;
    searchable?: boolean = false;
    autoloadOptionsResource?: boolean | 'feed' = false;
    optionsDownload?: string | Function = '';
    optionsModal?: string | Function = '';
    optionsModalData?: LktObject | Function = {};
    optionsIcon?: string | Function = '';
    optionsLabelFormatter?: Function = undefined;
    optionsResource?: string = '';
    optionsResourceData?: LktObject = {};
    icon?: string | Function = '';
    download?: string | Function = '';
    modal?: string | Function = ''
    modalKey?: string | number | Function = '';
    modalData?: LktObject = {};

    constructor(data: LktObject = {}) {
        for (let k in data) {
            //@ts-ignore
            this[k] = data[k];
        }
    }
}