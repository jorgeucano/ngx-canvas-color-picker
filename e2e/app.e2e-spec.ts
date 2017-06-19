import { ColorPikerPage } from './app.po';

describe('color-piker App', () => {
  let page: ColorPikerPage;

  beforeEach(() => {
    page = new ColorPikerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
