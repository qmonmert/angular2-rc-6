import { Angular2Rc6Page } from './app.po';

describe('angular2-rc-6 App', function() {
  let page: Angular2Rc6Page;

  beforeEach(() => {
    page = new Angular2Rc6Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-rc-6 works!');
  });
});
