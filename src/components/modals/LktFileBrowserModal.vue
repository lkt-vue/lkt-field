<script setup lang="ts">
    import {
        AccordionConfig,
        AccordionToggleMode,
        AccordionType,
        AnchorType, ButtonConfig,
        ButtonType, ClickEventArgs,
        FieldType,
        FileBrowserConfig,
        FileEntity,
        FileEntityConfig,
        FileEntityType,
        IconConfig,
        IconPosition, ItemCrudConfig, ItemCrudMode, ItemCrudView,
        LktObject,
        MenuConfig,
        MenuEntryConfig,
        MenuEntryType,
        TableConfig,
        TablePermission,
        TableType,
    } from 'lkt-vue-kernel';
    import { computed, nextTick, onMounted, ref, watch } from 'vue';
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

    const findFileEntityById = (id: string|number|undefined, haystack: FileEntity[]): FileEntity|undefined => {

        for (let k in haystack) {
            if (haystack[k].id === id) return haystack[k];

            if (haystack[k].children.length > 0) {
                let foundEntity = findFileEntityById(id, haystack[k].children);
                if (foundEntity) return foundEntity;
            }
        }

        return undefined;


        // const path = haystack.find(z => {
        //     if (z.id === id) {
        //         return true;
        //     }
        //
        //     if (z.children.length > 0) {
        //         return findFileEntityById(id, z.children);
        //     }
        //
        //     return false;
        // });
        //
        // if (path.id === id) return path;
    }

    const goBack = () => {
        if (activeElement.value?.parent) {
            let entity = findFileEntityById(activeElement.value?.parent, items.value);
            if (entity) updateActiveElement(entity);
        }
    }

    const computedDetailsIcon = computed(() => {
        switch (activeElement.value?.type) {
            case FileEntityType.Image:
                return 'lkt-icn-picture';

            case FileEntityType.Directory:
                return 'lkt-icn-folder-open';

            default:
                return '';
        }
    })

    const getMenuEntryIcon = (entity: FileEntity) => {
        switch (entity.type) {
            case FileEntityType.Image:
                return 'lkt-icn-picture';

            case FileEntityType.Directory:
                return 'lkt-icn-folder';

            default:
                return '';
        }
    }


    const childToMenuEntry = (child: FileEntity): MenuEntryConfig => {
        let iconStr = getMenuEntryIcon(child),
            icon: IconConfig = {};
        if (iconStr !== '') icon = <IconConfig>{
            icon: iconStr,
            position: IconPosition.Start,
        }

        return {
            key: String(child.id),
            type: MenuEntryType.Anchor,
            anchor: {
                icon,
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
                // items.value = FileEntity.mapItems(<FileEntityConfig[]>r.data);
                items.value = r.data.map((z: FileEntityConfig) => new FileEntity(z));
                console.log('new mapped items: ', items.value);

                if (items.value.length > 0) {
                    // activeElement.value = items.value[0];
                    updateActiveElement(items.value[0]);
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
                <lkt-accordion
                    v-if="activeElement"
                    v-bind="<AccordionConfig>{
                        type: AccordionType.Always,
                        icon: computedDetailsIcon,
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
                        <template #prev-buttons-ever v-if="activeElement.type !== FileEntityType.StorageUnit">
                            <lkt-button
                                v-bind="<ButtonConfig>{
                                    icon: 'lkt-icn-arrow-left',
                                    events: {
                                        click: goBack
                                    }
                                }"
                            />
                        </template>
                        <template #item="{item, index}">
                            <file-entity-box
                                v-model="activeElement.children[index]"
                                @double-click="updateActiveElement"
                            />
                        </template>
                    </lkt-table>
                    <template v-else>
                        <lkt-item-crud
                            v-model="activeElement"
                            v-bind="<ItemCrudConfig>{
                                view: ItemCrudView.Inline,
                                mode: activeElement.id ? ItemCrudMode.Update : ItemCrudMode.Create,
                                editing: false,
                                perms: ['switch-edit-mode', 'update'],
                                createButton: {
                                    ...fileBrowserConfig?.entityCreateButton,
                                    resourceData: activeElement,
                                    events: {
                                        click: () => {
                                            for(let k in activeElement) {
                                                //@ts-ignore
                                                modelValue[k] = entity[k];
                                            }
                                        }
                                    }
                                },
                                updateButton: {
                                    ...fileBrowserConfig?.entityUpdateButton,
                                    resourceData: activeElement,
                                    events: {
                                        click: () => {
                                            for(let k in activeElement) {
                                                //@ts-ignore
                                                modelValue[k] = entity[k];
                                            }
                                        }
                                    }
                                },
                            }"
                        >
                            <template #prev-buttons-ever v-if="activeElement.type !== FileEntityType.StorageUnit">
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                    icon: 'lkt-icn-arrow-left',
                                    events: {
                                        click: goBack
                                    }
                                }"
                                />
                            </template>
                            <template #item="{item, editMode}">
                                <file-entity-details
                                    v-model="activeElement"
                                    :file-browser-config="fileBrowserConfig"
                                    :edit-mode="editMode"
                                />
                            </template>
                        </lkt-item-crud>
                    </template>
                </lkt-accordion>
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