// export default function Searchbarsection() { return ( <div className="flex pt-0 pr-20 pb-7 pl-20 flex-col items-center min-w-screen min-h-screen absolute left-0 top-[257px]"> <div className="flex max-w-[800px] py-0 px-4 items-center gap-3 rounded-[28px] border border-[#332520] bg-[#1A1411] w-full h-14"> <div className="flex flex-col justify-center items-center w-5 h-5 overflow-hidden"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-5 h-5 overflow-hidden relative " > <path d="M17.5001 17.5001L13.8835 13.8835M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#D4A359" strokeWidth="2" strokeLinecap="round" /> </svg> </div> <p className="text-[#A8978F] font-dMSans text-[15px] w-full"> Search for biryani, meals, pachadi, curry... </p> </div> </div> ); }


export default function Searchbarsection() {
  return (
    <section className="mx-auto w-full max-w-[900px] px-5 pb-8 sm:px-8 md:px-12 lg:px-20">
      <div className="flex h-14 w-full items-center gap-3 rounded-[28px] border border-[#332520] bg-[#1A1411] px-4">
        {/* Search Icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0"
        >
          <path
            d="M17.5001 17.5001L13.8835 13.8835M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="#D4A359"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for biryani, meals, pachadi, curry..."
          className="w-full bg-transparent font-dMSans text-[15px] text-[#F5ECE3] placeholder:text-[#A8978F] outline-none"
        />
      </div>
    </section>
  );
}