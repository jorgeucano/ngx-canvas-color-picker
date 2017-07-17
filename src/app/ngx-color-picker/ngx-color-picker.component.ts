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
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.css']
})
export class NgxColorPickerComponent implements OnInit {

  rgb; hex; color;

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

  constructor() {

  }

  ngOnInit() {
    this.color = 'rgb(0, 0,0)';
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
    context.drawImage(this.imageObj,0,0);
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
        const img_data = context.getImageData(x, y, 1, 1).data;
        const R = img_data[0];
        const G = img_data[1];
        const B = img_data[2];  const rgb = R + ',' + G + ',' + B;
        // convert RGB to HEX
        this.hex = this.rgbToHex(R,G,B);
        // making the color the value of the input
        this.rgb = `rgb(${R}, ${G}, ${B})`;
        this.color = this.rgb;
      }
    });
  }

  getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  rgbToHex (R,G,B) {
    return this.toHex(R)+this.toHex(G)+this.toHex(B)
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
  }
}
