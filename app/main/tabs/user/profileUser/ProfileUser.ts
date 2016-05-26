module app.directives {
 
    interface IZmProfileUserBindings  {
        textBinding: string;
        dataBinding: number;
        functionBinding: () => any;
        
    }
 
    interface IZmProfileUserController extends IZmProfileUserBindings {
        add(): void;
        profileList: app.domain.IProfile[];
        edit(ev:any,profile:any,index):void;
        detail(ev,profile):void;
    }
 
    class ZmProfileUserController implements IZmProfileUserController {
 
        public textBinding:string;
        public dataBinding:number;
        public functionBinding:() => any;
        profileList:app.domain.IProfile[];
        
        public static $inject=["$scope","dataAccessService"];
        constructor(public $scope:ng.IScope,private dataAccessService: app.common.DataAccessService) {           
            this.textBinding = 'hfgdshjfjh';
            this.dataBinding = 0;
            this.profileList=[];
            var productResource = dataAccessService.getProfileResource();
			productResource.query((data: app.domain.IProfile[]) => {               
				this.profileList = data;
			});
        }
 
        add():void {
            //this.functionBinding();
            
            this.$scope.$emit("handleEmit","hello");
        }
        
        edit(ev,profile,index):void{
         //   alert(index);
            profile.index=index;
            this.$scope.$emit("handleEmit",profile);
            event.stopPropagation();
        }
        detail(ev,profile):void{
            //alert(profile);
        }
        
 
    }
 
    class ZmProfileUser implements ng.IComponentOptions {
 
        public bindings:any;
        public controller:any;
        public templateUrl:string;
 
        constructor() {
            this.bindings = {
                textBinding: '@',
                dataBinding: '<',
                functionBinding: '&'
            };
            this.controller = ZmProfileUserController;
            this.templateUrl = '/app/main/tabs/user/profileUser/profileUser.html';
        }
 
    }
 
    angular.module('app.profile').component('zmProfileUser', new ZmProfileUser());
 
}