export class Angular2Rc6Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-rc-6-app h1')).getText();
  }
}
