import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { EditorContextMenu } from '@theia/editor/lib/browser';
import { MyWidget } from './my-widget';

export const MyWidgetCommand = {
    id: MyWidget.ID,
    label: MyWidget.LABEL
};

export class MyExtensionContribution extends AbstractViewContribution<MyWidget> {

    constructor() {
        super({
            widgetId: MyWidget.ID,
            widgetName: MyWidget.LABEL,
            defaultWidgetOptions: {
                area: 'right'
            }
        });
    }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MyWidgetCommand, {
            execute: () => {
                this.shell.rightPanelHandler.resize(560);
                this.openView({ reveal: true });
            }
        });
    }


    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(EditorContextMenu.CUT_COPY_PASTE, {
            commandId: MyWidgetCommand.id,
            label: MyWidgetCommand.label
        });
    }
}
