import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'chaicode.com',
      }
    ]
  }
  
};

export default nextConfig;
