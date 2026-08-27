// export default function Menuhero() { return ( <button className="cursor-pointer text-nowrap flex pt-14 pr-20 pb-10 pl-20 flex-col justify-center items-center gap-4 min-w-screen min-h-screen absolute left-0 top-[70px]"> <div className="flex items-center gap-3 w-fit"> <div className="flex items-center gap-1 w-fit"> <div className="bg-[#D4A359] w-4 h-px"></div> <div className="rounded-sm bg-[#D4A359] w-1 h-1"></div> <div className="bg-[#D4A359] w-4 h-px"></div> </div> <p className="text-[#D4A359] font-instrumentSerif text-lg w-24 text-center"> OUR MENU </p> <div className="flex items-center gap-1 w-fit"> <div className="bg-[#D4A359] w-4 h-px"></div> <div className="rounded-sm bg-[#D4A359] w-1 h-1"></div> <div className="bg-[#D4A359] w-4 h-px"></div> </div> </div> <p className="text-[#A8978F] font-dMSans text-base leading-[1.6em] w-[680px] text-center"> Authentic Andhra &amp; Telangana flavours, prepared with the warmth of a traditional home kitchen. </p> </button> ); }


export default function Menuhero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-5 pt-24 pb-10 sm:px-8 md:px-12 lg:px-20">
      <div className="flex items-center gap-3">
        {/* Left Decoration */}
        <div className="flex items-center gap-1">
          <div className="h-px w-4 bg-[#D4A359]"></div>
          <div className="h-1 w-1 rounded-sm bg-[#D4A359]"></div>
          <div className="h-px w-4 bg-[#D4A359]"></div>
        </div>

        {/* Title */}
        <p className="font-instrumentSerif text-lg text-[#D4A359]">
          OUR MENU
        </p>

        {/* Right Decoration */}
        <div className="flex items-center gap-1">
          <div className="h-px w-4 bg-[#D4A359]"></div>
          <div className="h-1 w-1 rounded-sm bg-[#D4A359]"></div>
          <div className="h-px w-4 bg-[#D4A359]"></div>
        </div>
      </div>

      <p className="max-w-[680px] text-center font-dMSans text-base leading-[1.6] text-[#A8978F]">
        Authentic Andhra &amp; Telangana flavours, prepared with the warmth of a
        traditional home kitchen.
      </p>
    </section>
  );
}