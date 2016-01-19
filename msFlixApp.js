'use strict';
// Create msNetflix Module
angular.module('msNetflix', ['msNetflix.services', 'msNetflix.directives']);

angular.module('msNetflix.services', [])
	// Create movies Service
	.service('movies', function($http) {
		return {
			getSpinnerData: function() {
				return $http.get('http://localhost:3000/data');
			}
		};
	});

angular.module('msNetflix.directives', [])
	// Create <ms-spinner-container></ms-spinner-container>
	.directive('msSpinnerContainer', function(movies) {
		return {
			restrict: 'E',
			scope: {
				search: '='
			},
			template: [
				'<div class="spinner-container" ng-repeat="spinner in spinners | filter:search">',
					'<h2>{{ spinner.genre }}</h2>',
					'<ms-movie-spinner movies="spinner.movies" search="search"></ms-movie-spinner>',
				'</div>'].join(''),
			link: function($scope) {
				movies.getSpinnerData().then(function(result) {
					$scope.spinners = result.data;
				});
			}
		};
	})

	// Create <ms-movie-spinner></ms-movie-spinner>
	.directive('msMovieSpinner', function() {
		return {
			restrict: 'E',
			scope: {
				movies: '=',
				search: '='
			},
			template: [
				'<ul class="ms-spinner">',
					'<li ng-repeat="movie in movies | filter:search">',
						'<img class="ms-movie" ng-src="{{movie.img_url}}" alt="{{movie.title}}"/>',
					'</li>',
				'</ul>'].join('')
		};
	});