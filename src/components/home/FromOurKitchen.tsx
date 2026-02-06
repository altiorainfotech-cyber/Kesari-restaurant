import Image from "next/image";

export default function FromOurKitchen() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 lg:gap-24">

          {/* Column 3: Title, Description and Laccha Parantha - AT THE TOP on mobile */}
          <div className="w-full lg:w-auto flex flex-col items-center text-center lg:text-left pt-6 order-first lg:order-last">
            <h2 className="!font-oswald text-[36px] md:text-[45px] !font-normal text-title leading-[1.1] mb-6 max-w-md">
              From Our Kitchen&apos;s Best
            </h2>
            <p className="font-inter text-base md:text-lg !text-black leading-relaxed mb-8 max-w-sm">
              Our menu is a celebration of signature recipes designed to surprise and delight. From bold flavors to delicate finishes, each plate is prepared with care to give you a taste that&apos;s truly special.
            </p>

            {/* Laccha Parantha - Shown below description on mobile, but absolute on desktop */}
            <div className="flex flex-col items-center w-full relative group mb-12 lg:mb-0">
              <div className="relative w-[280px] h-[210px] md:w-[360px] md:h-[260px]">
                <Image
                  src="/images/home-page/herosection/Laccha-Parantha.png"
                  alt="Laccha Parantha"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="absolute bottom-0 right-0 lg:bottom-[20px] lg:right-[-60px] !font-oswald text-[22px] md:text-[24px] !font-normal !text-black z-10 transition-transform duration-500 group-hover:translate-x-1">
                  Laccha Parantha
                </h3>
              </div>
            </div>
          </div>

          {/* Left & Middle Column Group - AFTER title section on mobile */}
          <div className="flex flex-col md:flex-row gap-12 items-center order-last lg:order-first">

            {/* Column 1: Biryani and Gobi */}
            <div className="relative group">
              {/* Desktop Absolute Titles */}
              <h3 className="hidden lg:block absolute top-[46px] left-[-70px] !font-oswald text-[24px] !font-normal !text-black whitespace-nowrap z-20">
                Chicken Biryani
              </h3>

              <div className="bg-[#FFEBCE] rounded-[50px] md:rounded-[60px] p-6 md:p-8 w-[280px] md:w-[289px] flex flex-col gap-10 items-center shadow-sm">
                {/* Mobile Title */}
                <h3 className="lg:hidden !font-oswald text-[20px] !font-normal !text-black mb-2">Chicken Biryani</h3>

                {/* Biryani */}
                <div className="relative w-full aspect-[4/3] transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/home-page/herosection/Chicken-Biryani.png"
                    alt="Chicken Biryani"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Gobi */}
                <div className="relative w-full aspect-[4/3] transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/home-page/herosection/Gobi-Manchurian.png"
                    alt="Gobi Manchurian"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Mobile Title */}
                <h3 className="lg:hidden !font-oswald text-[20px] !font-normal !text-black mt-2">Gobi Manchurian</h3>
              </div>

              {/* Desktop Absolute Titles */}
              <h3 className="hidden lg:block absolute bottom-[65px] left-[-70px] !font-oswald text-[24px] !font-normal !text-black whitespace-nowrap z-20">
                Gobi Manchurian
              </h3>
            </div>

            {/* Column 2: Pav Bhaji */}
            <div className="bg-[#FFEBCE] rounded-[50px] md:rounded-[60px] p-8 w-[280px] md:w-[289px] md:h-[360px] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                {/* Mobile Title */}
                <h3 className="lg:hidden !font-oswald text-[20px] !font-normal !text-black mb-4">Pav Bhaji</h3>

                <div className="relative w-full aspect-[4/3] mb-4 transform hover:scale-110 transition-transform duration-500">
                  <Image
                    src="/images/home-page/herosection/Pav-Bhaji.png"
                    alt="Pav Bhaji"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="hidden lg:block !font-oswald text-[24px] !font-normal !text-black">
                  Pav Bhaji
                </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
