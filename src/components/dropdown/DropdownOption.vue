<script setup lang="ts">
    import {
        AnchorConfig,
        AnchorType,
        extractPropValue,
        OptionConfig,
        TableConfig, TableType,
        TagConfig,
        TagType,
    } from 'lkt-vue-kernel';
    import { computed, markRaw } from 'vue';
    import { Settings } from '../../settings/Settings';
    import { DropdownOptionProps } from '../../config/DropdownOptionProps.ts';
    import { canDisplayOption, optionIsActive, prepareOptions, receiveOptions } from '@/functions/option-functions.ts';
    import DropdownOption from '@/components/dropdown/DropdownOption.vue';

    const emit = defineEmits([
        'click',
        'click-icon'
    ]);

    const props = withDefaults(defineProps<DropdownOptionProps>(), {});

    const computedIcon = computed(() => {
            if (props.item?.icon) return props.item.icon;

            if (typeof props.data?.optionsConfig?.icon === 'function') {
                return props.data.optionsConfig.icon(props.item, props.data.prop);
            }
            return props.data.optionsConfig.icon;
        }),
        computedText = computed(() => {
            if (typeof props.data.optionsConfig.text !== 'undefined') {
                if (typeof props.data.optionsConfig.text === 'function') {
                    return props.data.optionsConfig.text(props.item, props.data.prop);
                }

                if (props.data.optionsConfig.text !== '') return props.data.optionsConfig.text;
            }


            return computedLabel.value;
        }),
        computedLabel = computed(() => {
            if (typeof props.data.optionsConfig.labelFormatter === 'function') return props.data.optionsConfig.labelFormatter(props.item);
            return props.item.label;
        }),
        computedClass = computed(() => {
            if (typeof props.data.optionsConfig?.class === 'function') return props.data.optionsConfig.class(props.item);
            if (typeof props.data.optionsConfig?.class !== 'undefined') return props.data.optionsConfig.class;
            return `lkt-opt-${props.item.value}`;
        }),
        optionSlot = computed(() => {
            if (!props.data.optionSlot) return undefined;
            if (typeof Settings.optionSlots[props.data.optionSlot] === 'undefined') return undefined;
            return Settings.optionSlots[props.data.optionSlot];
        }),
        computedContainerComponent = computed(() => {
            if (optionSlot.value) return optionSlot.value;
            if (props.data.isTag) return 'lkt-tag';
            if (!props.editing && !props.data.previewMode && ((typeof props.data.optionsConfig?.modal !== 'undefined' && props.data.optionsConfig.modal !== '') || (typeof props.item.modal !== 'undefined' && props.item.modal !== ''))) return 'lkt-button';
            if (!props.editing && !props.data.previewMode && (typeof props.data.optionsConfig?.download !== 'undefined' && props.data.optionsConfig.download !== '')) return 'lkt-anchor';
            if (!props.editing && !props.data.previewMode && (typeof props.data.optionsConfig?.anchor !== 'undefined')) return 'lkt-anchor';
            return 'div';
        }),
        computedContainerAttrs = computed(() => {
            if (computedContainerComponent.value === 'lkt-button') {
                let modal = props.item.modal;
                if (props.data.optionsConfig?.modal) modal = props.data.optionsConfig.modal;
                let modalVal = modal;
                if (typeof modal === 'function') {
                    modalVal = () => {
                        return modal(props.item);
                    };
                }

                return {
                    modal: modalVal,
                    modalData: props.data.optionsConfig.modalData,
                    modalKey: props.item.value,
                    icon: computedIcon.value,
                };
            }

            if (computedContainerComponent.value === 'lkt-anchor') {

                if (typeof props.data.optionsConfig?.anchor === 'function') return <AnchorConfig>{ ...props.data.optionsConfig.anchor({data:  props.item }), prop: props.item };
                if (typeof props.data.optionsConfig?.anchor === 'object') return <AnchorConfig>{ ...props.data.optionsConfig.anchor, prop: props.item };

                let href = props.data.optionsConfig?.download;
                if (typeof props.data.optionsConfig.download === 'function') {
                    href = () => {
                        //@ts-ignore
                        return props.data.optionsConfig?.download(props.item);
                    };

                } else if (props.data.optionsConfig?.download?.startsWith('prop:')) {
                    href = extractPropValue(props.data.optionsConfig?.download, props.item);
                    // href = props.data.optionsConfig?.download.substring(5);
                    // href = props.item[href];
                }

                let isDownload = props.data.optionsConfig.download !== '';

                return <AnchorConfig>{
                    to: href,
                    type: isDownload ? AnchorType.Download : undefined,
                    prop: props.item,
                };
            }

            if (computedContainerComponent.value === 'lkt-tag') {
                return {
                    type: TagType.ActionIcon,
                    icon: 'lkt-icn-cancel',
                };
            }

            return {};
        }),
        computedTags = computed((): Array<TagConfig> => {
            if (typeof props.item.tags === 'undefined') return [];
            //@ts-ignore
            if (typeof props.item.tags === 'function') return props.item.tags();
            return props.item.tags;
        });

    const onClick = () => {
            if (props.item.children && props.item.children.length > 0) return;
            if (typeof props.events?.click === 'function') {
                props.events.click(props.item, props.index);
            }
            emit('click');
        },
        onChildClick = (child: OptionConfig) => {
            if (typeof props.events?.click === 'function') {
                props.events.click(child, props.index);
            }
            emit('click');
        },
        onInternalClick = (event: MouseEvent) => {
            if (props.editing) {
                event.stopPropagation();
                event.preventDefault();
                onClick();
            }
        },
        onClickIcon = () => {
            if (typeof props.events?.clickIcon === 'function') {
                props.events.clickIcon(props.item, props.index);
            }
            emit('click-icon', props.item);
        };
</script>

<template>
    <component
        :is="computedContainerComponent"
        v-bind="computedContainerAttrs"
        class="lkt-field--dropdown-option"
        :class="computedClass"
        :title="computedText"
        @click.stop.prevent="onClick"
        @click-icon="onClickIcon"
    >
        <div
            v-if="computedIcon && computedContainerComponent !== 'lkt-button'"
            class="lkt-field--dropdown-option--icon-container"
            @click="onInternalClick"
        >
            <i :class="computedIcon"></i>
        </div>
        <div
            class="lkt-field--dropdown-option--label-container"
            @click="onInternalClick"
        >
            {{ computedText }}
        </div>

        <lkt-tag
            v-for="tag in computedTags"
            v-bind="tag"
        />
    </component>
    <lkt-table
        ref="optionList"
        v-if="false && item.children && item.children.length > 0"
        v-model="item.children"
        v-bind="<TableConfig>{
            type: TableType.Ul,
            class: 'lkt-field--dropdown-children',
            editMode: editing,
            itemDisplayChecker: (option: OptionConfig) => {
                return canDisplayOption(option, data.query, true, data.optionsConfig?.filter)
            },
            itemsContainerClass: `lkt-field--dropdown-options`,
            itemContainerClass: (option: OptionConfig, index: number) => {
                let r = [];
                if (optionIsActive(option, data.editableValue, data.multiple)) r.push('is-active');
                if (data.focusedOptionIndex === index) r.push('is-focused');
                if (option.disabled) r.push('is-disabled')
                return r.join(' ');
            },
            itemSlotComponent: markRaw(DropdownOption),
            itemSlotData: data,
            itemSlotEvents: {
                click: (item: OptionConfig, i: number) => {
                    onChildClick(item);
                }
            }
        }"
    />
</template>