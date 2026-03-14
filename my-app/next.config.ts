import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Redirects from old CMS URLs
  async redirects() {
    return [
      // Main pages
      { source: '/strona_glowna-1298.html', destination: '/pl', permanent: true },
      { source: '/aktualne_wydarzenia-1339.html', destination: '/pl/aktualnosci', permanent: true },
      { source: '/o_nas_szkola-1312.html', destination: '/pl/o-szkole', permanent: true },
      { source: '/rekrutacja-1318.html', destination: '/pl/rekrutacja', permanent: true },
      { source: '/kontakt-1319.html', destination: '/pl/kontakt', permanent: true },
      
      // Archive redirects - yearly archives
      { source: '/archiwum_aktualnosci-1355-2025.html', destination: '/pl/aktualnosci/archiwum/2025', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2024.html', destination: '/pl/aktualnosci/archiwum/2024', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2023.html', destination: '/pl/aktualnosci/archiwum/2023', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2022.html', destination: '/pl/aktualnosci/archiwum/2022', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2021.html', destination: '/pl/aktualnosci/archiwum/2021', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2020.html', destination: '/pl/aktualnosci/archiwum/2020', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2019.html', destination: '/pl/aktualnosci/archiwum/2019', permanent: true },
      { source: '/archiwum_aktualnosci-1355-2018.html', destination: '/pl/aktualnosci/archiwum/2018', permanent: true },
    ];
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
