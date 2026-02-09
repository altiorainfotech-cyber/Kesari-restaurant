import Image from "next/image";
import cateringMenuData from "@/data/cateringMenuData.json";

export default function CateringMenu() {
    return (
        <section className="relative bg-white">
            {/* Orange splatter background at top */}
            <div className="absolute top-0 left-0 w-full z-0">
                <Image
                    src="/images/Catering-Menu/background-catering.png"
                    alt=""
                    width={1440}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="relative z-10 py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="relative">
                        {/* Menu Sections */}
                        <div className="flex flex-col gap-16 md:gap-24">
                            {cateringMenuData.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="relative">
                                    <div>
                                        {/* Section Title */}
                                        <h2 className="!font-oswald text-[36px] md:text-[42px] lg:text-[48px] !font-normal !text-black mb-8 leading-tight tracking-wide">
                                            {section.title}
                                        </h2>

                                        {/* Content: Image + Categories */}
                                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                            {/* Food Image */}
                                            <div className="w-[240px] lg:w-[280px] flex-shrink-0">
                                                <div className="relative w-full aspect-square">
                                                    {/* Orange ring border */}
                                                    <div className="absolute inset-[-8%] rounded-full border-[2px] border-[#FF9900]" />
                                                    {/* Orbiting orange dot - spins 360 on the ring */}
                                                    <div
                                                        className="absolute inset-[-8%] z-20 animate-[orbitSpin_12s_linear_infinite]"
                                                        style={{ animationDelay: `${sectionIndex * -1.5}s` }}
                                                    >
                                                        <div
                                                            className="absolute w-[16px] h-[16px] rounded-full bg-[#FF9900]"
                                                            style={{
                                                                top: '-8px',
                                                                left: '50%',
                                                                transform: 'translateX(-50%)',
                                                            }}
                                                        />
                                                    </div>
                                                    {/* Circular food image */}
                                                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
                                                        <Image
                                                            src={section.image}
                                                            alt={section.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Categories Grid */}
                                            <div className="flex-1 flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-6">
                                                {section.categories.map((category, catIndex) => {
                                                    const isDuplicate = section.categories.findIndex(c => c.name === category.name) < catIndex;
                                                    return (
                                                    <div key={catIndex} className="min-w-0">
                                                        {/* Category Tab */}
                                                        <div className={`inline-block rounded-full px-5 py-1 mb-4 ${isDuplicate ? "border-transparent" : "border border-black/80"}`}>
                                                            <span className={`!font-inter text-[13px] md:text-[14px] !font-medium ${isDuplicate ? "invisible" : "!text-black"}`}>
                                                                {category.name}
                                                            </span>
                                                        </div>

                                                        {/* Items List */}
                                                        <ul className="space-y-1">
                                                            {category.items.map((item, itemIndex) => (
                                                                <li
                                                                    key={itemIndex}
                                                                    className="!font-inter text-[13px] md:text-[14px] !font-normal !text-black/80 leading-relaxed"
                                                                >
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider line between sections */}
                                    {sectionIndex < cateringMenuData.sections.length - 1 && (
                                        <div className="mt-12 md:mt-16">
                                            <div className="lg:pl-[312px]">
                                                <hr className="border-t border-black/10" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
