export default function Footer() {
  return (
    <div className="flex pt-20 pr-20 pb-10 pl-20 flex-col items-start gap-12 bg-[#130F0C] min-w-screen min-h-screen absolute left-0 top-[3063px]">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-start gap-4 w-[360px]">
          <p className="text-[#D4A359] font-cormorantGaramond text-[28px] font-bold w-fit">
            Bammagari Ruchulu
          </p>
          <p className="text-[#A8978F] font-dMSans text-sm leading-[1.6em] w-full">
            Bringing generations-old Telugu heritage recipes directly to your
            modern tables with love, pure native ghee, and authentic local
            spices.
          </p>
        </div>
        <div className="flex items-start gap-16 w-fit">
          <div className="flex flex-col items-start gap-4 w-fit">
            <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
              Explore
            </p>
            <p className="text-[#A8978F] font-dMSans text-sm w-fit">
              Our Heritage
            </p>
            <p className="text-[#A8978F] font-dMSans text-sm w-fit">
              Bamma Specials
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 w-fit">
            <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
              Contact Us
            </p>
            <p className="text-[#A8978F] font-dMSans text-sm w-fit">
              +91 99887 76655
            </p>
            <p className="text-[#A8978F] font-dMSans text-sm w-fit">
              hello@bammagariruchulu.com
            </p>
            <p className="text-[#A8978F] font-dMSans text-sm w-fit">
              Hyderabad, Telangana
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#332520] w-full h-px"></div>
      <div className="flex justify-between items-center w-full">
        <p className="text-[#A8978F] font-dMSans text-[13px] w-fit">
          © 2026 Bammagari Ruchulu. All rights reserved.
        </p>
        <p className="text-[#A8978F] font-dMSans text-[13px] w-fit">
          Traditional, Organic, Prepared Just Like Home.
        </p>
      </div>
    </div>
  );
}