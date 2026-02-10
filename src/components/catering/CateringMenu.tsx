import Image from "next/image";

// Define the menu items based on the design
const menuItems = [
    {
        title: "Wedding Catering Services in Surrey",
        description: "Make your special day unforgettable with elegant wedding catering in Surrey, featuring traditional Indian sweets, savoury dishes, and customized full-course vegetarian menus for your ceremony and reception.",
        image: "/images/catring/custom-menus/Wedding Catering Services in Surrey.png",
        titlePosition: "top"
    },
    {
        title: "Small Event Catering in Surrey",
        description: "Hosting a house party, anniversary, or intimate gathering? Our small event catering services in Surrey are designed for flexibility, freshness, and flavour—ideal for events of any size.",
        image: "/images/catring/custom-menus/Small Event Catering in Surrey.png",
        titlePosition: "top"
    },
    {
        title: "Birthday Catering Services in Surrey",
        description: "Planning a birthday party? Our birthday catering services in Surrey are perfect for kids' parties, milestone birthdays, and family celebrations—delicious food without the stress of cooking.",
        image: "/images/catring/custom-menus/Birthday Catering Services in Surrey.png",
        titlePosition: "bottom"
    },
    {
        title: "Corporate & Office Catering",
        description: "Professional catering for meetings, staff lunches, and business events, delivered on time with consistent quality.",
        image: "/images/catring/custom-menus/Corporate & Office Catering.png",
        titlePosition: "bottom"
    }
];

export default function CateringMenu() {
    return (
        <section className="relative bg-white py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Heading */}
                <h2 className="text-center text-[#FF9900] font-bold text-[28px] md:text-[36px] lg:text-[42px] mb-12 md:mb-16">
                    We proudly offer customized menus for all occasions:
                </h2>

                {/* Row 1: Wedding + Small Event */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Wedding Card */}
                    <div className="bg-[#F5E6D3] rounded-t-[30px] p-6 md:p-8">
                        <h3 className="font-bold text-[18px] md:text-[20px] !text-black mb-4 leading-tight lg:ml-[20%] lg:-mr-[100px]">
                            {menuItems[0].title}
                        </h3>
                        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                            <Image
                                src={menuItems[0].image}
                                alt={menuItems[0].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Wedding Description */}
                    <div className="flex items-center">
                        <p className="text-[14px] md:text-[15px] text-black/80 leading-relaxed">
                            {menuItems[0].description}
                        </p>
                    </div>

                    {/* Small Event Card */}
                    <div className="bg-[#F5E6D3] rounded-t-[30px] p-6 md:p-8">
                        <h3 className="font-bold text-[18px] md:text-[20px] !text-black mb-4 leading-tight lg:ml-[20%] lg:-mr-[100px]">
                            {menuItems[1].title}
                        </h3>
                        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                            <Image
                                src={menuItems[1].image}
                                alt={menuItems[1].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Small Event Description */}
                    <div className="flex items-center">
                        <p className="text-[14px] md:text-[15px] text-black/80 leading-relaxed">
                            {menuItems[1].description}
                        </p>
                    </div>
                </div>

                {/* Row 2: Birthday + Corporate */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 lg:mt-0">
                    {/* Birthday Card */}
                    <div className="bg-[#F5E6D3] rounded-b-[30px] p-6 md:p-8">
                        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4">
                            <Image
                                src={menuItems[2].image}
                                alt={menuItems[2].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-bold text-[18px] md:text-[20px] !text-black leading-tight lg:ml-[20%] lg:-mr-[100px]">
                            {menuItems[2].title}
                        </h3>
                    </div>

                    {/* Birthday Description */}
                    <div className="flex items-center">
                        <p className="text-[14px] md:text-[15px] text-black/80 leading-relaxed">
                            {menuItems[2].description}
                        </p>
                    </div>

                    {/* Corporate Card */}
                    <div className="bg-[#F5E6D3] rounded-b-[30px] p-6 md:p-8">
                        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4">
                            <Image
                                src={menuItems[3].image}
                                alt={menuItems[3].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-bold text-[18px] md:text-[20px] !text-black leading-tight lg:ml-[20%] lg:-mr-[100px]">
                            {menuItems[3].title}
                        </h3>
                    </div>

                    {/* Corporate Description */}
                    <div className="flex items-center">
                        <p className="text-[14px] md:text-[15px] text-black/80 leading-relaxed">
                            {menuItems[3].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
