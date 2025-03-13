import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [

			{
				protocol: "https",
				hostname: "fywvmnxqgoxjemqanogm.supabase.co",
			},
		],
	},
};

export default nextConfig;
