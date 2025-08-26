'use server';
export const imageLoader = (src, width, quality) => {
	console.log({ src });
	return `https://madioo.com/${src}?w=${width}&q=${quality || 90}`;
};
