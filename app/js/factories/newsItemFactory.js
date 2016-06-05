angular.module('newsSummaryApp')
       .factory('NewsItemFactory',function(){
         var NewsItem = function(title, url){
           this.title = title;
           this.url = url;
         };
         return NewsItem;
       });
