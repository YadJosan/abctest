module app.domain {
	export interface IProfile {
		userid: number;
		username: string;
		company: string;
		job: string;
		location: string;
		province:string;
		avatar: string;
		type: string;
		//calculateDiscount(percent: number): number;
	}

	export class Profile implements IProfile {

		constructor(public userid: number,
					public username: string,
					public company: string,
					public job: string,
					public location: string,
					public province:string,
					public avatar: string,
					public type: string) {
		}

		// calculateDiscount(percent: number): number {
		// 	return this.price - (this.price * percent / 100);
		// }
	}
}