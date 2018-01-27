import { ShoppuPage } from './app.po';

describe('shoppu App', function() {
  let page: ShoppuPage;

  beforeEach(() => {
    page = new ShoppuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
