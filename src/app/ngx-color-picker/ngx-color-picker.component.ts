import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-canvas-color-picker',
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.css']
})
export class NgxColorPickerComponent implements OnInit {

  img; rgb; hex;
  mostrar = false;

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

    // const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    // this.ctx = canvasEl.getContext('2d');
  }

  create() {
    const padding = 10;
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
        this.rgbToHex(red, green,blue);
        this.drawColorSquare(canvas, color, this.imageObj);
      }
    }, false);

    context.drawImage(this.imageObj, padding, padding);
    this.drawColorSquare(canvas, 'white', this.imageObj);
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
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)){
      return '00';
    };
    n = Math.max(0,Math.min(n,255));
    return '0123456789ABCDEF'.charAt((n-n%16)/16)  + '0123456789ABCDEF'.charAt(n%16);
  }


/*
  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');

    const radius = canvasEl.width / 2;
    const toRad = (2 * Math.PI) / 360;
    const step = 1 / radius;

    this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    for(const i = 0; i < 360; i += step) {
        const rad = i * toRad;
        this.ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)';
        this.ctx.beginPath();
        this.ctx.moveTo(radius, radius);
        this.ctx.lineTo(radius + radius * Math.cos(rad), radius + radius * Math.sin(rad));
        this.ctx.stroke();
    }

    this.ctx.fillStyle = 'rgb(255, 255, 255)';
    this.ctx.beginPath();
    this.ctx.arc(radius, radius, radius * 0.8, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
    const self = this;
    canvasEl.addEventListener('click', function(e) {
        const x = e.offsetX || e.clientX - this.offsetLeft;
        const y = e.offsetY || e.clientY - this.offsetTop;

        const imgData = self.ctx.getImageData(x, y, 1, 1).data;
        // const selectedColor = new Color(imgData[0], imgData[1], imgData[2]);
        self.renderMouseCircle(x, y);
    }, false);
  }

  renderMouseCircle(x, y) {
    this.ctx.strokeStyle = 'rgb(255, 255, 255)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  chargeImage() {
    this.ctx.drawImage(this.img, 0, 0);
    this.mostrar = true;
    document.getElementById("canvas_picker").addEventListener("click", this.clickButton);
  }


  rgbToHex(R, G, B) {
    return this.toHex(R) + this.toHex(G) + this.toHex(B);
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)){
      return '00';
    };
    n = Math.max(0,Math.min(n,255));
    return '0123456789ABCDEF'.charAt((n-n%16)/16)  + '0123456789ABCDEF'.charAt(n%16);
  }

  clickButton($event) {
      // getting user coordinates
      console.log($event);
      let x = $event.pageX - $event.offsetX;
      let y = $event.pageY - $event.offsetY;
      // getting image data and RGB values
      let img_data = this.ctx.getImageData(x, y, 1, 1).data;
      let R = img_data[0];
      let G = img_data[1];
      let B = img_data[2];
      let rgb = R + ',' + G + ',' + B;
      // convert RGB to HEX
      console.log(rgb);
      let hex = this.rgbToHex(R,G,B);
      // making the color the value of the input
      this.rgb = rgb;
      this.hex = '#' + hex;
  }
*/
}
