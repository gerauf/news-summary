describe("NewsSummaryController", function() {

  var controller;

  beforeEach(module("newsSummaryApp"));


  beforeEach(inject(function($controller) {
    controller = $controller("NewsSummaryController");
  }));


  it("initialised with items that have titles'", function() {
    expect(controller.newsItems[0].title).toMatch("new story");
  });
});
