describe("NewsService", function() {

  beforeEach(module('newsSummaryApp'));

  var NewsService, NewsItemFactory, httpBackend, url;

  var guardianResponse = {
    response: {
      results: [
        {webTitle: "title 1", webUrl: "www.someurl.com", fields: {
          thumbnail: "www.imageLink.com"}}
      ]
    }
  };

  var guardianResponseNoPic = {
    response: {
      results: [
        {webTitle: "title 1", webUrl: "www.someurl.com"}
      ]
    }
  };

  var summaryResponse = {
    text: "The first of the EU referendum debates featuring the prime minister began on Thursday night on Sky News, after lengthy wrangling over TV formats because .",
    sentences: [
      "The first of the EU referendum debates",
      "The second of the EU referendum debates"
    ]
  };

  beforeEach(inject(function(_NewsService_, _NewsItemFactory_, $httpBackend) {
    NewsService = _NewsService_;
    NewsItemFactory = _NewsItemFactory_;
    httpBackend = $httpBackend;
    guardianUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail';
    summaryUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=www.someurl.com';
  }));

  it('fetches news items from the guardian api', function(){
    httpBackend.expectGET(url).respond(guardianResponse);
    httpBackend.expectGET(summaryUrl).respond(summaryResponse);
    var story1 = new NewsItemFactory("title 1", "www.someurl.com", "www.imageLink.com");

    NewsService.getStories().then(function(stories){
      expect(stories[0]).toEqual(story1);
    });
    httpBackend.flush();
  });

  it('defaults the thumbnail if none supplied', function(){
    httpBackend.expectGET(url).respond(guardianResponseNoPic);
    httpBackend.expectGET(summaryUrl).respond(summaryResponse);

    var story1 = new NewsItemFactory("title 1", "www.someurl.com", "http://globe-views.com/dcim/dreams/news/news-01.jpg");

    NewsService.getStories().then(function(stories){
      expect(stories[0]).toEqual(story1);
    });

    httpBackend.flush();
  });

  it('fetched items have summaries',function(){
    httpBackend.expectGET(url).respond(guardianResponse);
    httpBackend.expectGET(summaryUrl).respond(summaryResponse);

    NewsService.getStories().then(function(stories){
      expect(stories[0].summary[0]).toEqual("The first of the EU referendum debates");
    });
  });

});
