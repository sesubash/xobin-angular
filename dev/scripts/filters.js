var filter = angular.module("PB.filters", []);
/*
 * Get sanitized image url per api structure
 * @ params: url, width, height
 */
 filter.filter('sanitizeImgUrl', function() {
    return function(photo, size) { 
        return photo ? "http://farm"+photo['farm']+".static.flickr.com/"+photo['server']+"/"+photo['id']+"_"+photo['secret']+"_"+size+".jpg" : "";
    };
});

filter.filter('renderHtml', function($sce) {
    return function(text) { 
        return text ? $sce.trustAsHtml(text): "";
    };
});
filter.filter('filterUser', function() {
    return function(obj, key, value) {
        var len = obj.length; 
        var status = true, user;
        for(var i=0; i< len; i++){
        	user = obj[i];
        	if(user[key] == value)
        		break;
        };

        return user;
    };
});