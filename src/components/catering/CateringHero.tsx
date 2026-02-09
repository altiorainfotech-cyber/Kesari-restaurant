import Image from "next/image";

export default function CateringHero() {
    return (
        <section className="relative bg-[#D9D9D9] overflow-hidden">
            {/* Left vegetable image */}
            <div className="hidden md:block absolute bottom-0 left-0 w-[200px] lg:w-[280px] animate-[fadeInLeft_1s_ease-out_forwards]">
                <Image
                    src="/images/catring/left-side-image.png"
                    alt=""
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Right vegetable image */}
            <div className="hidden md:block absolute bottom-0 right-0 w-[280px] lg:w-[380px] animate-[fadeInRight_1s_ease-out_0.3s_forwards] opacity-0">
                <Image
                    src="/images/catring/rightside-image.png"
                    alt=""
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
                <div className="relative z-10 w-full lg:w-[60%]">
                    <h1 className="!font-oswald text-[36px] md:text-[42px] lg:text-[48px] !font-normal leading-tight mb-6">
                        <span className="!text-[#FF9900]">Authentic</span>{" "}
                        <span className="!text-black">Indian Catering Services in Surrey, BC</span>
                    </h1>
                    <p className="!font-inter text-[14px] md:text-[16px] !font-normal !text-black/80 leading-relaxed">
                        At Kesari Sweets, we provide professional, flavour-rich catering for
                        weddings, birthdays, small events, and corporate gatherings. Whether
                        you&apos;re searching for catering near me in Surrey or planning a special
                        celebration, our team delivers food and service your guests will remember.
                    </p>
                </div>
            </div>
        </section>
    );
}
