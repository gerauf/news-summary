angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ["NewsItemFactory", function(NewsItemFactory) {
    var self = this;

    self.newsItems = [new NewsItemFactory("new story","www.somewhere.com")];

  }]);
