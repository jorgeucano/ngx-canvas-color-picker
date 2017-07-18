"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const ngx_canvas_color_picker_1 = require("./ngx-canvas-color-picker/ngx-canvas-color-picker");
function coreDirectives() {
    return [
        ngx_canvas_color_picker_1.NgxCanvasColorPickerComponent
    ];
}
exports.coreDirectives = coreDirectives;
class NgxCanvasColorPickerModule {
}
NgxCanvasColorPickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: coreDirectives(),
                exports: coreDirectives(),
                imports: [common_1.CommonModule, forms_1.FormsModule]
            },] },
];
/** @nocollapse */
NgxCanvasColorPickerModule.ctorParameters = () => [];
exports.NgxCanvasColorPickerModule = NgxCanvasColorPickerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBbUQ7QUFDbkQsMENBQTZDO0FBQzdDLDRDQUErQztBQUUvQywrRkFBa0c7QUFFbEc7SUFDSSxNQUFNLENBQUM7UUFDSCx1REFBNkI7S0FDaEMsQ0FBQztBQUNOLENBQUM7QUFKRCx3Q0FJQztBQUlEOztBQUNPLHFDQUFVLEdBQTBCO0lBQzNDLEVBQUUsSUFBSSxFQUFFLGVBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDckIsWUFBWSxFQUFFLGNBQWMsRUFBRTtnQkFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRTtnQkFDekIsT0FBTyxFQUFFLENBQUUscUJBQVksRUFBRSxtQkFBVyxDQUFFO2FBQ3pDLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCx5Q0FBYyxHQUFtRSxNQUFNLEVBQzdGLENBQUM7QUFWRixnRUFXQyIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ3hDYW52YXNDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvbmd4LWNhbnZhcy1jb2xvci1waWNrZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY29yZURpcmVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgTmd4Q2FudmFzQ29sb3JQaWNrZXJDb21wb25lbnRcbiAgICBdO1xufVxuXG5cblxuZXhwb3J0IGNsYXNzIE5neENhbnZhc0NvbG9yUGlja2VyTW9kdWxlIHtcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgIGRlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSxcbiAgICBleHBvcnRzOiBjb3JlRGlyZWN0aXZlcygpLFxuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==