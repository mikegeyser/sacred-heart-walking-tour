import { SacredHeartWalkingTourPage } from './app.po';

describe('sacred-heart-walking-tour App', () => {
  let page: SacredHeartWalkingTourPage;

  beforeEach(() => {
    page = new SacredHeartWalkingTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
