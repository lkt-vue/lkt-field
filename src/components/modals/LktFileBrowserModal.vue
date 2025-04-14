<script setup lang="ts">
    import {
        AccordionConfig,
        AccordionToggleMode,
        AccordionType,
        AnchorType,
        ButtonType,
        FieldType,
        FileBrowserConfig,
        FileEntity,
        FileEntityConfig,
        FileEntityType,
        LktObject,
        MenuConfig,
        MenuEntryConfig,
        MenuEntryType,
        TableConfig,
        TablePermission,
        TableType,
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
        modelValue: Array<string|number|undefined>
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
        modelValue: () => []
    });

    const emit = defineEmits([]);

    const isLoading = ref(false);
    const items = ref(<FileEntity[]>[]);
    const menus = ref(<LktObject>{});
    const activeElement = ref(<FileEntity | undefined>undefined);
    const value = ref(props.modelValue);

    const updateActiveElement = (element: FileEntity) => {
        activeElement.value = undefined;
        nextTick(() => {
            activeElement.value = element;
        })
    }

    const createElement = () => {
        let entity = new FileEntity();
        activeElement.value?.children?.push(entity);
        updateActiveElement(entity);
    }

    const childToMenuEntry = (child: FileEntity): MenuEntryConfig => {
        return {
            key: String(child.id),
            type: MenuEntryType.Anchor,
            anchor: {
                text: child.name,
                type: AnchorType.Action,
                events: {
                    click: () => {
                        updateActiveElement(child);
                    },
                },
            },
            keepOpenOnChildClick: true,
            // class?: string;
            // icon?: string;
            children: child.children ? child.children.map(childToMenuEntry) : [],
        };
    };

    const updatePickedItems = (items: FileEntity[]) => {
        items.forEach(item => {
            if (item.isPicked) value.value.push(item.id);
            if (item.children?.length > 0) updatePickedItems(item.children);
        })
    }

    const loadResource = () => {
        if (props.fileBrowserConfig?.http?.resource) {
            isLoading.value = true;

            httpCall(props.fileBrowserConfig.http.resource, props.fileBrowserConfig.http.data).then((r: HTTPResponse) => {
                isLoading.value = false;
                items.value = r.data.map((z: FileEntityConfig) => new FileEntity(z));

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
        value.value = [];
        updatePickedItems(items.value);
        console.log('pickedItems: ', value.value);
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
                        <lkt-table
                            v-if="[FileEntityType.Directory, FileEntityType.StorageUnit].includes(activeElement.type)"
                            v-model="activeElement.children"
                            v-bind="<TableConfig>{
                                type: TableType.Item,
                                perms: [
                                    TablePermission.SwitchEditMode,
                                    TablePermission.Update,
                                    TablePermission.Edit,
                                    TablePermission.Create
                                ],
                                itemsContainerClass: 'lkt-grid-1 lkt-grid-8--from-768',
                                saveButton: {
                                    text: 'Save',
                                    type: ButtonType.Button
                                },
                                createButton: {
                                    text: 'Create',
                                    type: ButtonType.Button
                                }
                            }"
                            @click-create="createElement"
                        >
                            <template #item="{item, index}">
                                <file-entity-box
                                    v-model="activeElement.children[index]"
                                    @double-click="updateActiveElement"
                                />
                            </template>
                        </lkt-table>
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