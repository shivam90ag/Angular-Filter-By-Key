import { FilterByKeyPage } from './app.po';

describe('filter-by-key App', () => {
  let page: FilterByKeyPage;

  beforeEach(() => {
    page = new FilterByKeyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
