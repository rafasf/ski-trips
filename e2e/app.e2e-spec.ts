import { SkiTripsPage } from './app.po';

describe('ski-trips App', () => {
  let page: SkiTripsPage;

  beforeEach(() => {
    page = new SkiTripsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
