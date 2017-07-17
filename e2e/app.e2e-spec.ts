import { NgxCanvasColorPickerPage } from './app.po';

describe('ngx-canvas-color-picker App', () => {
  let page: NgxCanvasColorPickerPage;

  beforeEach(() => {
    page = new NgxCanvasColorPickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
