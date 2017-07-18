import { PBlogPage } from './app.po';

describe('p-blog App', () => {
  let page: PBlogPage;

  beforeEach(() => {
    page = new PBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
