import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxCanvasColorPickerComponent } from './ngx-canvas-color-picker/ngx-canvas-color-picker';

export function coreDirectives() {
    return [
        NgxCanvasColorPickerComponent
    ];
}

@NgModule({
    declarations: coreDirectives(),
    exports: coreDirectives(),
    imports: [ CommonModule, FormsModule ]
})

export class NgxCanvasColorPickerCore {
}