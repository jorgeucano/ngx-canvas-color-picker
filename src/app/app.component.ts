import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  barColors: Array<number> = [];
  divColor: Array<any> = [];
  barColorSelect: number = 0;
  barColorFinal: any = { r: 0, g: 0, b: 0};

  constructor() {
    let i, j;
    let k = 127;
    for (i = 0; i < k; i++) {
      this.barColors.push(i);
    }
    for (i = 0; i < k; i++) {
      i++;
      for (j = 0; j < k; j++) {
        j++;
        this.divColor.push({'g': i, 'b': j});
      }
    }
    // console.log(this.barColors);
    // console.log(this.divColor);
  }



  log(color: number) {
    console.log(color);
    this.barColorSelect = color;
  }

  final(r: number, g: number, b: number) {
    this.barColorFinal.r = r;
    this.barColorFinal.g = g;
    this.barColorFinal.b = b;
  }

}
