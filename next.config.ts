import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Lint hataları build'i bozmasın
  },
  output: 'standalone', // ✅ Docker standalone build için gerekli
}

export default nextConfig;
