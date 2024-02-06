/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'tandp-s3-test.fra1.digitaloceanspaces.com',
			},
		],
	},
}

export default nextConfig
