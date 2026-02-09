import Image from "next/image";

export default function CateringGallery() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24"
            style={{ backgroundImage: "url('/images/catring/gallery/gallery-background.png')" }}
        >
            {/* Orange overlay */}
            <div className="absolute inset-0 bg-[#FF9900]/85" />

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

                {/* Gallery - 4 columns with equal spacing */}
                <div className="hidden md:flex gap-4">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/frist-rowimage-1 .png" alt="Roti and Naan" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/first-row-image-2.png" alt="Grilled Platter" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/second-row-image1.png" alt="Chaat" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/second-row-image-2.png" alt="Dal and Rice" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="flex gap-4">
                            <div className="rounded-2xl overflow-hidden flex-1">
                                <Image src="/images/catring/gallery/second-row-image-3.png" alt="Sweet Rolls" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                            </div>
                            <div className="rounded-2xl overflow-hidden flex-1">
                                <Image src="/images/catring/gallery/second-roe-image-4.png" alt="Colorful Drinks" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/third-row-image-1.png" alt="Chaat Snacks" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/third-row-image-2.png" alt="Biryani" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/third-row-image-3.png" alt="Chaat Mix" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4 flex-1">
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/forth-row-image-1.png" alt="Paneer Dishes" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/images/catring/gallery/forth-rowimage-2.png" alt="Jalebi and Golgappa" width={0} height={0} sizes="100vw" className="w-auto h-auto max-w-full" />
                        </div>
                    </div>
                </div>

                {/* Mobile Grid - simple 2 columns */}
                <div className="grid grid-cols-2 gap-3 md:hidden">
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
                        <div key={i} className="rounded-xl overflow-hidden">
                            <Image src={src} alt="Gallery" width={0} height={0} sizes="100vw" className="w-auto h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
