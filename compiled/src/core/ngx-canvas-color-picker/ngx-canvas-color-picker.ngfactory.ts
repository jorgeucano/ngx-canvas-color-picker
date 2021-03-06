/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../../src/core/ngx-canvas-color-picker/ngx-canvas-color-picker';
const styles_NgxCanvasColorPickerComponent:any[] = ['canvas[_ngcontent-%COMP%] {\n    cursor: crosshair;\n    }\n    .pick[_ngcontent-%COMP%] {\n      width: 25px;\n      height: 25px;\n    }\n    .opacity[_ngcontent-%COMP%] {\n      width: 10px;\n      height: 20px;\n      float:left;\n      margin: 1px solid black;\n    }\n    .opacityContainer[_ngcontent-%COMP%]{\n      height: 25px;\n    }'];
export const RenderType_NgxCanvasColorPickerComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_NgxCanvasColorPickerComponent,data:{}});
function View_NgxCanvasColorPickerComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['^']))],(null as any),(null as any));
}
function View_NgxCanvasColorPickerComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'opacity']],[[4,'background',(null as any)]],[[(null as any),'click']],(_v,en,
      $event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.changeOpacity(_v.context.$implicit.value)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NgxCanvasColorPickerComponent_2)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_1:any = (_co.opacityCanvas === _v.context.$implicit.value);
        _ck(_v,3,0,currVal_1);
      },(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = (((('rgba(' + _co.rgbLine) + ', ') + _v.context.$implicit.value) + ')');
        _ck(_v,0,0,currVal_0);
      });
}
export function View_NgxCanvasColorPickerComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{canvas:0}),(_l()(),i0.ɵted((null as any),
      ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['class',
      'pick']],[[4,'background',(null as any)]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i2.NgxCanvasColorPickerComponent = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>(_co.open = !_co.open)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),9,'div',([] as any[]),[[8,'hidden',0]],
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n    '])),(_l()(),i0.ɵeld(0,[[1,0],['canvas',1]],(null as any),0,'canvas',
      [['id','canvas_picker']],[[8,'width',0],[8,'height',0],[4,'opacity',(null as any)]],
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'opacityContainer']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_NgxCanvasColorPickerComponent_1)),
      i0.ɵdid(802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n  ']))],(_ck,_v) => {
    var _co:i2.NgxCanvasColorPickerComponent = _v.component;
    const currVal_5:any = _co.opacityArray;
    _ck(_v,11,0,currVal_5);
  },(_ck,_v) => {
    var _co:i2.NgxCanvasColorPickerComponent = _v.component;
    const currVal_0:any = _co.color;
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = _co.open;
    _ck(_v,4,0,currVal_1);
    const currVal_2:any = _co.width;
    const currVal_3:any = _co.height;
    const currVal_4:any = _co.opacityCanvas;
    _ck(_v,6,0,currVal_2,currVal_3,currVal_4);
  });
}
export function View_NgxCanvasColorPickerComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ngx-canvas-color-picker',
      ([] as any[]),(null as any),(null as any),(null as any),View_NgxCanvasColorPickerComponent_0,
      RenderType_NgxCanvasColorPickerComponent)),i0.ɵdid(4833280,(null as any),0,i2.NgxCanvasColorPickerComponent,
      ([] as any[]),(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const NgxCanvasColorPickerComponentNgFactory:i0.ComponentFactory<i2.NgxCanvasColorPickerComponent> = i0.ɵccf('ngx-canvas-color-picker',
    i2.NgxCanvasColorPickerComponent,View_NgxCanvasColorPickerComponent_Host_0,{width:'width',
        height:'height',square:'square',close:'close',open:'open'},{hexData:'hexData',
        rgbData:'rgbData'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmdlY2Fuby9Eb2N1bWVudHMvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvc3JjL2NvcmUvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvam9yZ2VjYW5vL0RvY3VtZW50cy9uZ3gtY2FudmFzLWNvbG9yLXBpY2tlci9zcmMvY29yZS9uZ3gtY2FudmFzLWNvbG9yLXBpY2tlci9uZ3gtY2FudmFzLWNvbG9yLXBpY2tlci50cyIsIm5nOi8vL1VzZXJzL2pvcmdlY2Fuby9Eb2N1bWVudHMvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvc3JjL2NvcmUvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIudHMuTmd4Q2FudmFzQ29sb3JQaWNrZXJDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2pvcmdlY2Fuby9Eb2N1bWVudHMvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvc3JjL2NvcmUvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIvbmd4LWNhbnZhcy1jb2xvci1waWNrZXIudHMuTmd4Q2FudmFzQ29sb3JQaWNrZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICA8ZGl2IChjbGljayk9XCJvcGVuPSFvcGVuXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29sb3JcIiBjbGFzcz1cInBpY2tcIj48L2Rpdj5cbiAgICA8ZGl2IFtoaWRkZW5dPVwib3BlblwiPlxuICAgIDxjYW52YXMgI2NhbnZhcyBbd2lkdGhdPVwid2lkdGhcIiBbaGVpZ2h0XT1cImhlaWdodFwiIFtzdHlsZS5vcGFjaXR5XT1cIm9wYWNpdHlDYW52YXNcIiBpZD1cImNhbnZhc19waWNrZXJcIj48L2NhbnZhcz5cbiAgICA8ZGl2IGNsYXNzPVwib3BhY2l0eUNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGFjaXR5IG9mIG9wYWNpdHlBcnJheVwiIFxuICAgICAgICAgIGNsYXNzPVwib3BhY2l0eVwiIFxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidyZ2JhKCcrcmdiTGluZSsnLCAnKyBvcGFjaXR5LnZhbHVlICsgJyknXCIgXG4gICAgICAgICAgKGNsaWNrKT1cImNoYW5nZU9wYWNpdHkob3BhY2l0eS52YWx1ZSlcIiA+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJvcGFjaXR5Q2FudmFzID09PSBvcGFjaXR5LnZhbHVlXCI+Xjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgIiwiPG5neC1jYW52YXMtY29sb3ItcGlja2VyPjwvbmd4LWNhbnZhcy1jb2xvci1waWNrZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O29CQ1VVO01BQUEsd0VBQThDO2FBQUE7OztvQkFMaEQ7TUFBQTtZQUFBO0lBQUE7SUFBQTtJQUlFO01BQUE7TUFBQTtJQUFBO0lBSkY7RUFBQSxnQ0FJMEM7TUFDeEM7YUFBQTtVQUFBLHdCQUFzRDs7O1FBQWhEO1FBQU4sV0FBTSxTQUFOOzs7UUFGQTtRQUhGLFdBR0UsU0FIRjs7OztvREFMUjtNQUFBLGFBQ0k7TUFBQTtJQUFBO0lBQUE7SUFBSztNQUFBO01BQUE7SUFBQTtJQUFMO0VBQUEsZ0NBQXdFLDJDQUN4RTthQUFBO1VBQUEsMERBQXFCO01BQUEsYUFDckI7TUFBQTtNQUFBLDBEQUE4RztNQUFBLGFBQzlHO01BQUE7TUFBQSxnQkFBOEIsK0NBQzFCO01BQUE7YUFBQTs0QkFBQSx5Q0FNTTtVQUFBLGVBQ0YsMkNBQ0Y7VUFBQTs7SUFQQTtJQURGLFlBQ0UsU0FERjs7O0lBSnNCO0lBQTFCLFdBQTBCLFNBQTFCO0lBQ0s7SUFBTCxXQUFLLFNBQUw7SUFDZ0I7SUFBZ0I7SUFBa0I7SUFBbEQsV0FBZ0IsVUFBZ0IsVUFBa0IsU0FBbEQ7Ozs7b0JDSEo7TUFBQTs4Q0FBQSxVQUFBO01BQUE7SUFBQTs7Ozs7OyJ9
