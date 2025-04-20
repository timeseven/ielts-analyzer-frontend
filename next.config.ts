import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: '/api/v1/:path*',
				destination: 'http://localhost:8000/api/v1/:path*',
			},
		];
	},
};

export default nextConfig;
