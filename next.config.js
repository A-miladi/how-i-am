/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = withBundleAnalyzer({
	experimental: {
		appDir: true,
	},
	output: 'export',

	images: {
		domains: ['madioo.com'],
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	webpack: (config, { dev, isServer }) => {
		// config.optimization = {
		// 	...config.optimization,
		// 	usedExports: true,
		// };

		config.plugins.push(new DuplicatePackageCheckerPlugin());

		return config;
	},
});
