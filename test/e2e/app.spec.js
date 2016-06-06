describe("app", function() {

  var newsItems;

  var mock = require('protractor-http-mock');

  beforeEach(function() {
    mock(['guardianResponse']);
  });

  afterEach(function(){
    mock.teardown();
  });

  it('displays the titles from the gurdian api', function() {
    browser.get('/');
    newsItems = $$('li.newsItem');
    expect(newsItems.first().$('a').getText()).toMatch('John McDonnell: Labour taking a close look at universal basic income');
  });

  it('displays the urls from the gurdian api', function() {
    browser.get('/');
    newsItems = $$('li.newsItem');
    expect(newsItems.first().$('a').getAttribute("href")).toMatch("https://www.theguardian.com/politics/2016/jun/05/john-mcdonnell-labour-universal-basic-income-welfare-benefits-compass-report");
  });

  it('displays a summary for each story', function() {
    browser.get('/');
    summary = $$('li.newsItem').first().$$('li.summary');
    expect(summary.first().getText()).toMatch("some nonsense");
  });

  it('stories are accompanied by a picture', function(){
    browser.get('/');
    picture = $$('li.newsItem').first().$('img');
    expect(picture.getAttribute("src")).toEqual("https://media.guim.co.uk/657951346a6f0c814b263dd71e62892f2559c4c2/0_87_4179_2508/500.jpg");
  });


});
