'use strict';

describe('Unit test', function() {
	var $compile;
	var $rootScope;
	
	beforeEach(module('msNetflix'));
	beforeEach(module('msNetflix.directives'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$compile = _$compile_;
		$rootScope = _$rootScope_.$new({});
	}));
	
	it('replaces the movie url & title as expected',function(){
		$rootScope.movies = [{img_url:"url1",title:"Cinderella"}];
		$rootScope.search = "C";
		var beforeElement = angular.element('<ms-movie-spinner movies="movies" search="search"></ms-movie-spinner>');
		var element = $compile(beforeElement)($rootScope);
		$rootScope.$digest();
		var url = element[0].firstChild.firstChild;
	});

});