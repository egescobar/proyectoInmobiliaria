import { InmobiliariaPage } from './app.po';

describe('inmobiliaria App', () => {
  let page: InmobiliariaPage;

  beforeEach(() => {
    page = new InmobiliariaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
