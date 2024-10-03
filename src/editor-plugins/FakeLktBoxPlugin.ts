export var FakeLktBoxPlugin = {
    // @Required @Unique
    // plugin name
    name: 'fake-lkt-box-plugin',
    // @Required
    // data display
    display: 'command',

    // @Options
    title: 'LKT Box',
    buttonClass: '',
    innerHTML: '<i class="lkt-field-icon-ellipsis-vert"></i>',

    // @Required
    // add function - It is called only once when the plugin is first run.
    // This function generates HTML to append and register the event.
    // arguments - (core : core object, targetElement : clicked button element)
    add: function (core, targetElement) {
        console.log('context, FakeLktBoxPlugin: ', core.context);
        const context = core.context;
        const tag = core.util.createElement('div');
        core.util.addClass(tag, 'lkt-box __se__format__lkt-box');

        // @Required
        // Registering a namespace for caching as a plugin name in the context object
        context.customCommand = {
            targetButton: targetElement,
            tag: tag
        };
    },

    // @Override core
    // Plugins with active methods load immediately when the editor loads.
    // Called each time the selection is moved.
    active: function (element) {
        if (!element) {
            this.util.removeClass(this.context.customCommand.targetButton, 'active');
        } else if (this.util.hasClass(element, '__se__format__lkt-box')) {
            this.util.addClass(this.context.customCommand.targetButton, 'active');
            return true;
        }

        return false;
    },

    // @Required, @Override core
    // The behavior of the "command plugin" must be defined in the "action" method.
    action: function () {
        const rangeTag = this.util.getRangeFormatElement(this.getSelectionNode());

        if (this.util.hasClass(rangeTag, '__se__format__lkt-box')) {
            this.detachRangeFormatElement(rangeTag, null, null, false, false);
        } else {
            this.applyRangeFormatElement(this.context.customCommand.tag.cloneNode(false));
        }
    }
}