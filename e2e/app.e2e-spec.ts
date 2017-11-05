import { StatKeeperPage } from './app.po';

describe('stat-keeper App', function() {
  let page: StatKeeperPage;

  beforeEach(() => {
    page = new StatKeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
