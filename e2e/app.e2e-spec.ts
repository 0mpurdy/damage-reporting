import { DamageReportingPage } from './app.po';

describe('damage-reporting App', function() {
  let page: DamageReportingPage;

  beforeEach(() => {
    page = new DamageReportingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
