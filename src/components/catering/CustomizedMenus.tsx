import Image from "next/image";

const menuCards = [
    {
        title: "Wedding Catering Services in Surrey",
        image: "/images/catring/custom-menus/Wedding Catering Services in Surrey.png",
        description:
            "Make your special day unforgettable with elegant wedding catering in Surrey, featuring traditional Indian sweets, savoury dishes, and customized full-course vegetarian menus for your ceremony and reception.",
    },
    {
        title: "Small Event Catering in Surrey",
        image: "/images/catring/custom-menus/Small Event Catering in Surrey.png",
        description:
            "Hosting a house party, anniversary, or intimate gathering? Our small event catering services in Surrey are designed for flexibility, freshness, and flavour\u2014ideal for events of any size.",
    },
    {
        title: "Birthday Catering Services in Surrey",
        image: "/images/catring/custom-menus/Birthday Catering Services in Surrey.png",
        description:
            "Planning a birthday party? Our birthday catering services in Surrey are perfect for kids\u2019 parties, milestone birthdays, and family celebrations\u2014delicious food without the stress of cooking.",
    },
    {
        title: "Corporate & Office Catering",
        image: "/images/catring/custom-menus/Corporate & Office Catering.png",
        description:
            "Professional catering for meetings, staff lunches, and business events, delivered on time with consistent quality.",
    },
];

export default function CustomizedMenus() {
    return (
        <section className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Title */}
                <h2 className="!font-protest text-[28px] md:text-[36px] lg:text-[42px] !font-normal !text-[#FF9900] text-center mb-12 italic">
                    We proudly offer customized menus for all occasions:
                </h2>

                {/* Cards Grid - constrained width */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-5">
                        {/* Left Column */}
                        <div className="flex flex-col gap-5">
                            {/* Wedding Card - title at top */}
                            <div className="bg-[#FFEBCE] rounded-3xl p-4 md:p-5">
                                <h3 className="!font-oswald text-[16px] md:text-[18px] !font-semibold !text-black mb-3">
                                    {menuCards[0].title}
                                </h3>
                                <div className="flex gap-3">
                                    <div className="w-[130px] md:w-[150px] shrink-0 rounded-2xl overflow-hidden">
                                        <Image
                                            src={menuCards[0].image}
                                            alt={menuCards[0].title}
                                            width={150}
                                            height={120}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="!font-inter text-[11px] md:text-[12px] !font-normal !text-black/80 leading-relaxed">
                                        {menuCards[0].description}
                                    </p>
                                </div>
                            </div>

                            {/* Birthday Card - title at bottom */}
                            <div className="bg-[#FFEBCE] rounded-3xl p-4 md:p-5">
                                <div className="flex gap-3">
                                    <div className="w-[130px] md:w-[150px] shrink-0 rounded-2xl overflow-hidden">
                                        <Image
                                            src={menuCards[2].image}
                                            alt={menuCards[2].title}
                                            width={150}
                                            height={120}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="!font-inter text-[11px] md:text-[12px] !font-normal !text-black/80 leading-relaxed">
                                        {menuCards[2].description}
                                    </p>
                                </div>
                                <h3 className="!font-oswald text-[16px] md:text-[18px] !font-semibold !text-black mt-3">
                                    {menuCards[2].title}
                                </h3>
                            </div>
                        </div>

                        {/* Right Column - offset down */}
                        <div className="flex flex-col gap-5 md:mt-14">
                            {/* Small Event Card - title at top */}
                            <div className="bg-[#FFEBCE] rounded-3xl p-4 md:p-5">
                                <h3 className="!font-oswald text-[16px] md:text-[18px] !font-semibold !text-black mb-3">
                                    {menuCards[1].title}
                                </h3>
                                <div className="flex gap-3">
                                    <div className="w-[130px] md:w-[150px] shrink-0 rounded-2xl overflow-hidden">
                                        <Image
                                            src={menuCards[1].image}
                                            alt={menuCards[1].title}
                                            width={150}
                                            height={120}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="!font-inter text-[11px] md:text-[12px] !font-normal !text-black/80 leading-relaxed">
                                        {menuCards[1].description}
                                    </p>
                                </div>
                            </div>

                            {/* Corporate Card - title at bottom */}
                            <div className="bg-[#FFEBCE] rounded-3xl p-4 md:p-5">
                                <div className="flex gap-3">
                                    <div className="w-[130px] md:w-[150px] shrink-0 rounded-2xl overflow-hidden">
                                        <Image
                                            src={menuCards[3].image}
                                            alt={menuCards[3].title}
                                            width={150}
                                            height={120}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="!font-inter text-[11px] md:text-[12px] !font-normal !text-black/80 leading-relaxed">
                                        {menuCards[3].description}
                                    </p>
                                </div>
                                <h3 className="!font-oswald text-[16px] md:text-[18px] !font-semibold !text-black mt-3 text-center">
                                    {menuCards[3].title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
