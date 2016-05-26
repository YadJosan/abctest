module app.common {
	interface IDataAccessService {
		getProfileResource(): ng.resource.IResourceClass<IProfileResource>;
	}

	interface IProfileResource
		extends ng.resource.IResource<app.domain.IProfile> {

	}

	export class DataAccessService
		implements IDataAccessService {

		static $inject = ["$resource"];
		constructor(private $resource: ng.resource.IResourceService) {

		}

		getProfileResource(): ng.resource.IResourceClass<IProfileResource> {
			return this.$resource("/api/profile/:profileId");
		}
	}
	angular
		.module("common.services")
		.service("dataAccessService",
			DataAccessService);

}