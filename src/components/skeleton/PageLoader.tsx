import { useState, useEffect } from 'react';
import {
  NavbarSkeleton,
  HeroSkeleton,
  AboutSkeleton,
  ServicesSkeleton,
  GallerySkeleton,
  BrandsSkeleton,
  ReviewsSkeleton,
  ContactSkeleton,
  FooterSkeleton,
} from './Skeleton';

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream">
        <NavbarSkeleton />
        <main>
          <HeroSkeleton />
          <AboutSkeleton />
          <ServicesSkeleton />
          <GallerySkeleton />
          <BrandsSkeleton />
          <ReviewsSkeleton />
          <ContactSkeleton />
          <FooterSkeleton />
        </main>
      </div>
    );
  }

  return <>{children}</>;
}
