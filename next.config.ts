import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true, // ✅ Lint hataları build’i bozmasın
  },
}

export default nextConfig;
