import { LktObject } from 'lkt-ts-interfaces';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: string;
    name: string;
    id: string;
    accept: string;
    placeholder?: string;
    fileName?: string;
    resource?: string;
    resourceData?: LktObject;
    uploading?: boolean;
    focusing?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    tabindex: number;
    isImage?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
    "update:fileName": (...args: any[]) => void;
    uploading: (...args: any[]) => void;
    "upload-success": (...args: any[]) => void;
    "upload-error": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:fileName"?: ((...args: any[]) => any) | undefined;
    onUploading?: ((...args: any[]) => any) | undefined;
    "onUpload-success"?: ((...args: any[]) => any) | undefined;
    "onUpload-error"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    resource: string;
    resourceData: LktObject;
    fileName: string;
    focusing: boolean;
    uploading: boolean;
    isImage: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    inputElement: HTMLInputElement;
}, any>;
export default _default;
