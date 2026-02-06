import Image from "next/image";

export default function OurCulinaryStory() {
  return (
    <section className="relative py-16 bg-white">
      {/* Right Decorative Image - Hidden on mobile for cleaner layout */}
      <div className="hidden lg:block absolute right-[-8%] top-[-80px] w-[450px] pointer-events-none z-10">
        <Image
          src="/images/home-page/herosection/Group58.png"
          alt="Decorative chilies"
          width={450}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto text-center bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-8 lg:p-0 rounded-[40px] lg:rounded-none shadow-2xl shadow-black/10 lg:shadow-none border border-white lg:border-none mx-2 sm:mx-4 lg:mx-auto">
          <h2 className="font-oswald text-[36px] md:text-[48px] font-normal text-title mb-6 leading-tight">
            Our Culinary Story
          </h2>
          <p className="font-inter text-base md:text-lg text-foreground leading-relaxed">
            <span className="font-semibold">Kesari</span> brings you the finest Indian confectionery and authentic flavours, proudly serving guests looking for best Indian restaurant in White Rock, Surrey BC. Widely known for offering some of the best Indian food in South Surrey, we blend traditional recipes with premium ingredients to create a truly memorable dining experience.
          </p>
        </div>
      </div>
    </section>
  );
}
