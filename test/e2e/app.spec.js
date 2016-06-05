describe("app", function() {
  // it("should get home page title", function() {
  //   expect(browser.getTitle()).toEqual("News Summary");
  // });
  var newsItems;

  var mock = require('protractor-http-mock');

  beforeEach(function() {
    mock(['guardianResponse']);
    browser.get('/');
  });

  afterEach(function(){
    mock.teardown();
  });



  it("shows news items which have titles and urls", function() {
    newsItems = $$('li.newsItem');
    expect(newsItems.first().getText()).toMatch('new story');
    expect(newsItems.first().getText()).toMatch('www.somewhere.com');
  });

  it('displays the titles and urls from the gurdian api', function() {
    newsItems = $$('li.newsItem');
    expect(newsItems.first().getText()).toMatch('"EU referendum debates: when and where to watch them"');
    expect(newsItems.first().getText()).toMatch("https://www.theguardian.com/politics/2016/jun/02/eu-referendum-tv-debates-when-where-watch-them");
  });
});
