export class Cars{

	constructor(
		public _id: string,
		public name: string,
		public model: string,
		public price: string,
		public category_id: number,
		public description: string,
		public image: string,
		public list_image: string,
		public created_at: string,
		public updated_at: string
	){}
}