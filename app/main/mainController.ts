module app.profile{

 interface IProfileController  {
        call(args:any) : void;
        
    }
    class ProfileController implements IProfileController{
       
        public static $inject = ["$scope","$mdDialog"];
        constructor(public $scope:ng.IScope,public $mdDialog: angular.material.IDialogService) {
            var vm=this.$scope;
                 this.$scope.$on("handleEmit", function (event, args) {
                 
                      vm.$broadcast('Detataatat',args);
                  });     
        }
       call(args){
            alert();
           this.$scope.$broadcast('Detataatat',args);
        }        
    
    }
    angular
		.module("app.profile")
		.controller("ProfileController",
			ProfileController);
    
}