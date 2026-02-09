export default function Book() {
    return (
        <section className="relative py-16 md:py-20">
            <div 
                className="w-full min-h-[600px]"
                style={{ 
                    backgroundImage: "url('/images/catring/bg-image-book.png')",
                    backgroundPosition: "left",
                    backgroundSize: "cover"
                }}
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h2 className="leading-tight mb-6">
                                <span className="block text-[56px] md:text-[72px] font-bold text-white">BOOK</span>
                                <span className="block text-[40px] md:text-[52px] font-bold text-black">THE BEST CATERING</span>
                                <span className="block text-[40px] md:text-[52px] font-bold text-black mb-2">SERVICES</span>
                                <span className="text-[22px] font-normal text-black">in Surrey, BC Today</span>
                            </h2>
                            <p className="text-black text-[18px] mb-2">
                                <span className="font-bold">Call us today</span> to discuss your catering needs
                            </p>
                            <p className="text-black text-[18px]">
                                <span className="font-bold">Request a custom quote</span> for weddings,<br />birthdays, or small events
                            </p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:w-1/2 bg-[#F5E6D3] rounded-3xl p-8 md:p-10">
                            <h3 className="text-center text-[22px] md:text-[24px] font-bold mb-8">
                                Catering Request and Enquiry Form
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Name</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Date of Event*</label>
                                        <input type="text" placeholder="dd/mm/yy" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Phone number</label>
                                        <input type="tel" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Number of guests*</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Email*</label>
                                        <input type="email" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Venue (Address)</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Event type*</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[15px] font-semibold mb-2">Comment</label>
                                        <input type="text" placeholder="Your Answer" className="w-full border-b-2 border-black bg-transparent pb-1 outline-none" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 pt-4">
                                    <button type="button" className="bg-[#FF9900] text-black px-8 py-2.5 rounded-full font-semibold hover:bg-[#e68a00] transition">
                                        Clear Form
                                    </button>
                                    <button type="submit" className="bg-[#FF9900] text-black px-8 py-2.5 rounded-full font-semibold hover:bg-[#e68a00] transition">
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
