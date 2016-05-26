module app.common {

    var mockResource = angular
        .module("profileUserResourceMock",
            ["ngMockE2E"]);

    mockResource.run(mockRun);
    
    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var profiles: app.domain.IProfile[] = [];
        var pforile: app.domain.Profile;

        pforile = new app.domain.Profile(1, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);

          pforile = new app.domain.Profile(2, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);

         pforile = new app.domain.Profile(3, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
 
           pforile = new app.domain.Profile(4, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
        
           pforile = new app.domain.Profile(5, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);

    pforile = new app.domain.Profile(6, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
            pforile = new app.domain.Profile(7, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
            pforile = new app.domain.Profile(8, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
            pforile = new app.domain.Profile(9, "Garry Muster", "Zippel Media", "Developer", "Elsdorf","North-Rhine-Westfalia",
            "./images/avatars/NoImage.jpg",
            "user");
        profiles.push(pforile);
        var pforileUrl = "/api/profile";

        $httpBackend.whenGET(pforileUrl).respond(profiles);

        var editingRegex = new RegExp(pforileUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var pforile = { "profileId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id =parseInt(parameters[length - 1]);

            if (id > 0) {
                for (var i = 0; i < profiles.length; i++) {
                    if (profiles[i].userid == id) {
                        pforile = profile[i];
                        break;
                    }
                }
            }
            return [200, pforile, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function(method, url, data) {
            
            return [200, profile, {}];
        });
                
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}