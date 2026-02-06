import Image from "next/image";
import { Header, Hero, Footer } from "@/components/layout";
import { OurCulinaryStory, FromOurKitchen, Menu } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        {/* Sections with Left Decorative Image */}
        <div className="relative">
          {/* Left Decorative Image - Spans across sections */}
          <div className="absolute left-0 top-[-161px] w-[200px] pointer-events-none z-20">
            <Image
              src="/images/home-page/herosection/leftsideimage.png"
              alt="Decorative spices"
              width={200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          <OurCulinaryStory />
          <FromOurKitchen />
          <Menu />
        </div>
      </main>
      <Footer />
    </div>
  );
}
