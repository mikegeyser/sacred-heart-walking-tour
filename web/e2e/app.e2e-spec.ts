import { FootstepsThroughSacredHeartPage } from './app.po';

describe('footsteps-through-sacred-heart App', () => {
  let page: FootstepsThroughSacredHeartPage;

  beforeEach(() => {
    page = new FootstepsThroughSacredHeartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
