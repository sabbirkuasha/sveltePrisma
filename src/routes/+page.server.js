import prisma from '$lib/prisma';

export const load = async () => {
	// 1.
	const response = await prisma.post.findMany({});

	// 2.
	return { feed: response };
};
