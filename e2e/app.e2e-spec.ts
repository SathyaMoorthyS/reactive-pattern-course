import { ReactivePatternsCourseDevPage } from './app.po';

describe('reactive-patterns-course-dev App', () => {
  let page: ReactivePatternsCourseDevPage;

  beforeEach(() => {
    page = new ReactivePatternsCourseDevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
