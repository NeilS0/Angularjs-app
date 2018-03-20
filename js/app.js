
//author: Neil Steyn

//register and create our app module
angular.module("theplantguru", [/*"ngRoute"*/"ui.router", "ngAnimate", "ngMaterial"]);	//we need the ngRoute module for template routing
//ngAnimate - for animation
//ngMaterial - for material

//add routing
angular.module("theplantguru")	//we are just getting the module, we not creating it again.
	//we need to configure/setup the router

	//$routeProvider with module: ngRoute
	//$stateProvider with module: ui-route
	//$urlRouterProvider
	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){

		//if no state was specified, default to this
		$urlRouterProvider.otherwise('/plant');

		//states
		$stateProvider
		.state("plantitem", {
			 url: '/plantitem/:plantid',	/*should be: /plant/list/item*/
    		templateUrl: 'templates/plant_item.html',
    		controller: 'plantItemCrtl'
		})
		.state("plantlist", {
			 url: '/plant',	/*should be: /plant/list*/
    		templateUrl: 'templates/plant_list.html',
    		controller: 'plantListCrtl'
		});
/*
		$routeProvider
			//when we select a plant, this is the template that gets loaded
			.when('/plant', {
				templateUrl: 'templates/plant_item.html',
				controller: 'plantItemCrtl'
			})
			//this is the default template when we first load our app/website
			.otherwise({templateUrl: 'templates/plant_list.html',
				 controller: 'plantListCrtl'
			});
*/
	}])

	//by default angular animation is disabled, so we enabling animation
	.run(["$animate", function($animate) {
	  $animate.enabled(true);
	}]);



//test, was checking out making my own directives
angular.module("theplantguru")
.directive('ngbkFocus', function(){
		return {
			link: function(scope, element, attrs, controller){
				element[0].focus();
			}
		};
	});
	