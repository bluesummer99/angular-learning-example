import { HelloworldPage } from './app.po';

describe('helloworld App', () => {
  let page: HelloworldPage;

  beforeEach(() => {
    page = new HelloworldPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
