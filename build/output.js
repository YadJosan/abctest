var main = angular.module("app.profile", ["ngMaterial", "ui.router", "common.services", "profileUserResourceMock"]);
main.config(routeConfig);
routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state("/", {
        url: "/",
        templateUrl: "/app/main/profile.html",
        controller: "ProfileController as vm"
    });
    $urlRouterProvider.otherwise("/");
}
var app;
(function (app) {
    var profile;
    (function (profile) {
        var ProfileController = (function () {
            function ProfileController($scope, $mdDialog) {
                this.$scope = $scope;
                this.$mdDialog = $mdDialog;
                var vm = this.$scope;
                this.$scope.$on("handleEmit", function (event, args) {
                    vm.$broadcast('Detataatat', args);
                });
            }
            ProfileController.prototype.call = function (args) {
                alert();
                this.$scope.$broadcast('Detataatat', args);
            };
            ProfileController.$inject = ["$scope", "$mdDialog"];
            return ProfileController;
        }());
        angular
            .module("app.profile")
            .controller("ProfileController", ProfileController);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
var app;
(function (app) {
    var domain;
    (function (domain) {
        var Profile = (function () {
            function Profile(userid, username, company, job, location, province, avatar, type) {
                this.userid = userid;
                this.username = username;
                this.company = company;
                this.job = job;
                this.location = location;
                this.province = province;
                this.avatar = avatar;
                this.type = type;
            }
            return Profile;
        }());
        domain.Profile = Profile;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
var app;
(function (app) {
    var directives;
    (function (directives) {
        var ZmProfileUserController = (function () {
            function ZmProfileUserController($scope, dataAccessService) {
                var _this = this;
                this.$scope = $scope;
                this.dataAccessService = dataAccessService;
                this.textBinding = 'hfgdshjfjh';
                this.dataBinding = 0;
                this.profileList = [];
                var productResource = dataAccessService.getProfileResource();
                productResource.query(function (data) {
                    _this.profileList = data;
                });
            }
            ZmProfileUserController.prototype.add = function () {
                //this.functionBinding();
                this.$scope.$emit("handleEmit", "hello");
            };
            ZmProfileUserController.prototype.edit = function (ev, profile, index) {
                //   alert(index);
                profile.index = index;
                this.$scope.$emit("handleEmit", profile);
                event.stopPropagation();
            };
            ZmProfileUserController.prototype.detail = function (ev, profile) {
                //alert(profile);
            };
            ZmProfileUserController.$inject = ["$scope", "dataAccessService"];
            return ZmProfileUserController;
        }());
        var ZmProfileUser = (function () {
            function ZmProfileUser() {
                this.bindings = {
                    textBinding: '@',
                    dataBinding: '<',
                    functionBinding: '&'
                };
                this.controller = ZmProfileUserController;
                this.templateUrl = '/app/main/tabs/user/profileUser/profileUser.html';
            }
            return ZmProfileUser;
        }());
        angular.module('app.profile').component('zmProfileUser', new ZmProfileUser());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
var app;
(function (app) {
    var directives;
    (function (directives) {
        var ZmProfileUserDetailController = (function () {
            function ZmProfileUserDetailController($scope) {
                this.$scope = $scope;
                this.textBinding = 'hfgdshjfjh';
                this.dataBinding = 0;
                this.$scope.$on("Detataatat", function (event, args) {
                    alert("JOSAN");
                    console.log(args);
                });
            }
            ZmProfileUserDetailController.prototype.add = function () {
                //this.functionBinding();
                this.$scope.$emit("handleEmit", "hello");
            };
            ZmProfileUserDetailController.$inject = ["$scope"];
            return ZmProfileUserDetailController;
        }());
        var ZmProfileUserDetail = (function () {
            function ZmProfileUserDetail() {
                this.bindings = {
                    textBinding: '@',
                    dataBinding: '<',
                    functionBinding: '&'
                };
                this.controller = ZmProfileUserDetailController;
                this.templateUrl = '/app/main/tabs/user/profileUserDetail/profileUserDetail.html';
            }
            return ZmProfileUserDetail;
        }());
        angular.module('app.profile').component('zmProfileUserDetail', new ZmProfileUserDetail());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("common.services", ["ngResource"]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProfileResource = function () {
                return this.$resource("/api/profile/:profileId");
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular
            .module("profileUserResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var profiles = [];
            var pforile;
            pforile = new app.domain.Profile(1, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(2, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(3, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(4, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(5, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(6, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(7, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(8, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            pforile = new app.domain.Profile(9, "Garry Muster", "Zippel Media", "Developer", "Elsdorf", "North-Rhine-Westfalia", "./images/avatars/NoImage.jpg", "user");
            profiles.push(pforile);
            var pforileUrl = "/api/profile";
            $httpBackend.whenGET(pforileUrl).respond(profiles);
            var editingRegex = new RegExp(pforileUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var pforile = { "profileId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parseInt(parameters[length - 1]);
                if (id > 0) {
                    for (var i = 0; i < profiles.length; i++) {
                        if (profiles[i].userid == id) {
                            pforile = app.profile[i];
                            break;
                        }
                    }
                }
                return [200, pforile, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, app.profile, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
