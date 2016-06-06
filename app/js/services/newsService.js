
angular.module('newsSummaryApp')
       .service('NewsService', ["$http", "NewsItemFactory",function($http, NewsItemFactory){

         this.getStories = function(){
           return $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail')
                .then(_handleAPIResponse);
         };

         function _handleAPIResponse(response){
           return response.data.response.results.map(function(result){
             var newsItem;
             newsItem = new NewsItemFactory(
               result.webTitle,
               result.webUrl,
               _getImageLink(result.fields)
             );
             newsItem.getSummary();
             return newsItem;
           });
         }

         function _getImageLink(fields){
           if(fields){ return fields.thumbnail; }
           else{ return "http://globe-views.com/dcim/dreams/news/news-01.jpg"; }
         }

       }]);
