import { Modulo7RotasPage } from './app.po';

describe('modulo7-rotas App', () => {
  let page: Modulo7RotasPage;

  beforeEach(() => {
    page = new Modulo7RotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
