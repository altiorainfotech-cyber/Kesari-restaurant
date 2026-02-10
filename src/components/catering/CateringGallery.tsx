import Image from "next/image";

export default function CateringGallery() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24"
            style={{ backgroundImage: "url('/images/catring/gallery/gallery-background.png')" }}
        >
            {/* Orange overlay */}
            {/* <div className="absolute inset-0 bg-[#FF9900]/85" /> */}

            <div className="mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full lg:w-[77%]">
                {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="!font-oswald text-[36px] md:text-[42px] lg:text-[48px] !font-normal !text-black mb-3">
                        Our Gallery
                    </h2>
                    <p className="!font-inter text-[14px] md:text-[16px] !font-normal !text-black/80">
                        A glimpse into our delicious creations and memorable events
                    </p>
                </div>

                {/* Gallery - 4 columns responsive (287:444:145:287 ratio) */}
                <div className="hidden md:flex gap-2">
                    {/* Column 1 - flex 287 */}
                    <div className="flex flex-col gap-2" style={{ flex: '287' }}>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '287/440' }}>
                            <Image src="/images/catring/gallery/frist-rowimage-1 .png" alt="Roti and Naan" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '287/202' }}>
                            <Image src="/images/catring/gallery/first-row-image-2.png" alt="Yellow Sweets" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Column 2 - flex 444 */}
                    <div className="flex flex-col gap-2" style={{ flex: '444' }}>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '444/231' }}>
                            <Image src="/images/catring/gallery/second-row-image1.png" alt="Grilled Platter" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '444/183' }}>
                            <Image src="/images/catring/gallery/second-row-image-2.png" alt="Dal and Rice" fill className="object-cover" />
                        </div>
                        <div className="flex gap-2">
                            <div className="relative rounded-2xl overflow-hidden" style={{ flex: '261', aspectRatio: '261/202' }}>
                                <Image src="/images/catring/gallery/second-row-image-3.png" alt="Sweet Rolls" fill className="object-cover" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden" style={{ flex: '159', aspectRatio: '159/202' }}>
                                <Image src="/images/catring/gallery/second-roe-image-4.png" alt="Colorful Drinks" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - flex 145 */}
                    <div className="flex flex-col gap-2" style={{ flex: '145' }}>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '145/231' }}>
                            <Image src="/images/catring/gallery/third-row-image-1.png" alt="Chaat Snacks" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '145/184' }}>
                            <Image src="/images/catring/gallery/third-row-image-2.png" alt="Biryani" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '145/202' }}>
                            <Image src="/images/catring/gallery/third-row-image-3.png" alt="Jalebi" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Column 4 - flex 287 */}
                    <div className="flex flex-col gap-2" style={{ flex: '287' }}>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '287/231' }}>
                            <Image src="/images/catring/gallery/forth-row-image-1.png" alt="Paneer Dishes" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: '287/414' }}>
                            <Image src="/images/catring/gallery/forth-rowimage-2.png" alt="Golgappa" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Mobile Grid - simple 2 columns */}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                    {[
                        "/images/catring/gallery/frist-rowimage-1 .png",
                        "/images/catring/gallery/first-row-image-2.png",
                        "/images/catring/gallery/second-row-image1.png",
                        "/images/catring/gallery/second-row-image-2.png",
                        "/images/catring/gallery/second-row-image-3.png",
                        "/images/catring/gallery/second-roe-image-4.png",
                        "/images/catring/gallery/third-row-image-1.png",
                        "/images/catring/gallery/third-row-image-2.png",
                        "/images/catring/gallery/third-row-image-3.png",
                        "/images/catring/gallery/forth-row-image-1.png",
                        "/images/catring/gallery/forth-rowimage-2.png",
                    ].map((src, i) => (
                        <div key={i} className="rounded-xl overflow-hidden relative aspect-square">
                            <Image src={src} alt="Gallery" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
