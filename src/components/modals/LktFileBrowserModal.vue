<script setup lang="ts">
    import {
        AccordionConfig,
        AccordionToggleMode,
        FieldType, FileBrowserConfig, FileEntityConfig, FileEntityType,
        MenuConfig,
        MenuEntryConfig,
        MenuEntryType,
    } from 'lkt-vue-kernel';
    import { ref, watch } from 'vue';
    import FileEntityBox from '@/components/file-browser/FileEntityBox.vue';

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

    console.log('fileBrowserConfig: ', props.fileBrowserConfig);

    const activeElement = ref(<FileEntityConfig | undefined>undefined);

    watch(activeElement, (v) => {
        console.log('updatedActiveElement: ', v);
    }, { deep: true });

    const items = ref(<Array<FileEntityConfig>>[
        {
            id: 1,
            type: FileEntityType.StorageUnit,
            name: 'Your Space',
            children: [
                {
                    id: 2,
                    type: FileEntityType.Directory,
                    name: 'cosis',
                    children: [
                        {
                            id: 3,
                            type: FileEntityType.Image,
                            name: 'Dr. Evil',
                            src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/dr-evil-wide-eyed-pinky-on-the-side-of-his-mouth-in-a-scene-from-austin-powers.jpg?q=49&fit=crop&w=825&dpr=2',
                        },
                    ],
                },
            ],
        },
    ]);

    watch(items, (v) => {
        console.log('updatedItems: ', v);
    }, { deep: true });

    const childrenToMenuEntry = (child: FileEntityConfig): MenuEntryConfig => {
        return {
            key: String(child.id),
            type: MenuEntryType.Anchor,
            anchor: {
                text: child.name,
                events: {
                    click: () => {
                        console.log('orem ipsum');
                        activeElement.value = child;
                    },
                },
            },
            // class?: string;
            // icon?: string;
            children: child.children ? child.children.map(childrenToMenuEntry) : [],
        };
    };

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
                        }"
                    >
                        <div class="lkt-flex-column">
                            <lkt-menu
                                v-bind="<MenuConfig>{
                                    modelValue: item.children?.map(childrenToMenuEntry) ?? []
                                }"
                            />
                        </div>
                    </lkt-accordion>
                </template>
            </div>
            <div class="lkt-flex-col-9">
                <div v-if="activeElement">
                    holiiss: {{ activeElement.name }}
                    <template
                        v-if="[FileEntityType.Directory, FileEntityType.StorageUnit].includes(activeElement.type)">
                        <div class="lkt-flex-row-3">
                            <template v-for="(child, childIndex) in activeElement.children">
                                <file-entity-box v-model="activeElement.children[childIndex]" />
                            </template>
                        </div>
                    </template>
                    <template v-else>
                        <div>holii else</div>
                    </template>
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