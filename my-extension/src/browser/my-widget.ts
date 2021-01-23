import * as React from 'react';
import { postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';

export class MyWidget extends ReactWidget {

    static readonly ID = 'youtube-widget';
    static readonly LABEL = 'Watch Youtube video';
    
    constructor() {
        super();
        this.id = MyWidget.ID;
        this.title.label = MyWidget.LABEL;
        this.title.caption = MyWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-youtube-square';
    }

    @postConstruct()
    protected init(): void {
        this.update()
    }

    protected render(): React.ReactNode {
        return (
            React.createElement("div", { style: { position: 'relative', paddingBottom: '56.25%', paddingTop: '30px', height: '0', overflow: 'hidden' } },
            React.createElement("iframe", { style: { position: 'absolute', top: '0', left: '0' }, width: "100%", height: '100%', src: "https://www.youtube.com/embed/AkOPLGmz_tg", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" }))
        );    
    }
    
}