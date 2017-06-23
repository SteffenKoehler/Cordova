import { PeopleWebappPage } from './app.po';

describe('people-webapp App', () => {
  let page: PeopleWebappPage;

  beforeEach(() => {
    page = new PeopleWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
