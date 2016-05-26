module app.directives {
 
    interface IZmProfileUserDetailBindings  {
        textBinding: string;
        dataBinding: number;
        functionBinding: () => any;
        
    }
 
    interface IZmProfileUserDetailController extends IZmProfileUserDetailBindings {
        add(): void;
    }
 
    class ZmProfileUserDetailController implements IZmProfileUserDetailController {
 
        public textBinding:string;
        public dataBinding:number;
        public functionBinding:() => any;
           
        public static $inject=["$scope"];
        constructor(public $scope:ng.IScope) {           
            this.textBinding = 'hfgdshjfjh';
            this.dataBinding = 0;
             this.$scope.$on("Detataatat", function (event, args) {                
                    console.log(args);
        });     
        }
 
        add():void {
            //this.functionBinding();
            
            this.$scope.$emit("handleEmit","hello");
        }
        
        
 
    }
 
    class ZmProfileUserDetail implements ng.IComponentOptions {
 
        public bindings:any;
        public controller:any;
        public templateUrl:string;
 
        constructor() {
            this.bindings = {
                textBinding: '@',
                dataBinding: '<',
                functionBinding: '&'
            };
            this.controller = ZmProfileUserDetailController;
            this.templateUrl = '/app/main/tabs/user/profileUserDetail/profileUserDetail.html';
        }
 
    }
 
    angular.module('app.profile').component('zmProfileUserDetail', new ZmProfileUserDetail());
 
}