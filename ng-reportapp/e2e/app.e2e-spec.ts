import { NgReportappPage } from './app.po';

describe('ng-reportapp App', () => {
  let page: NgReportappPage;

  beforeEach(() => {
    page = new NgReportappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
