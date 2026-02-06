import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Background Image with subtle dimming overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/home-page/herosection/background main.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/5 lg:bg-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-40 md:pt-48 lg:pt-52 h-full min-h-screen flex flex-col items-center lg:items-start">
        {/* Top Section - Heading and Tagline Row */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 text-center lg:text-left">
          {/* Heading */}
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-oswald text-[40px] md:text-[55px] lg:text-[50px] font-bold leading-[1.1] uppercase tracking-wide">
              <span className="text-foreground drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none">Where </span>
              <span className="text-title drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none">Flavor </span>
              <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] lg:drop-shadow-none">Becomes</span>
              <br className="hidden lg:block" />
              <span className="text-foreground drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none"> An Experience</span>
            </h1>
          </div>

          {/* Desktop Tagline */}
          <div className="hidden lg:block max-w-xs text-right pt-8">
            <p className="font-inter text-[18px] font-normal text-foreground leading-relaxed">
              Kesari – Best Indian Restaurant in Surrey for Authentic Sweets & Eats
            </p>
          </div>
        </div>

        {/* Mobile Tagline Box - Visible only on Mobile */}
        <div className="lg:hidden text-center mt-12 px-4 pb-20">
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-[30px] shadow-xl border border-white/50 max-w-md mx-auto">
            <p className="font-inter text-base md:text-lg font-medium text-black leading-relaxed">
              Kesari – Best Indian Restaurant in Surrey for Authentic Sweets & Eats
            </p>
          </div>
        </div>
      </div>

      {/* Explore Menu Button - Centered and Overlapping the bottom edge */}
      <div className="absolute bottom-[-9px] md:bottom-[-13px] left-1/2 -translate-x-1/2 z-[110]">
        <Link
          href="/menu"
          className="inline-flex items-center justify-center px-12 md:px-16 py-3.5 md:py-4 bg-background-dark hover:bg-title text-white font-inter font-bold text-sm md:text-base rounded-full transition-all shadow-2xl hover:shadow-orange-300/50 hover:scale-105 active:scale-95 whitespace-nowrap uppercase tracking-widest"
        >
          Explore Menu
        </Link>
      </div>
    </section>
  );
}
