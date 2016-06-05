describe("NewsService", function() {

  beforeEach(module('newsSummaryApp'));

  var NewsService, NewsItemFactory, httpBackend, url;

  var guardianResponse = {
    response: {
      results: [
        {webTitle: "title 1", webUrl: "www.someurl.com"},
        {webTitle: "title 2", webUrl: "www.someotherurl.com"},
      ]
    }
  };

  beforeEach(inject(function(_NewsService_, _NewsItemFactory_, $httpBackend) {
    NewsService = _NewsService_;
    NewsItemFactory = _NewsItemFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches news items from the guardian api', function(){
    url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics';
    httpBackend.expectGET(url).respond(guardianResponse);

    var story1 = new NewsItemFactory("title 1", "www.someurl.com");
    var story2 = new NewsItemFactory("title 2", "www.someotherurl.com");

    NewsService.getStories().then(function(stories){
      expect(stories).toEqual([story1, story2]);
    });
    httpBackend.flush();
  });

});
