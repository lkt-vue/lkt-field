import { ButtonConfig, FileBrowserConfig, HttpCallConfig, TableConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: string[];
    name: string;
    id: string;
    fileUploadHttp: HttpCallConfig;
    accept: string;
    placeholder?: string;
    fileName?: string;
    uploading?: boolean;
    focusing?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    tabindex: number;
    isImage?: boolean;
    fileBrowserConfig?: FileBrowserConfig;
    callToActionButton?: ButtonConfig;
    min: number | false;
    max: number | false;
    tableConfig: TableConfig;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
    uploading: (...args: any[]) => void;
    "upload-error": (...args: any[]) => void;
    "upload-success": (...args: any[]) => void;
    "picked-files": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onUploading?: ((...args: any[]) => any) | undefined;
    "onUpload-error"?: ((...args: any[]) => any) | undefined;
    "onUpload-success"?: ((...args: any[]) => any) | undefined;
    "onPicked-files"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
