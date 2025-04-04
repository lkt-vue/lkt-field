<script setup lang="ts">
    import {
        AccordionConfig,
        AccordionToggleMode,
        AccordionType,
        AnchorType,
        FieldType,
        FileBrowserConfig,
        FileEntityConfig,
        FileEntityType, LktObject,
        MenuConfig,
        MenuEntryConfig,
        MenuEntryType,
    } from 'lkt-vue-kernel';
    import { nextTick, onMounted, ref, watch } from 'vue';
    import FileEntityBox from '@/components/file-browser/FileEntityBox.vue';
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import FileEntityDetails from '@/components/file-browser/FileEntityDetails.vue';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        type: FieldType
        fileBrowserConfig?: FileBrowserConfig
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const emit = defineEmits([]);

    const isLoading = ref(false);
    const items = ref(<FileEntityConfig[]>[]);
    const menus = ref(<LktObject>{});
    const activeElement = ref(<FileEntityConfig | undefined>undefined);

    const childToMenuEntry = (child: FileEntityConfig): MenuEntryConfig => {
        return {
            key: String(child.id),
            type: MenuEntryType.Anchor,
            anchor: {
                text: child.name,
                type: AnchorType.Action,
                events: {
                    click: () => {
                        activeElement.value = undefined;
                        nextTick(() => {
                            activeElement.value = child;
                        })
                    },
                },
            },
            keepOpenOnChildClick: true,
            // class?: string;
            // icon?: string;
            children: child.children ? child.children.map(childToMenuEntry) : [],
        };
    };

    const loadResource = () => {
        if (props.fileBrowserConfig?.http?.resource) {
            isLoading.value = true;

            httpCall(props.fileBrowserConfig.http.resource, props.fileBrowserConfig.http.data).then((r: HTTPResponse) => {
                isLoading.value = false;
                items.value = <FileEntityConfig[]>r.data;

                if (items.value.length > 0) {
                    activeElement.value = items.value[0];
                }

                items.value.forEach((unit, i) => {
                    let k = `unit-${i}`;
                    menus.value[k] = unit.children?.map(childToMenuEntry) ?? []
                })

            }).catch((r: any) => {
                isLoading.value = false;
            });
        }
    }

    watch(activeElement, (v) => {
        console.log('updatedActiveElement: ', v);
    }, { deep: true });

    watch(items, (v) => {
        console.log('updatedItems: ', v);
    }, { deep: true });

    onMounted(() => {
        loadResource();
    })

</script>

<template>
    <lkt-modal
        :modal-name="modalName"
        :modal-key="modalKey"
        :z-index="zIndex"
        title="File Browser"
        class="lkt-file-browser"
    >
        <div class="lkt-flex-row">
            <div class="lkt-flex-col-3">
                <template v-for="(item, i) in items">
                    <lkt-accordion
                        v-bind="<AccordionConfig>{
                            modelValue: i === 0,
                            title: item.name,
                            toggleMode: AccordionToggleMode.Display,
                            type: items.length === 1 ? AccordionType.Always : AccordionType.Auto
                        }"
                    >
                        <div class="lkt-flex-column">
                            <lkt-menu
                                v-bind="<MenuConfig>{
                                    modelValue: menus[`unit-${i}`]
                                }"
                            />
                        </div>
                    </lkt-accordion>
                </template>
            </div>
            <div class="lkt-flex-col-9">
                <div v-if="activeElement">
                    <lkt-accordion
                        v-bind="<AccordionConfig>{
                            type: AccordionType.Always,
                            title: activeElement.name,
                        }"
                    >
                        <template
                            v-if="[FileEntityType.Directory, FileEntityType.StorageUnit].includes(activeElement.type)">
                            <div class="lkt-grid-1 lkt-grid-8--from-768">
                                <template v-for="(child, childIndex) in activeElement.children">
                                    <file-entity-box v-model="activeElement.children[childIndex]" />
                                </template>
                            </div>
                        </template>
                        <template v-else>
                            <file-entity-details
                                v-model="activeElement"
                                :file-browser-config="fileBrowserConfig"
                            />
                        </template>
                    </lkt-accordion>
                </div>
            </div>
        </div>
    </lkt-modal>
</template>

<style lang="css">
    .lkt-file-browser .lkt-menu {
        --lkt-menu--width: 100%;
        --lkt-menu--max-width: 100%;
        transform: none;
    }
</style>