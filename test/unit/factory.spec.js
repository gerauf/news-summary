describe("NewsItemFactory", function() {
  beforeEach(module("newsSummaryApp"));

  var newsItem, httpBackend, summaryUrl, summaryResponse;

  summaryResponse = {
    text: "The first of the EU referendum debates featuring the prime minister began on Thursday night on Sky News, after lengthy wrangling over TV formats because .",
    sentences: [
    "The first of the EU referendum debates",
    ]
  };

  summaryUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=www.testblog.co.uk";

  beforeEach(inject(function(NewsItemFactory,$httpBackend){
    newsItem = new NewsItemFactory("title", "www.testblog.co.uk","www.someimage.png");
    window.newsItem = newsItem;
    httpBackend = $httpBackend;
  }));

  it('creates items that have a title', function(){
    expect(newsItem.title).toEqual('title');
  });

  it('creates items that have an url', function(){
    expect(newsItem.url).toEqual('www.testblog.co.uk');
  });

  it('creates items that have image links', function(){
    expect(newsItem.imageLink).toEqual('www.someimage.png');
  });

  it('items can have summaries added', function(){
    httpBackend.expectGET(summaryUrl).respond(summaryResponse);
    newsItem.getSummary();
    httpBackend.flush();
    expect(newsItem.summaries).toEqual(summaryResponse.sentences);
  });


});
