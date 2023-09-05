import prisma from '$lib/prisma';

export const actions = {
	default: async ({ request }) => {
		console.log(request);
		const data = await request.formData();

		let title = data.get('title');
		let content = data.get('content');

		console.log(title, content);

		await prisma.post.create({
			data: {
				title,
				content
			}
		});
	}
};
