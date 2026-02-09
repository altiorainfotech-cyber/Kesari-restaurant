import Image from "next/image";

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
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side */}
                    <div className="lg:w-1/3">
                        <div className="mb-8">
                            <p className="text-[20px] mb-0">Why Choose <span className="text-[#FF9900] font-bold text-[36px] md:text-[48px]">KESARI SWEETS</span></p>
                            <p className="text-[18px]">for Catering Near You?</p>
                        </div>
                        <button className="bg-[#FF9900] text-white px-6 py-2.5 rounded-full font-medium text-[15px] hover:bg-[#e68a00] transition">
                            Explore Catering Menu
                        </button>
                    </div>

                    {/* Right Side - Two Columns */}
                    <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 md:gap-12">
                        {/* Left Column */}
                        <div className="flex-1 space-y-6">
                            {leftFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image
                                        src="/images/catring/icon-image.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                    <span className="text-[17px] font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 space-y-6">
                            {rightFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image
                                        src="/images/catring/icon-image.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                    <span className="text-[17px] font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
