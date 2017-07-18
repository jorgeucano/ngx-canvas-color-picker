import { OnInit, ElementRef, EventEmitter, SimpleChange } from '@angular/core';
export declare class NgxCanvasColorPickerComponent implements OnInit {
    rgb: any;
    hex: any;
    color: any;
    rgbLine: any;
    width: any;
    height: any;
    square: boolean;
    close: boolean;
    open: boolean;
    hexData: EventEmitter<string>;
    rgbData: EventEmitter<string>;
    canvas: ElementRef;
    private ctx;
    imageObj: any;
    opacityCanvas: string;
    opacityArray: {
        value: string;
    }[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    ngAfterViewInit(): void;
    create(): void;
    changeOpacity(opacity: any): void;
    getMousePos(canvas: any, evt: any): {
        x: number;
        y: number;
    };
    rgbToHex(R: any, G: any, B: any): string;
    toHex(n: any): string;
}
