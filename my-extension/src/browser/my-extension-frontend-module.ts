import { ContainerModule } from 'inversify';
import { WidgetFactory, bindViewContribution} from '@theia/core/lib/browser';
import { MyExtensionContribution } from './my-extension-contribution';
import { MyWidget } from './my-widget';

export default new ContainerModule(bind => {
    bindViewContribution(bind, MyExtensionContribution);
    bind(MyWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: 'youtube-widget',
        createWidget: () => context.container.get<MyWidget>(MyWidget),
    })).inSingletonScope();
});
