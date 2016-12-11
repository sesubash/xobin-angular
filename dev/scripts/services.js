angular.module('PB.services', [])
.factory('Users', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getUsers: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/users.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).users);
        });
     }
  };
}])
.factory('Tags', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getTags: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/tags.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).tags);
        });
     }
  };
}])
.factory('Badges', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getBadges: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/Badges.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).badges);
        });
     }
  };
}])
.factory('Votes', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getTags: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/votes.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).votes);
        });
     }
  };
}])
.factory('Posts', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getPosts: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/posts.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).posts);
        });
     }
  };
}])
.factory('PostLinks', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getPosts: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/postlinks.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).postlinks);
        });
     }
  };
}])
.factory('PostHistory', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getPosts: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/PostHistory.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).posthistory);
        });
     }
  };
}])
.factory('Comments', ['$http', '$rootScope', function($http, $rootScope){
  return {
    getComments: function(){
      return $http({
           method: 'GET',
           url: '../dumplist/Comments.xml'
           }).then(function (response) {

           return angular.fromJson($rootScope.x2js.xml_str2json(response.data).comments);
        });
     }
  };
}])
.factory('ConnectivityMonitor', function($rootScope) {

        return {
            isOnline: function() {
                return navigator.onLine;
            },
            isOffline: function() {
                return !navigator.onLine;
            },
            startWatching: function() {
               
                window.addEventListener("online", function(e) {
                    console.log("went online");
                }, false);

                window.addEventListener("offline", function(e) {
                    console.log("went offline");
                }, false);
            }
        }
});