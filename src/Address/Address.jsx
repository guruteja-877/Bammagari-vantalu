import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen w-full bg-[#120E0B] px-5 pb-20 pt-10 sm:px-8 lg:px-20">

      {/* =========================
          PAGE TITLE
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4 pt-10">

        <div className="flex w-full items-center justify-center gap-6">

          <div className="h-px w-20 bg-[#E5A93C]" />

          <p className="whitespace-nowrap font-instrumentSerif text-[40px] text-[#E5A93C]">
            Delivery Address
          </p>

          <div className="h-px w-20 bg-[#E5A93C]" />

        </div>

        <p className="font-cormorantGaramond text-lg text-[#C2B9B3]">
          Where should we deliver your Bammagari Ruchulu?
        </p>

      </section>


      {/* =========================
          SAVED + NEW ADDRESS
      ========================== */}

      <section className="mx-auto mt-16 grid w-full max-w-[1400px] grid-cols-1 items-start gap-8 lg:grid-cols-2">


        {/* =========================
            LEFT - SAVED ADDRESSES
        ========================== */}

        <div className="flex w-full flex-col gap-6">

          <h2 className="font-cormorantGaramond text-[22px] font-bold text-[#E5A93C]">
            Saved Addresses
          </h2>


          {/* HOME ADDRESS */}

          <div className="flex w-full flex-col gap-4 rounded-lg border-[1.5px] border-[#E5A93C] bg-[#1F1814] p-6">

            <div className="flex w-full items-center justify-between">

              <div className="flex items-center gap-2">

                <div className="flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-[#E5A93C]">

                  <div className="h-2 w-2 rounded-full bg-[#E5A93C]" />

                </div>

                <span className="text-[#E5A93C]">
                  🏠
                </span>

                <p className="font-dMSans text-[13px] font-bold text-[#E5A93C]">
                  HOME
                </p>

              </div>


              <div className="rounded bg-[rgba(229,169,60,0.20)] px-2 py-1">

                <p className="font-dMSans text-[11px] font-bold text-[#E5A93C]">
                  SELECTED
                </p>

              </div>

            </div>


            <div className="flex flex-col gap-1.5">

              <p className="font-dMSans text-base font-bold text-[#F5EFEB]">
                Shravan Kumar
              </p>

              <p className="font-dMSans text-[15px] leading-[1.4em] text-[#C2B9B3]">
                Flat 402, Sai Teja Residency, Gachibowli, Hyderabad
              </p>

              <p className="font-dMSans text-[15px] text-[#C2B9B3]">
                Telangana — 500032
              </p>

              <p className="font-dMSans text-sm font-medium text-[#E5A93C]">
                📱 +91 98765 43210
              </p>

            </div>


            <div className="flex items-center gap-4">

              <button
                type="button"
                className="font-dMSans text-[13px] font-semibold text-[#E5A93C]"
              >
                EDIT
              </button>

              <div className="h-3 w-px bg-[#332722]" />

              <button
                type="button"
                className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]"
              >
                DELETE
              </button>

            </div>

          </div>


          {/* WORK ADDRESS */}

          <div className="flex w-full flex-col gap-4 rounded-lg border border-[#332722] bg-[#1F1814] p-6">

            <div className="flex items-center gap-2">

              <div className="h-4 w-4 rounded-full border-[1.5px] border-[#C2B9B3]" />

              <span className="text-[#C2B9B3]">
                🏢
              </span>

              <p className="font-dMSans text-[13px] font-bold text-[#C2B9B3]">
                WORK
              </p>

            </div>


            <div className="flex flex-col gap-1.5">

              <p className="font-dMSans text-base font-bold text-[#F5EFEB]">
                Kondinyasa Technologies
              </p>

              <p className="font-dMSans text-[15px] leading-[1.4em] text-[#C2B9B3]">
                3rd Floor, Phase 2, HITEC City, Hyderabad
              </p>

              <p className="font-dMSans text-[15px] text-[#C2B9B3]">
                Telangana — 500081
              </p>

            </div>


            <div className="flex items-center gap-4">

              <button
                type="button"
                className="font-dMSans text-[13px] font-semibold text-[#E5A93C]"
              >
                EDIT
              </button>

              <div className="h-3 w-px bg-[#332722]" />

              <button
                type="button"
                className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]"
              >
                DELETE
              </button>

            </div>

          </div>


          {/* ADD NEW ADDRESS SHORTCUT */}

          <button
            type="button"
            className="flex w-fit items-center gap-2 py-2 text-[#E5A93C]"
          >

            <span className="text-xl">
              +
            </span>

            <p className="font-dMSans text-[15px] font-bold">
              ADD NEW ADDRESS
            </p>

          </button>

        </div>


        {/* =========================
            RIGHT - ADD NEW ADDRESS
        ========================== */}

        <div className="flex w-full flex-col gap-5 rounded-lg border border-[#332722] bg-[#1F1814] p-6 sm:p-8">

          <h2 className="font-cormorantGaramond text-[22px] font-bold text-[#E5A93C]">
            Add New Address
          </h2>


          {/* CURRENT LOCATION */}

          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-[#E5A93C] bg-[rgba(229,169,60,0.04)] py-3.5 transition-all duration-300 hover:bg-[rgba(229,169,60,0.10)]"
          >

            <p className="font-dMSans text-sm font-bold text-[#E5A93C]">
              📍 USE CURRENT LOCATION
            </p>

          </button>


          {/* FULL NAME */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="e.g. Shravan Kumar"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>


          {/* MOBILE */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="e.g. 9876543210"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>


          {/* HOUSE / FLAT */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              House / Flat / Building
            </label>

            <input
              type="text"
              placeholder="Flat No, Wing, Building Name"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>


          {/* STREET */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Street / Area
            </label>

            <input
              type="text"
              placeholder="Street Name, Locality, Area"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>


          {/* LANDMARK */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Landmark
            </label>

            <input
              type="text"
              placeholder="e.g. Near Gachibowli Stadium"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>


          {/* CITY */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              City
            </label>

            <input
              type="text"
              defaultValue="Hyderabad"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none focus:border-[#E5A93C]"
            />

          </div>


          {/* STATE */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              State
            </label>

            <input
              type="text"
              defaultValue="Telangana"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none focus:border-[#E5A93C]"
            />

          </div>


          {/* PIN */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              PIN Code
            </label>

            <input
              type="text"
              defaultValue="500032"
              className="h-12 w-full rounded-md border border-[#332722] bg-[#181310] px-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none focus:border-[#E5A93C]"
            />

          </div>


          {/* DELIVERY INSTRUCTIONS */}

          <div className="flex flex-col gap-2">

            <label className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Delivery Instructions
            </label>

            <textarea
              placeholder="Add instructions for the delivery partner"
              className="h-24 w-full resize-none rounded-md border border-[#332722] bg-[#181310] p-4 font-dMSans text-[15px] text-[#F5EFEB] outline-none placeholder:text-[#6F6862] focus:border-[#E5A93C]"
            />

          </div>

                    {/* =========================
              SAVE ADDRESS AS
          ========================== */}

          <div className="flex flex-col gap-2.5">

            <p className="font-dMSans text-[13px] font-semibold text-[#C2B9B3]">
              Save Address As
            </p>

            <div className="flex flex-wrap gap-3">

              <button
                type="button"
                className="rounded-full bg-[#E5A93C] px-6 py-2.5 font-dMSans text-[13px] font-bold text-[#120E0B]"
              >
                HOME
              </button>

              <button
                type="button"
                className="rounded-full border border-[#332722] px-6 py-2.5 font-dMSans text-[13px] font-bold text-[#F5EFEB] transition-all duration-300 hover:border-[#E5A93C] hover:text-[#E5A93C]"
              >
                WORK
              </button>

              <button
                type="button"
                className="rounded-full border border-[#332722] px-6 py-2.5 font-dMSans text-[13px] font-bold text-[#F5EFEB] transition-all duration-300 hover:border-[#E5A93C] hover:text-[#E5A93C]"
              >
                OTHER
              </button>

            </div>

          </div>


          {/* SAVE & CONTINUE */}

<button
  type="button"
  onClick={() => navigate("/checkout")}
  className="w-full rounded-md bg-[#E5A93C] py-4 font-dMSans text-base font-bold text-[#120E0B] transition-all duration-300 hover:bg-[#F0BB55]"
>
  SAVE & CONTINUE →
</button>

        </div>

      </section>


      {/* =====================================================
          ORDER SUMMARY
          SAME WIDTH AS ADD NEW ADDRESS
      ====================================================== */}

      <section className="mx-auto mt-10 flex w-full max-w-[1400px] justify-end">

        <div className="w-full lg:w-[calc(50%-16px)]">

          <div className="w-full rounded-lg border border-[rgba(229,169,60,0.20)] bg-[#1F1814] p-6 sm:p-8">

            {/* HEADER */}

            <div className="mb-6 flex items-center justify-between">

              <p className="font-cormorantGaramond text-[22px] font-bold text-[#E5A93C]">
                ORDER SUMMARY
              </p>

              <p className="font-dMSans text-sm text-[#C2B9B3]">
                3 Items
              </p>

            </div>


            {/* ITEMS */}

            <div className="flex flex-col gap-4">

              <div className="flex items-center justify-between">

                <p className="font-dMSans text-sm text-[#C2B9B3]">
                  Items (3 Items)
                </p>

                <p className="font-dMSans text-sm text-[#F5EFEB]">
                  ₹1,450
                </p>

              </div>


              {/* DELIVERY FEE */}

              <div className="flex items-center justify-between">

                <p className="font-dMSans text-sm text-[#C2B9B3]">
                  Delivery Partner Fee
                </p>

                <p className="font-dMSans text-sm text-[#F5EFEB]">
                  ₹49
                </p>

              </div>


              {/* DIVIDER */}

              <div className="h-px w-full bg-[#332722]" />


              {/* GRAND TOTAL */}

              <div className="flex items-center justify-between">

                <p className="font-dMSans text-base font-bold text-[#F5EFEB]">
                  Grand Total
                </p>

                <p className="font-dMSans text-2xl font-bold text-[#E5A93C]">
                  ₹1,499
                </p>

              </div>


              {/* PAYMENT BUTTON */}

              <button
                type="button"
                className="mt-3 w-full rounded-md bg-[#E5A93C] py-4 font-dMSans text-base font-bold text-[#120E0B] transition-all duration-300 hover:bg-[#F0BB55]"
              >
                CONTINUE TO PAYMENT →
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}