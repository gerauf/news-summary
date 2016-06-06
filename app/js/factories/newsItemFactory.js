angular.module('newsSummaryApp')
       .factory('NewsItemFactory', ['$http', function($http){

         var NewsItem = function(title, url, imageLink){
           var self = this;

           self.title = title;
           self.url = url;
           self.imageLink = imageLink;
         };

         NewsItem.prototype.getSummary = function () {
           var self = this;
           summaryUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + self.url;
           $http.get(summaryUrl).then(function(response){
             self.summaries = response.data.sentences;
           });

         };


         return NewsItem;
       }]);
