import Image from '../models/Image';

export default {
	render(image: Image) {
		return {
            id: image.id,
            path: `http://localhost:3333/uploads/${image.path}`
		};
	},
	renderMany(images: Image[]) {
		return images.map((images) => this.render(images));
	},
};
