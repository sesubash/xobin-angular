angular.module('PB.directives', [])
.directive('header', function($window, $rootScope){
  return {
    restrict: "E",
    templateUrl: "views/header.html",
    link: function(scope, elem, attrs){
          
    } 
  } 
})
.directive('footer', function($window, $rootScope){
  return {
    restrict: "E",
    templateUrl: "views/footer.html",
    link: function(scope, elem, attrs){
          
    } 
  } 
})
.directive('users', function(){
	return {
		restrict: "E",
		templateUrl: "views/users.list.html",
		link: function(scope, elem, attrs){
        console.log("SAD");
        scope.currentPage = 1;
        scope.pageSize = 10;
		}	
	}	
})
.directive('posts', function(){
  return {
    restrict: "E",
    templateUrl: "views/posts.list.html",
    link: function(scope, elem, attrs){
        scope.currentPage = 1;
        scope.pageSize = 10;
    } 
  } 
})
.directive('loader',  function($window, $rootScope){
    return {
        restrict: "E",
        template: '<div align="center" class="fond">'+
                    '<div class="contener_general">'+
                      '<div class="contener_mixte"><div class="ballcolor ball_1">&nbsp;</div></div>'+
                      '<div class="contener_mixte"><div class="ballcolor ball_2">&nbsp;</div></div>'+
                      '<div class="contener_mixte"><div class="ballcolor ball_3">&nbsp;</div></div>'+
                      '<div class="contener_mixte"><div class="ballcolor ball_4">&nbsp;</div></div>'+
                  '</div>'+
                '</div>',
        link: function(scope, elem, attrs){
            
        }
    }
});