
angular.module('newsSummaryApp')
       .service('NewsService', ["$http", "NewsItemFactory",function($http, NewsItemFactory){

         this.getStories = function(){
           return $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics')
                .then(_handleAPIResponse);
         };

         function _handleAPIResponse(response){
           return response.data.response.results.map(function(result){
             console.log(result)
             return new NewsItemFactory(result.webTitle, result.webUrl);
           });
         }

       }]);
