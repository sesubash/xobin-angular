var app = angular.module("PB", ['ui.router', 'angular.filter', 'angularUtils.directives.dirPagination', 'PB.controllers', 'PB.services', 'PB.filters', 'PB.directives'])
.run(function ($rootScope, $state, $window, $timeout, ConnectivityMonitor) {
          $rootScope.x2js = new X2JS();
          if (ConnectivityMonitor.isOnline()) {

            $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {

            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
              $state.previous = fromState;
              $state.fromParams = fromParams;
            });

            ConnectivityMonitor.startWatching();
        }

  })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $qProvider) {

      $qProvider.errorOnUnhandledRejections(false);

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $stateProvider 
      .state('app', {
        url: "/",  
        templateUrl: "views/home.html",
        controller: "AppCtrl",
        onEnter: function(){
        }     
      })
      .state('users', {
        url: "/users", 
        abstract: true, 
        templateUrl: "views/users.html",
        resolve:{
          userList: function( Users){
            return Users.getUsers().then(function(result){
              return result.row;
            });
          },
          posts: function( Posts){
            return Posts.getPosts().then(function(result){
              return result.row;
            });
          },
          tags: function( Tags){
            return Tags.getTags().then(function(result){
              return result.row;
            });
          },
          comments: function( Comments){
            return Comments.getComments().then(function(result){
              return result.row;
            });
          },
          badges: function( Badges){
            return Badges.getBadges().then(function(result){
              return result.row;
            });
          }
        },
        controller: function($scope, userList, tags, comments, posts){
          $scope.users = userList;
          $scope.tags = tags;
          $scope.comments = comments;
          $scope.posts = posts;
          console.log(posts);
        },
        onEnter: function(){

        }     
      }) 
      .state('users.list', {
        url: "/list",
        template: "<users></users>",
        onEnter: function(){
          console.log("sadsa");
        }     
      }) 
      .state('users.detail', {
        url: '/:id',
        templateUrl: 'views/user.detail.html',
        controller: function($scope, $stateParams, $filter){
          
              //$scope.users =  userList;
              $scope.user = $filter('filterUser')($scope.users, '_Id', $stateParams.id);

              console.log('comments', $scope.comments);
              console.log('tags', $scope.tags);
          
          
        }
      })
      .state('posts', {
        url:"/posts",
        resolve:{
          posts: function( Posts){
            return Posts.getPosts().then(function(result){
              return result.row;
            });
          }
        },
        template: "<posts></posts>",
        controller: function($scope, posts){
          console.log($scope.posts);

        }
      });

    $urlRouterProvider.when("/users", "/users/list");

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/users");




    /*
     *  Append auth token on each request if the user is logged in
     */    
    // var interceptor = function($q, $rootScope) {
    //     return {
    //         request: function(req) {    
    //             console.log(req);           
    //             return req || $q.when(req);
    //         },
            
    //         requestError: function(reqErr) {
    //             console.log(reqErr);
    //             return reqErr;
    //         },

    //         response: function(response) {
    //             console.log(response);
    //             if(response.status == 0){
    //                return $q.reject(response);
    //             }
    //           // do something on success
    //           return response;
    //         },

    //         responseError: function(rejection) {                
    //             console.log(rejection);
    //             if(rejection.status == 0){
    //               $rootScope.hide();                  
    //             }          
    //             return $q.reject(rejection);
    //         }
    //     }
    // }

    // Integrate the interceptor in the request/response chain for $http
    //$httpProvider.interceptors.push(interceptor);

  });

var addRippleEffect = function (e) {
    var target = e.target;
    if (target.className.indexOf('material-btn') == -1) return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}

document.addEventListener('click', addRippleEffect, false);