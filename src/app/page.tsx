import { Header, Hero, Footer } from "@/components/layout";
import { OurCulinaryStory, FromOurKitchen, Menu, LeftDecorativeImage } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        {/* Sections with Left Decorative Image */}
        <div className="relative">
          {/* Left Decorative Image - Spans across sections */}
          <LeftDecorativeImage />

          <OurCulinaryStory />
          <FromOurKitchen />
          <Menu />
        </div>
      </main>
      <Footer />
    </div>
  );
}
