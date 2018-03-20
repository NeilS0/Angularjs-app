
//author: Neil Steyn

/*
	NOTE: templates in angular are considered as views
	so when we create a template we basically create a view,
	we can let each view have its own controller. which is what we going to do here.
*/

//add a controller for view: templates/product_list.html

//add the controller to the app module
angular.module("theplantguru")	//we are just getting the module, we not creating it again

	//this is the controller for the parent view, all other child views have access to its scope
	.controller("theplantguruMainCtrl", ["$rootScope", "$mdDialog", "$mdSidenav", function($rootScope, $mdDialog, $mdSidenav){

		//console.log($rootScope);
			   
		$rootScope.toggleLeft = buildToggler('left');
		$rootScope.toggleRight = buildToggler('right');

		function buildToggler(componentId){
		   return function(){
			     $mdSidenav(componentId).toggle();
		   };
		}

		$rootScope.about = function(ev){
		 // Appending dialog to document.body to cover sidenav in docs app
		 // Modal dialogs should fully cover application
		 // to prevent interaction outside of dialog
		    $mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(false)
		        .title("Developed By:")
		        .textContent("Neil Steyn")
		        .ok('Okay')
		        .targetEvent(ev)
		    );

		    // $rootScope.toggleRight = function(){
		    // };
		};



		//this lets us do something once the route is finished loading a template
		$rootScope.$on("$routeChangeSuccess", function(){
			//$rootScope.layout.loading = true;
			//alert("route is finished");
		});
		
		//initialize
		$rootScope.Init = function(){
			//set view bindings
			$rootScope.strPlantSearch = "awsefffefef";
			$rootScope.blnPlantAgave = true;
			$rootScope.blnPlantSuccelent = true;
			$rootScope.blnPlantFlowers = true;
			$rootScope.blnPlantBedding = true;
			$rootScope.blnPlantBedding = true;
			$rootScope.blnPlantBedding = true;

			$rootScope.blnShowMenu = false;
		}

		//this function is for the options in the menu bar
		$rootScope.ShowMenu = function(){
			if ($rootScope.blnShowMenu){
				$rootScope.blnShowMenu = false;
			} else {
				$rootScope.blnShowMenu = true;
			}
		}

		//initialize, call it to setup
		$rootScope.Init();
	}])


	//controller for the view: templates/plant_list.html
	//now we add a controller to it
	.controller("plantListCrtl", ["$rootScope", "plantList", function($rootScope, plantList, $routeParams, $location){

		// console.log($location);
		// console.log($location);

		/*
			whats important to keep in mind about angular controllers is that we fisrt need to bind our view with our model
			before we can oviously use them.
		*/

		// console.log(product_list);

		//add the product list to the scope
		$rootScope.plantList = plantList;
		//$rootScope.plantList.id = $routeParams.id;
		// console.log($rootScope.plantList);


		//register/add functions to the scope
		//initialize
		$rootScope.Init = function(){

			$rootScope.bln = true;

			//set view bindings
			$rootScope.strPlantSearch = null;
			$rootScope.blnPlantAgave = true;
			$rootScope.blnPlantSuccelent = true;
			$rootScope.blnPlantFlowers = true;
			$rootScope.blnPlantBedding = true;
			$rootScope.blnPlantBedding = true;
			$rootScope.blnPlantBedding = true;

			// $rootScope.number = 0;
		}

		//initialize, call it to setup
		$rootScope.Init();

	}])


	/*
		TODO: this needs to get the plant id from the plant that was selected from the the plant list
		Then it needs to get the information about it, then sync with the view
	*/
	//controller for the view: templates/plant_item.html
	.controller("plantItemCrtl", ["$rootScope", "plantItem", "$stateParams", "$location" , function($rootScope, plantItem, /*$routeParams*/$stateParams, $location){

		// console.log($location);

		$rootScope.item = plantItem.getPlantItem($stateParams.plantid);

		//initialize
		$rootScope.Init = function(){
		}

		//initialize, call it to setup
		$rootScope.Init();

	}]);