export default function Book() {
    return (
        <section className="relative py-6 md:py-10 mt-[-30px] md:mt-[-50px]">
            <div
                className="w-full min-h-[400px] md:min-h-[600px] py-6 md:py-10"
                style={{
                    backgroundImage: "url('/images/catring/bg-image-book-new.png')",
                    backgroundPosition: "left",
                    backgroundSize: "cover"
                }}
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                            <h2 className="leading-tight mb-4 md:mb-6">
                                <span className="block text-[36px] sm:text-[48px] md:text-[72px] font-bold text-black">BOOK</span>
                                <span className="block text-[24px] sm:text-[32px] md:text-[52px] font-bold text-black">THE BEST CATERING</span>
                                <span className="block text-[24px] sm:text-[32px] md:text-[52px] font-bold text-black mb-1 md:mb-2">SERVICES</span>
                                <span className="text-[16px] sm:text-[18px] md:text-[22px] font-normal text-black">in Surrey, BC Today</span>
                            </h2>
                            <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] mb-2">
                                <span className="font-bold">Call us today</span> to discuss your catering needs
                            </p>
                            <p className="text-black text-[14px] sm:text-[16px] md:text-[18px]">
                                <span className="font-bold">Request a custom quote</span> for weddings,<br className="hidden sm:block" /> birthdays, or small events
                            </p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full lg:w-1/2 bg-[#FFEBCE] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
                            <h3 className="text-center !font-inter text-[16px] sm:text-[18px] md:text-[20px] !font-semibold !text-black mb-5 md:mb-8">
                                Catering Request and Enquiry Form
                            </h3>
                            <form className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Name</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Date of Event*</label>
                                        <input type="text" placeholder="dd/mm/yy" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Phone number</label>
                                        <input type="tel" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Number of guests*</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Email*</label>
                                        <input type="email" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Venue (Address)</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Event type*</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] md:text-[15px] font-semibold mb-2">Comment</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none text-[14px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-3 md:gap-4 pt-2 md:pt-4">
                                    <button type="button" className="bg-[#FF9900] text-black px-5 md:px-8 py-2 md:py-2.5 rounded-full font-semibold text-[14px] md:text-base hover:bg-[#e68a00] transition">
                                        Clear Form
                                    </button>
                                    <button type="submit" className="bg-[#FF9900] text-black px-5 md:px-8 py-2 md:py-2.5 rounded-full font-semibold text-[14px] md:text-base hover:bg-[#e68a00] transition">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
