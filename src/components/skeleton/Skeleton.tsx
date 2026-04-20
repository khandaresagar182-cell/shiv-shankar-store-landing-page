import { cn } from '../../utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-maroon-200/60 rounded',
        className
      )}
    />
  );
}

// Navbar Skeleton
export function NavbarSkeleton() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Skeleton className="w-11 h-11 rounded-lg" />
            <div className="hidden sm:block">
              <Skeleton className="h-6 w-40 rounded mb-1" />
              <Skeleton className="h-3 w-32 rounded" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-9 w-16 rounded-full mx-0.5" />
            ))}
            <Skeleton className="h-10 w-28 rounded-full ml-4" />
          </div>
          <Skeleton className="lg:hidden w-10 h-10 rounded-lg" />
        </div>
      </div>
    </nav>
  );
}

// Hero Skeleton - INCREASED font sizes
export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-maroon-950">
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-900/80 to-maroon-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-maroon-950/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-4 w-56 rounded" />
          </div>

          {/* Headline - INCREASED heights for text-4xl sm:text-5xl md:text-6xl lg:text-7xl with leading-tight */}
          <div className="mb-8 space-y-4">
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 w-full max-w-3xl rounded-lg" />
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 w-5/6 max-w-2xl rounded-lg" />
            <Skeleton className="h-12 sm:h-16 md:h-20 lg:h-24 w-3/4 max-w-xl rounded-lg" />
          </div>

          {/* Sub-headline - INCREASED for text-lg sm:text-xl */}
          <div className="mb-4 space-y-3">
            <Skeleton className="h-7 sm:h-8 w-full max-w-2xl rounded" />
            <Skeleton className="h-7 sm:h-8 w-4/5 max-w-xl rounded" />
          </div>

          {/* Marathi text - INCREASED for text-lg */}
          <Skeleton className="h-8 w-80 rounded mb-12" />

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-14 w-44 rounded-full" />
            <Skeleton className="h-14 w-40 rounded-full" />
            <Skeleton className="h-14 w-36 rounded-full" />
          </div>
        </div>

        {/* Stats - INCREASED for text-2xl sm:text-3xl */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center md:text-left">
              <Skeleton className="h-10 sm:h-12 w-24 rounded mb-2" />
              <Skeleton className="h-4 w-32 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <Skeleton className="h-3 w-10 rounded" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
    </section>
  );
}

// About Skeleton - INCREASED font sizes
export function AboutSkeleton() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-maroon-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <Skeleton className="w-full h-[500px] rounded-3xl" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 w-[200px]">
              <Skeleton className="h-10 w-16 rounded mb-2" />
              <Skeleton className="h-4 w-full rounded mb-2" />
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-4 h-4 rounded-full" />
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold-400/30 rounded-3xl" />
          </div>

          {/* Text Side - INCREASED for text-3xl sm:text-4xl lg:text-5xl */}
          <div>
            <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>

            {/* Headlines - INCREASED */}
            <div className="space-y-3 mb-8">
              <Skeleton className="h-10 sm:h-12 lg:h-16 w-full rounded-lg" />
              <Skeleton className="h-10 sm:h-12 lg:h-16 w-4/5 rounded-lg" />
            </div>

            {/* Paragraph - INCREASED for text-lg */}
            <Skeleton className="h-28 w-full rounded-lg mb-8" />

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl">
                  <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Skeleton className="h-5 w-32 rounded mb-2" />
                    <Skeleton className="h-4 w-full rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Skeleton - INCREASED font sizes
export function ServicesSkeleton() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-100/40 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="h-4 w-28 rounded" />
          </div>
          {/* INCREASED for text-3xl sm:text-4xl lg:text-5xl */}
          <div className="space-y-3 mb-6">
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-full rounded-lg mx-auto" />
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-3/4 rounded-lg mx-auto" />
          </div>
          <Skeleton className="h-7 w-2/3 rounded mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md">
              <Skeleton className="w-full h-52" />
              <div className="p-6">
                <Skeleton className="h-7 w-3/4 rounded mb-3" />
                <Skeleton className="h-5 w-full rounded mb-2" />
                <Skeleton className="h-5 w-2/3 rounded mb-4" />
                <Skeleton className="h-5 w-28 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Skeleton - INCREASED font sizes
export function GallerySkeleton() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          {/* INCREASED for text-3xl sm:text-4xl lg:text-5xl */}
          <div className="space-y-3 mb-6">
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-full rounded-lg mx-auto" />
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-3/4 rounded-lg mx-auto" />
          </div>
          <Skeleton className="h-7 w-2/3 rounded mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Skeleton className="h-64 md:col-span-2 md:row-span-2 rounded-2xl" />
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-48 md:h-56 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

// Brands Skeleton - INCREASED font sizes
export function BrandsSkeleton() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B1F3E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
          {/* INCREASED for text-3xl sm:text-4xl lg:text-5xl */}
          <div className="space-y-3 mb-6">
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-full rounded-lg mx-auto" />
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-3/4 rounded-lg mx-auto" />
          </div>
          <Skeleton className="h-7 w-2/3 rounded mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gradient-to-b from-cream to-white rounded-2xl p-6 text-center border border-maroon-100/50">
              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-2xl" />
              <Skeleton className="h-6 w-24 mx-auto rounded mb-1" />
              <Skeleton className="h-4 w-28 mx-auto rounded" />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 rounded-2xl p-1 overflow-hidden">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex whitespace-nowrap py-4">
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reviews Skeleton - INCREASED font sizes
export function ReviewsSkeleton() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 w-48 h-48 bg-maroon-100/50 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-maroon-100/50 rounded-full opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="h-4 w-28 rounded" />
          </div>
          {/* INCREASED for text-3xl sm:text-4xl lg:text-5xl */}
          <div className="space-y-3 mb-6">
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-full rounded-lg mx-auto" />
            <Skeleton className="h-10 sm:h-12 lg:h-16 w-3/4 rounded-lg mx-auto" />
          </div>
          <Skeleton className="h-7 w-2/3 rounded mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm relative">
              <div className="absolute -top-3 left-8">
                <Skeleton className="w-10 h-10 rounded-xl" />
              </div>
              <div className="flex gap-1 mt-4 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Skeleton key={j} className="w-4 h-4 rounded-full" />
                ))}
              </div>
              <Skeleton className="h-24 w-full rounded mb-6" />
              <div className="flex items-center gap-3 pt-4 border-t border-maroon-100/50">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="flex-1 min-w-0">
                  <Skeleton className="h-5 w-36 rounded mb-1" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-maroon-800 to-maroon-900 rounded-3xl p-10 sm:p-14 shadow-2xl shadow-maroon-900/20 max-w-2xl w-full">
            <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
            {/* INCREASED for text-2xl sm:text-3xl */}
            <Skeleton className="h-9 sm:h-11 w-72 rounded-lg mb-3" />
            <Skeleton className="h-6 sm:h-7 w-full max-w-md rounded mb-8" />
            <Skeleton className="h-14 w-48 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Skeleton - INCREASED font sizes
export function ContactSkeleton() {
  return (
    <section className="py-24 bg-maroon-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/* INCREASED for text-3xl sm:text-4xl */}
          <Skeleton className="h-10 sm:h-12 w-96 rounded-lg mb-4 bg-maroon-800" />
          <Skeleton className="h-7 w-full max-w-2xl rounded bg-maroon-800" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-maroon-800 p-8 rounded-2xl">
              <Skeleton className="w-12 h-12 rounded-xl mb-4 bg-maroon-700" />
              <Skeleton className="h-7 w-32 rounded mb-2 bg-maroon-700" />
              <Skeleton className="h-5 w-full rounded mb-1 bg-maroon-700" />
              <Skeleton className="h-5 w-24 rounded bg-maroon-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Skeleton
export function FooterSkeleton() {
  return (
    <footer className="bg-maroon-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z" fill="#FFF9F1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <div>
                <Skeleton className="h-5 w-40 rounded mb-1 bg-maroon-900" />
                <Skeleton className="h-3 w-36 rounded bg-maroon-900" />
              </div>
            </div>
            <Skeleton className="h-16 w-full rounded mb-6 bg-maroon-900" />
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-xl bg-maroon-900" />
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-28 rounded mb-6 bg-maroon-900" />
            <div className="space-y-3">
              {[...Array(7)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-32 rounded bg-maroon-900" />
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-28 rounded mb-6 bg-maroon-900" />
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-32 rounded bg-maroon-900" />
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-28 rounded mb-6 bg-maroon-900" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="w-10 h-10 rounded-xl flex-shrink-0 bg-maroon-900" />
                  <div className="flex-1 min-w-0">
                    <Skeleton className="h-4 w-full rounded mb-1 bg-maroon-900" />
                    <Skeleton className="h-3 w-20 rounded bg-maroon-900" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Skeleton className="h-4 w-96 rounded bg-maroon-900" />
            <Skeleton className="h-4 w-48 rounded bg-maroon-900" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-40">
        <Skeleton className="w-12 h-12 rounded-full bg-maroon-900" />
      </div>
    </footer>
  );
}
