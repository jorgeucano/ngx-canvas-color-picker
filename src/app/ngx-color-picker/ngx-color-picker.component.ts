import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-canvas-color-picker',
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.css']
})
export class NgxColorPickerComponent implements OnInit {

  rgb; hex;

  @Input() width: any = 400;
  @Input() height: any = 400;
  @Input() square: boolean = true;

  @Output() hexData = new EventEmitter<string>();
  @Output() rgbData = new EventEmitter<string>();

  @ViewChild('canvas') public canvas: ElementRef;
  private ctx: CanvasRenderingContext2D;

  imageObj: any;

  constructor() {

  }

  ngOnInit() {
  }

  public ngAfterViewInit() {

    this.imageObj = new Image();
    this.imageObj.onload = () => {
      this.create();
    };
    this.imageObj.src = '/assets/color-picker.png';
  }

  create() {
    const padding = 0;
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
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
      const color = undefined;

      if (
        mouseDown &&
        mousePos !== null &&
        mousePos.x > padding &&
        mousePos.x < padding + this.imageObj.width &&
         mousePos.y > padding &&
         mousePos.y < padding + this.imageObj.height
      ) {

        // color picker image is 256x256 and is offset by 10px
        // from top and bottom
        const imageData = context.getImageData(padding, padding, this.imageObj.width, this.imageObj.width);
        const data = imageData.data;
        const x = mousePos.x - padding;
        const y = mousePos.y - padding;
        const red = data[((this.imageObj.width * y) + x) * 4];
        const green = data[((this.imageObj.width * y) + x) * 4 + 1];
        const blue = data[((this.imageObj.width * y) + x) * 4 + 2];
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        this.rgb = red + ',' + green + ',' + blue;
        this.rgbData.emit(this.rgb);
        this.rgbToHex(red, green, blue);
        if (this.square) {
          this.drawColorSquare(canvas, color, this.imageObj);
        }
      }
    }, false);

    context.drawImage(this.imageObj, padding, padding, canvas.width, canvas.height);
    if (this.square) {
      this.drawColorSquare(canvas, 'white', this.imageObj);
    }
  }

  getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  drawColorSquare(canvas, color, imageObj) {
    const colorSquareSize = 100;
    const padding = 10;
    const context = canvas.getContext('2d');
    const squareX = (canvas.width - colorSquareSize + imageObj.width) / 2;
    const squareY = (canvas.height - colorSquareSize) / 2;

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(squareX, squareY, colorSquareSize, colorSquareSize);
    context.strokeRect(squareX, squareY, colorSquareSize, colorSquareSize);
  }

  rgbToHex(R, G, B) {
    this.hex = this.toHex(R) + this.toHex(G) + this.toHex(B);
    this.hexData.emit(this.hex);
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)){
      return '00';
    };
    n = Math.max(0,Math.min(n,255));
    return '0123456789ABCDEF'.charAt((n-n%16)/16)  + '0123456789ABCDEF'.charAt(n%16);
  }
}
