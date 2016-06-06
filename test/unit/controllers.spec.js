describe("NewsSummaryController", function() {
  beforeEach(module("newsSummaryApp"));

  var controller, httpbackend, url;
  var guardianResponse = {
    response: {
      results: [
        {webTitle: "title 1", webUrl: "www.someurl.com", fields: {
          thumbnail: "www.imageLink.com"}}
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

  beforeEach(inject(function($controller, $httpBackend) {
    controller = $controller("NewsSummaryController");
    httpBackend = $httpBackend;
    guardianUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail';
    summaryUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=www.someurl.com';
    httpBackend.expectGET(url).respond(guardianResponse);
    httpBackend.expectGET(summaryUrl).respond(summaryResponse);
    httpBackend.flush();
  }));


  it("initialised with items from guardian api'", function() {
    expect(controller.newsItems[0].title).toEqual("title 1");
  });
});
