var app = angular.module('nytApp', [])

app.controller('ArticleController', function($scope, $http) {
   
    $scope.findStuff = function() {
        $http
        .jsonp('http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&fl=headline&api-key=sample-key')
    }
    
    window.svc_search_v2_articlesearch = function(data) {
        $scope.data = data.response.docs;
    }
})