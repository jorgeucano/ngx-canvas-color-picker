import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from '@angular/core';

@Component({
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
})
export class NgxCanvasColorPickerComponent implements OnInit {

  rgb; hex; color; rgbLine;

  @Input() width: any = 400;
  @Input() height: any = 400;
  @Input() square: boolean = true;
  @Input() close: boolean = true;
  @Input() open: boolean = true;


  @Output() hexData = new EventEmitter<string>();
  @Output() rgbData = new EventEmitter<string>();

  @ViewChild('canvas') public canvas: ElementRef;
  private ctx: CanvasRenderingContext2D;
  imageObj: any;
  opacityCanvas: string = '1';

  opacityArray = [
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
  ]

  constructor() {

  }

  ngOnInit() {
    this.color = 'rgba(0, 0, 0, 1)';
    this.rgbLine = '0,0,0';
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if( changes.open ) {
      this.open = changes.open.currentValue;
    }
  }

  public ngAfterViewInit() {

    this.imageObj = new Image();
    this.imageObj.src = '/assets/color-picker.png';
    this.imageObj.onload = () => {
      this.create();
    };

  }

  create() {
    console.log('work');

    const padding = 0;
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    context.drawImage(this.imageObj, 0, 0, this.width, this.height );
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
      if (
        mouseDown &&
        mousePos !== null &&
        mousePos.x > padding &&
        mousePos.x < padding + this.imageObj.width &&
         mousePos.y > padding &&
         mousePos.y < padding + this.imageObj.height
      ) {
        const x = evt.pageX - canvas.offsetLeft;
        const y = evt.pageY - canvas.offsetTop;
        // getting image data and RGB values
        const img_data = context.getImageData(x, y, this.width, this.height).data;
        const R = img_data[0];
        const G = img_data[1];
        const B = img_data[2];  const rgb = R + ',' + G + ',' + B;
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

  rgbToHex (R, G, B) {
    return this.toHex(R) + this.toHex(G) + this.toHex(B);
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
  }
}
