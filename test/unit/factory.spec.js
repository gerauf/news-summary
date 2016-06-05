describe("NewsItemFactory", function() {
  beforeEach(module("newsSummaryApp"));

  var newsItem;

  beforeEach(inject(function(NewsItemFactory){
    newsItem = new NewsItemFactory("title", "url");
  }));

  it('creates items that have a title', function(){
    expect(newsItem.title).toEqual('title');
  });


});
