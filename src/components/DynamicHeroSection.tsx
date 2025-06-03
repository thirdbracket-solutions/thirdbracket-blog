// src/components/DynamicHeroSection.tsx
import dynamic from 'next/dynamic'

export const DynamicHero = dynamic(() => import('./HeroSection').then((mod) => mod.Hero), {
  ssr: true,
})
