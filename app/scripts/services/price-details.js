'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('priceDetails', function($http) {
		return {
			get: function(id) {
				delete $http.defaults.headers.common['X-Requested-With'];
				return $http({method: 'get', url: 'http://a.scrollsguide.com/prices?id=' + id + '&details'}).success(function(data){
					return data;
				});
			}
		};
	});