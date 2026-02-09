"use client";

import { SITE_NAME } from "@/constants";

export default function FooterSecondary() {
  return (
    <footer>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footersecond-image.png')" }}
      >
        {/* Come See Us Section */}
        <section className="pt-16 pb-6 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              {/* Left - Come See Us */}
              <div className="w-full lg:w-[23%]">
                <h2 className="!font-oswald text-[40px] md:text-[48px] !text-black lg:!text-white !font-normal mb-6 leading-none tracking-wide">
                  Come See Us
                </h2>

                {/* Social Icons */}
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FF9900] hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#3b5998] hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Center Group - Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 w-full lg:w-[50%]">
                {/* Middle - South Surrey */}
                <div className="flex flex-col gap-2">
                  <h3 className="!font-inter text-[20px] md:text-[22px] font-semibold !text-white border-b border-white/20 pb-1 mb-1 w-fit">
                    South Surrey
                  </h3>
                  <div className="space-y-1 !text-white !font-inter text-[16px] md:text-[18px] !font-normal opacity-90">
                    <p>604-560-9893</p>
                    <p>2-1990 152 Street, Surrey</p>
                    <a
                      href="mailto:kesarisweets152@gmail.com"
                      className="!text-white hover:text-[#FF9900] underline transition-colors block"
                    >
                      kesarisweets152@gmail.com
                    </a>
                  </div>
                </div>

                {/* Right - Langley */}
                <div className="flex flex-col gap-2">
                  <h3 className="!font-inter text-[20px] md:text-[22px] font-semibold !text-white border-b border-white/20 pb-1 mb-1 w-fit">
                    Langley
                  </h3>
                  <div className="space-y-1 !text-white !font-inter text-[16px] md:text-[18px] !font-normal opacity-90">
                    <p>604-514-3700</p>
                    <p>19475 Fraser Highway, Langley</p>
                    <a
                      href="mailto:kesarilangley@gmail.com"
                      className="!text-white hover:text-[#FF9900] underline transition-colors block"
                    >
                      kesarilangley@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="pt-3 pb-6 md:py-6 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs md:text-sm text-white/60 font-inter">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Designed with ❤️ for authentic flavours.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
