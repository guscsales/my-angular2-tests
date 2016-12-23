import { MyAngular2TestsPage } from './app.po';

describe('my-angular2-tests App', function() {
  let page: MyAngular2TestsPage;

  beforeEach(() => {
    page = new MyAngular2TestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
