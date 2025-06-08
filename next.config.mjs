/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure image domains if needed (we'll add Supabase storage URL later)
  images: {
    domains: [],
  },
  
  // Configure experimental features
  experimental: {
    // Enable server actions
    serverActions: true,
  },
};

export default nextConfig; 