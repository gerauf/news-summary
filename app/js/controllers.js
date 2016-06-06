angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ["NewsService", function(NewsService) {
    var self = this;

    NewsService.getStories().then(function(newsItems){
      self.newsItems = newsItems;
    });

  }]);
