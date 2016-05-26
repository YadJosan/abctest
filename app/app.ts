
	var main = angular.module("app.profile",
		["ngMaterial","ui.router","common.services","profileUserResourceMock"]);

	main.config(routeConfig);

	routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
	function routeConfig($stateProvider: ng.ui.IStateProvider,$urlRouterProvider: ng.ui.IUrlRouterProvider):void{

		$stateProvider.state("/",{
            url:"/",
            templateUrl:"/app/main/profile.html",
            controller:"ProfileController as vm"
        });
        
		$urlRouterProvider.otherwise("/");
            
	}
