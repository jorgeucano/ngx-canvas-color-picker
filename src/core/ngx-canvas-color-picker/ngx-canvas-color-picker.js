"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class NgxCanvasColorPickerComponent {
    constructor() {
        this.width = 400;
        this.height = 400;
        this.square = true;
        this.close = true;
        this.open = true;
        this.hexData = new core_1.EventEmitter();
        this.rgbData = new core_1.EventEmitter();
        this.opacityCanvas = '1';
        this.opacityArray = [
            { value: '0.0' },
            { value: '0.1' },
            { value: '0.2' },
            { value: '0.3' },
            { value: '0.4' },
            { value: '0.5' },
            { value: '0.6' },
            { value: '0.7' },
            { value: '0.8' },
            { value: '0.9' },
            { value: '1.0' }
        ];
    }
    ngOnInit() {
        this.color = 'rgba(0, 0, 0, 1)';
        this.rgbLine = '0,0,0';
    }
    ngOnChanges(changes) {
        if (changes.open) {
            this.open = changes.open.currentValue;
        }
    }
    ngAfterViewInit() {
        this.imageObj = new Image();
        this.imageObj.src = '/assets/color-picker.png';
        this.imageObj.onload = () => {
            this.create();
        };
    }
    create() {
        console.log('work');
        const padding = 0;
        const canvas = this.canvas.nativeElement;
        const context = canvas.getContext('2d');
        context.drawImage(this.imageObj, 0, 0, this.width, this.height);
        let mouseDown = false;
        context.strokeStyle = '#444';
        context.lineWidth = 2;
        canvas.addEventListener('mousedown', () => {
            mouseDown = true;
        }, false);
        canvas.addEventListener('mouseup', () => {
            mouseDown = false;
        }, false);
        canvas.addEventListener('mousemove', (evt) => {
            const mousePos = this.getMousePos(canvas, evt);
            // getting user coordinates
            if (mouseDown &&
                mousePos !== null &&
                mousePos.x > padding &&
                mousePos.x < padding + this.imageObj.width &&
                mousePos.y > padding &&
                mousePos.y < padding + this.imageObj.height) {
                const x = evt.pageX - canvas.offsetLeft;
                const y = evt.pageY - canvas.offsetTop;
                // getting image data and RGB values
                const img_data = context.getImageData(x, y, this.width, this.height).data;
                const R = img_data[0];
                const G = img_data[1];
                const B = img_data[2];
                const rgb = R + ',' + G + ',' + B;
                // convert RGB to HEX
                this.hex = this.rgbToHex(R, G, B);
                // making the color the value of the input
                this.rgbLine = `${R}, ${G}, ${B}`;
                this.rgb = `rgba(${R}, ${G}, ${B}, ${this.opacityCanvas})`;
                this.hexData.emit(this.hex);
                this.rgbData.emit(`${R}, ${G}, ${B}, ${this.opacityCanvas}`);
                this.color = this.rgb;
            }
        });
    }
    changeOpacity(opacity) {
        this.opacityCanvas = opacity;
    }
    getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    rgbToHex(R, G, B) {
        return this.toHex(R) + this.toHex(G) + this.toHex(B);
    }
    toHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }
}
NgxCanvasColorPickerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ngx-canvas-color-picker',
                template: `
    <div (click)="open=!open" [style.background]="color" class="pick"></div>
    <div [hidden]="open">
    <canvas #canvas [width]="width" [height]="height" [style.opacity]="opacityCanvas" id="canvas_picker"></canvas>
    <div class="opacityContainer">
        <div 
          *ngFor="let opacity of opacityArray" 
          class="opacity" 
          [style.background]="'rgba('+rgbLine+', '+ opacity.value + ')'" 
          (click)="changeOpacity(opacity.value)" >
          <span *ngIf="opacityCanvas === opacity.value">^</span>
        </div>
      </div>
    </div>
  `,
                styles: [`
    canvas {
    cursor: crosshair;
    }
    .pick {
      width: 25px;
      height: 25px;
    }
    .opacity {
      width: 10px;
      height: 20px;
      float:left;
      margin: 1px solid black;
    }
    .opacityContainer{
      height: 25px;
    }

  `]
            },] },
];
/** @nocollapse */
NgxCanvasColorPickerComponent.ctorParameters = () => [];
NgxCanvasColorPickerComponent.propDecorators = {
    'width': [{ type: core_1.Input },],
    'height': [{ type: core_1.Input },],
    'square': [{ type: core_1.Input },],
    'close': [{ type: core_1.Input },],
    'open': [{ type: core_1.Input },],
    'hexData': [{ type: core_1.Output },],
    'rgbData': [{ type: core_1.Output },],
    'canvas': [{ type: core_1.ViewChild, args: ['canvas',] },],
};
exports.NgxCanvasColorPickerComponent = NgxCanvasColorPickerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1jYW52YXMtY29sb3ItcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBVXVCO0FBR3ZCO0lBaUNFO1FBN0JDLFVBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsV0FBTSxHQUFRLEdBQUcsQ0FBQztRQUNsQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDckMsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBS3RDLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLGlCQUFZLEdBQUc7WUFDYixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1NBQ2pCLENBQUE7SUFJRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUNwRCxFQUFFLENBQUEsQ0FBRSxPQUFPLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxH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LEVBQUUsRUFBRTtJQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM5QixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRyxFQUFFLEVBQUU7Q0FDbkQsQ0FBQztBQXJMRixzRUFzTEMiLCJmaWxlIjoibmd4LWNhbnZhcy1jb2xvci1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIE5neENhbnZhc0NvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICByZ2I7IGhleDsgY29sb3I7IHJnYkxpbmU7XG5cbiAgIHdpZHRoOiBhbnkgPSA0MDA7XG4gICBoZWlnaHQ6IGFueSA9IDQwMDtcbiAgIHNxdWFyZTogYm9vbGVhbiA9IHRydWU7XG4gICBjbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gICBvcGVuOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gICBoZXhEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICByZ2JEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIHB1YmxpYyBjYW52YXM6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGltYWdlT2JqOiBhbnk7XG4gIG9wYWNpdHlDYW52YXM6IHN0cmluZyA9ICcxJztcblxuICBvcGFjaXR5QXJyYXkgPSBbXG4gICAgeyB2YWx1ZTogJzAuMCcgfSxcbiAgICB7IHZhbHVlOiAnMC4xJyB9LFxuICAgIHsgdmFsdWU6ICcwLjInIH0sXG4gICAgeyB2YWx1ZTogJzAuMycgfSxcbiAgICB7IHZhbHVlOiAnMC40JyB9LFxuICAgIHsgdmFsdWU6ICcwLjUnIH0sXG4gICAgeyB2YWx1ZTogJzAuNicgfSxcbiAgICB7IHZhbHVlOiAnMC43JyB9LFxuICAgIHsgdmFsdWU6ICcwLjgnIH0sXG4gICAgeyB2YWx1ZTogJzAuOScgfSxcbiAgICB7IHZhbHVlOiAnMS4wJyB9XG4gIF1cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbiAgICB0aGlzLnJnYkxpbmUgPSAnMCwwLDAnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgaWYoIGNoYW5nZXMub3BlbiApIHtcbiAgICAgIHRoaXMub3BlbiA9IGNoYW5nZXMub3Blbi5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICcvYXNzZXRzL2NvbG9yLXBpY2tlci5wbmcnO1xuICAgIHRoaXMuaW1hZ2VPYmoub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9O1xuXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ3dvcmsnKTtcblxuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlT2JqLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xuICAgIGxldCBtb3VzZURvd24gPSBmYWxzZTtcblxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzQ0NCc7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIG1vdXNlRG93biA9IHRydWU7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICBtb3VzZURvd24gPSBmYWxzZTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xuICAgICAgY29uc3QgbW91c2VQb3MgPSB0aGlzLmdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KTtcbiAgICAgIC8vIGdldHRpbmcgdXNlciBjb29yZGluYXRlc1xuICAgICAgaWYgKFxuICAgICAgICBtb3VzZURvd24gJiZcbiAgICAgICAgbW91c2VQb3MgIT09IG51bGwgJiZcbiAgICAgICAgbW91c2VQb3MueCA+IHBhZGRpbmcgJiZcbiAgICAgICAgbW91c2VQb3MueCA8IHBhZGRpbmcgKyB0aGlzLmltYWdlT2JqLndpZHRoICYmXG4gICAgICAgICBtb3VzZVBvcy55ID4gcGFkZGluZyAmJlxuICAgICAgICAgbW91c2VQb3MueSA8IHBhZGRpbmcgKyB0aGlzLmltYWdlT2JqLmhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHggPSBldnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IGV2dC5wYWdlWSAtIGNhbnZhcy5vZmZzZXRUb3A7XG4gICAgICAgIC8vIGdldHRpbmcgaW1hZ2UgZGF0YSBhbmQgUkdCIHZhbHVlc1xuICAgICAgICBjb25zdCBpbWdfZGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS5kYXRhO1xuICAgICAgICBjb25zdCBSID0gaW1nX2RhdGFbMF07XG4gICAgICAgIGNvbnN0IEcgPSBpbWdfZGF0YVsxXTtcbiAgICAgICAgY29uc3QgQiA9IGltZ19kYXRhWzJdOyAgY29uc3QgcmdiID0gUiArICcsJyArIEcgKyAnLCcgKyBCO1xuICAgICAgICAvLyBjb252ZXJ0IFJHQiB0byBIRVhcbiAgICAgICAgdGhpcy5oZXggPSB0aGlzLnJnYlRvSGV4KFIsIEcsIEIpO1xuICAgICAgICAvLyBtYWtpbmcgdGhlIGNvbG9yIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXRcbiAgICAgICAgdGhpcy5yZ2JMaW5lID0gYCR7Un0sICR7R30sICR7Qn1gO1xuICAgICAgICB0aGlzLnJnYiA9IGByZ2JhKCR7Un0sICR7R30sICR7Qn0sICR7dGhpcy5vcGFjaXR5Q2FudmFzfSlgO1xuICAgICAgICB0aGlzLmhleERhdGEuZW1pdCh0aGlzLmhleCk7XG4gICAgICAgIHRoaXMucmdiRGF0YS5lbWl0KGAke1J9LCAke0d9LCAke0J9LCAke3RoaXMub3BhY2l0eUNhbnZhc31gKTtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMucmdiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlT3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5Q2FudmFzID0gb3BhY2l0eTtcbiAgfVxuXG4gIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxuXG4gIHJnYlRvSGV4IChSLCBHLCBCKSB7XG4gICAgcmV0dXJuIHRoaXMudG9IZXgoUikgKyB0aGlzLnRvSGV4KEcpICsgdGhpcy50b0hleChCKTtcbiAgfVxuXG4gIHRvSGV4KG4pIHtcbiAgICBuID0gcGFyc2VJbnQobiwxMCk7XG4gICAgaWYgKGlzTmFOKG4pKSByZXR1cm4gXCIwMFwiO1xuICAgIG4gPSBNYXRoLm1heCgwLE1hdGgubWluKG4sMjU1KSk7XG4gICAgcmV0dXJuIFwiMDEyMzQ1Njc4OUFCQ0RFRlwiLmNoYXJBdCgobi1uJTE2KS8xNikgICsgXCIwMTIzNDU2Nzg5QUJDREVGXCIuY2hhckF0KG4lMTYpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnbmd4LWNhbnZhcy1jb2xvci1waWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKGNsaWNrKT1cIm9wZW49IW9wZW5cIiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb2xvclwiIGNsYXNzPVwicGlja1wiPjwvZGl2PlxuICAgIDxkaXYgW2hpZGRlbl09XCJvcGVuXCI+XG4gICAgPGNhbnZhcyAjY2FudmFzIFt3aWR0aF09XCJ3aWR0aFwiIFtoZWlnaHRdPVwiaGVpZ2h0XCIgW3N0eWxlLm9wYWNpdHldPVwib3BhY2l0eUNhbnZhc1wiIGlkPVwiY2FudmFzX3BpY2tlclwiPjwvY2FudmFzPlxuICAgIDxkaXYgY2xhc3M9XCJvcGFjaXR5Q29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wYWNpdHkgb2Ygb3BhY2l0eUFycmF5XCIgXG4gICAgICAgICAgY2xhc3M9XCJvcGFjaXR5XCIgXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiJ3JnYmEoJytyZ2JMaW5lKycsICcrIG9wYWNpdHkudmFsdWUgKyAnKSdcIiBcbiAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlT3BhY2l0eShvcGFjaXR5LnZhbHVlKVwiID5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm9wYWNpdHlDYW52YXMgPT09IG9wYWNpdHkudmFsdWVcIj5ePC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgY2FudmFzIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICB9XG4gICAgLnBpY2sge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5vcGFjaXR5IHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgIG1hcmdpbjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICAub3BhY2l0eUNvbnRhaW5lcntcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgYF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbid3aWR0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidoZWlnaHQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nc3F1YXJlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Nsb3NlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29wZW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naGV4RGF0YSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4ncmdiRGF0YSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nY2FudmFzJzogW3sgdHlwZTogVmlld0NoaWxkLCBhcmdzOiBbJ2NhbnZhcycsIF0gfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19