'use strict';

describe('msMovieSpinner Test', function() {
	var $compile;
	var $scope;
	
	beforeEach(module('msNetflix'));
	beforeEach(module('msNetflix.directives'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$scope = _$rootScope_.$new({});
	}));
	
	it('msMovieSpinner - replaces the movie url & alt as expected',function(){
		$scope.movies = [{
			img_url:"http://cdn1.nflximg.net/webp/6325/8956325.webp",
			title:"Star Trek the Next Generation"}];
		$scope.search = "C";
		var beforeElement = angular.element('<ms-movie-spinner movies="movies" search="search"></ms-movie-spinner>');
		var compiledElement = $compile(beforeElement)($scope);
		$scope.$digest();
		var img = compiledElement.find("li").find("img");
		expect(img.attr("src")).toEqual("http://cdn1.nflximg.net/webp/6325/8956325.webp");
		expect(img.attr("alt")).toEqual("Star Trek the Next Generation");
	});
	
});

describe('msSpinnerContainer Test', function() {
	var $compile;
	var $scope;
	var moviesMock;
	var spinnersData = {data:[{
		genre: 'Trending Now',
		movies: [{
			title: 'The Office',
			img_url: 'http://cdn1.nflximg.net/webp/0207/8390207.webp'
		}, {
			title: 'Star Trek the Next Generation',
			img_url: 'http://cdn1.nflximg.net/webp/6325/8956325.webp'
		},
	]}]};
	
	beforeEach(module('msNetflix'));
	beforeEach(module('msNetflix.directives'));
	beforeEach(inject(function(_$compile_, _$rootScope_,_movies_,$q){
		$compile = _$compile_;
		$scope = _$rootScope_.$new({});
		moviesMock = _movies_;
		spyOn(moviesMock, "getSpinnerData").and.callFake(function(){
			var deferred = $q.defer();
			deferred.resolve(spinnersData);
			return deferred.promise;
		});
	}));
	
	it('Will produce the genre with list of movies',function(){
		$scope.search = "";
		var beforeElement = angular.element('<ms-spinner-container search="search"></ms-movie-spinner>');
		var compiledElement = $compile(beforeElement)($scope);
		$scope.$digest();
		var div = compiledElement.find("div");
		expect(div.length).toEqual(1);
		var children = div.contents();
		var h2 = angular.element(children[0]);
		var msMovieSpinner = children[1];
		expect(h2.html()).toEqual('Trending Now');
		expect(msMovieSpinner.nodeName).toEqual("MS-MOVIE-SPINNER");
	});
});

	