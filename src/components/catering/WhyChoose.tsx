import Image from "next/image";
import Link from "next/link";

const leftFeatures = [
    "Freshly prepared food",
    "Authentic Indian flavours",
    "Custom catering menus"
];

const rightFeatures = [
    "Reliable, on-time delivery",
    "Competitive pricing",
    "Trusted local caterer in Surrey, BC"
];

export default function WhyChoose() {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div>
                            <p className="text-[18px] md:text-[20px] mb-0">Why Choose <span className="!font-oswald text-[#FF9900] !font-normal text-[32px] md:text-[40px] lg:text-[48px]">KESARI SWEETS</span></p>
                            <div className="w-full sm:w-[65%] flex flex-col items-center sm:items-end mx-auto lg:mx-0">
                                <p className="text-[16px] md:text-[18px] text-center sm:text-right mb-4">for Catering Near You?</p>
                                <Link href="/catering-menu" className="bg-[#FF9900] text-white px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-[#e68a00] transition inline-block">
                                    Explore Catering Menu
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Two Columns */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {leftFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image
                                        src="/images/catring/icon-image.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                                    />
                                    <span className="text-[15px] md:text-[17px] font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {rightFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image
                                        src="/images/catring/icon-image.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                                    />
                                    <span className="text-[15px] md:text-[17px] font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
