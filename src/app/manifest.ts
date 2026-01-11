import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FadeFactory Barbershop',
    short_name: 'FadeFactory',
    description: 'Premium haircuts and grooming services in Stoney Creek.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png', // Next.js automatically generates this route if icon.png exists in app/
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
