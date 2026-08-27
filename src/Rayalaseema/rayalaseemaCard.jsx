import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sigimage from "./Rayalaseemaimages/Sigimage.png";
import Sigimage1 from "./Rayalaseemaimages/Sigimage(1).png";
import Sigimage2 from "./Rayalaseemaimages/Sigimage(2).png";

export default function RayalaseemaCard() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // Change this price depending on which dish you want
  const price = 380;

  const totalPrice = price * quantity;

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      currentQuantity > 1 ? currentQuantity - 1 : 1
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#130F0C]">

      {/* =====================================================
          MAIN PAGE
      ====================================================== */}
      <div className="flex w-full flex-col items-start gap-[60px] px-5 pb-[100px] pt-[60px] sm:px-8 lg:px-[120px]">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}
        <div className="flex w-full flex-wrap items-center gap-2">

          <p className="font-dMSans text-sm text-[#9E9A90]">
            Our Menu
          </p>

          <span className="text-[#9E9A90]">
            →
          </span>

          <p className="font-dMSans text-sm text-[#9E9A90]">
            Rayalaseema Cuisine
          </p>

          <span className="text-[#9E9A90]">
            →
          </span>

          <p className="font-dMSans text-sm font-semibold text-[#D4AF37]">
            Rayalaseema Mutton Curry
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="flex w-full flex-col items-start gap-[60px] lg:flex-row">

          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div className="flex w-full flex-col items-start gap-6">

            {/* HERO IMAGE */}

            <img
              src={Sigimage2}
              alt="Rayalaseema Mutton Curry"
              className="h-[580px] w-full rounded-3xl border border-[#3A3428] object-cover"
            />


            {/* =================================================
                RELATED DISHES
            ================================================== */}
            <div className="flex w-full flex-col gap-4 md:flex-row">

              {/* RELATED DISH 1 */}

              <div className="flex w-full items-center gap-3 rounded-xl border border-[#3A3428] bg-[#1A1917] p-3">

                <img
                  src={Sigimage}
                  className="h-14 w-14 rounded-lg object-cover"
                  alt="Ragi Sangati"
                />

                <div className="flex flex-col gap-0.5">

                  <p className="font-dMSans text-sm font-semibold text-[#E5E3DC]">
                    Ragi Sangati
                  </p>

                  <p className="font-dMSans text-xs text-[#D4AF37]">
                    Perfect Pairing
                  </p>

                </div>

              </div>


              {/* RELATED DISH 2 */}

              <div className="flex w-full items-center gap-3 rounded-xl border border-[#3A3428] bg-[#1A1917] p-3">

                <img
                  src={Sigimage1}
                  className="h-14 w-14 rounded-lg object-cover"
                  alt="Natu Kodi Pulusu"
                />

                <div className="flex flex-col gap-0.5">

                  <p className="font-dMSans text-sm font-semibold text-[#E5E3DC]">
                    Natu Kodi Pulusu
                  </p>

                  <p className="font-dMSans text-xs text-[#D4AF37]">
                    Rustic Classic
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="flex w-full flex-col items-start gap-8">

            {/* =================================================
                TITLE
            ================================================== */}
            <div className="flex w-full flex-col items-start gap-2">

              <p className="font-dMSans text-[13px] font-bold text-[#D4AF37]">
                RAYALASEEMA'S SIGNATURE SPECIAL
              </p>

              <h1 className="w-full font-cormorantGaramond text-5xl font-bold text-[#D4AF37]">
                RAYALASEEMA MUTTON CURRY
              </h1>

            </div>


            {/* =================================================
                RATING + TAGS
            ================================================== */}
            <div className="flex w-full flex-wrap items-center gap-4">

              {/* RATING */}

              <div className="flex items-center gap-2 border-r border-[#3A3428] pr-4">

                <span className="text-[#D4AF37]">
                  ★
                </span>

                <p className="font-dMSans text-[15px] font-bold text-[#E5E3DC]">
                  4.8
                </p>

                <p className="font-dMSans text-[13px] text-[#9E9A90]">
                  (180+ Reviews)
                </p>

              </div>


              {/* SPICY */}

              <div className="flex items-center gap-1.5 rounded-[20px] border border-[#D9411E] bg-[rgba(217,65,30,0.15)] px-3 py-1.5">

                <p className="font-dMSans text-[13px] font-bold text-[#D9411E]">
                  🔥 Spicy
                </p>

              </div>


              {/* HERITAGE */}

              <div className="rounded-[20px] border border-[#3A3428] bg-[#24221F] px-3 py-1.5">

                <p className="font-dMSans text-[13px] font-semibold text-[#E5E3DC]">
                  Rayalaseema Heritage
                </p>

              </div>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p className="w-full font-dMSans text-lg leading-7 text-[#E5E3DC]">
              An authentic Rayalaseema-style mutton curry prepared with
              traditional native spices and bold pepper. Slow-cooked to
              develop deep, rustic flavours and the signature fiery heat
              of Rayalaseema kitchens.
            </p>


            {/* =================================================
                PRICE
            ================================================== */}
            <div className="flex w-full items-center justify-between rounded-2xl border border-[#3A3428] bg-[#1A1917] p-5">

              <div className="flex flex-col gap-1">

                <p className="font-dMSans text-[13px] text-[#9E9A90]">
                  Price
                </p>

                <div className="flex items-baseline gap-1">

                  <p className="font-dMSans text-[32px] font-extrabold text-[#D4AF37]">
                    ₹{totalPrice}
                  </p>

                  <p className="font-dMSans text-sm text-[#9E9A90]">
                    incl. taxes
                  </p>

                </div>

              </div>


              <div className="flex flex-col items-end gap-1">

                <p className="font-dMSans text-[13px] text-[#9E9A90]">
                  Serves
                </p>

                <p className="font-dMSans text-lg font-bold text-[#E5E3DC]">
                  {quantity === 1
                    ? "1–2 People"
                    : `${quantity}–${quantity * 2} People`}
                </p>

              </div>

            </div>


            {/* =================================================
                QUANTITY
            ================================================== */}
            <div className="flex w-full flex-col items-start gap-5">

              <div className="flex w-full flex-wrap items-center gap-4">

                <p className="font-dMSans text-[15px] font-semibold text-[#E5E3DC]">
                  Select Quantity:
                </p>


                <div className="flex items-center gap-5 rounded-[30px] border border-[#3A3428] bg-[#1E1D1B] px-4 py-2">

                  {/* MINUS BUTTON */}

                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className={`flex h-7 w-7 items-center justify-center rounded-[14px] text-[#E5E3DC] transition-all ${
                      quantity === 1
                        ? "cursor-not-allowed bg-[#22201E] opacity-50"
                        : "cursor-pointer bg-[#2A2825] hover:bg-[#3A3733]"
                    }`}
                  >
                    −
                  </button>


                  {/* QUANTITY */}

                  <p className="min-w-[20px] text-center font-dMSans text-base font-bold text-[#E5E3DC]">
                    {quantity}
                  </p>


                  {/* PLUS BUTTON */}

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[14px] bg-[#D4AF37] text-black transition-all hover:bg-[#E5C65A]"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* =================================================
                  ADD TO CART
              ================================================== */}
              <div className="flex w-full items-center gap-4">

                <button
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#D4AF37] py-[18px] transition-all duration-300 hover:bg-[#E5C65A]"
                >

                  {/* CART ICON */}

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70801 1.70801H3.37467L5.59134 12.0585C5.67266 12.4376 5.88357 12.7765 6.18777 13.0168C6.49197 13.2571 6.87043 13.3839 7.25801 13.3753H15.408C15.7873 13.3746 16.1551 13.2447 16.4505 13.0068C16.746 12.7689 16.9515 12.4373 17.033 12.0669L18.408 5.87488H4.26634M7.49984 17.5006C7.49984 17.9609 7.12674 18.334 6.6665 18.334C6.20627 18.334 5.83317 17.9609 5.83317 17.5006C5.83317 17.0404 6.20627 16.6673 6.6665 16.6673C7.12674 16.6673 7.49984 16.6673 7.49984 17.5006ZM16.6665 17.5006C16.6665 17.9609 16.2934 18.334 15.8332 18.334C15.3729 18.334 14.9998 17.9609 14.9998 17.5006C14.9998 17.0404 15.3729 17.5006 16.6665 17.5006Z"
                      stroke="#111111"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>


                  <p className="font-dMSans text-lg font-bold text-[#111]">
                    ADD TO CART — ₹{totalPrice}
                  </p>

                </button>


                {/* HEART */}

                <button
                  type="button"
                  className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl border border-[#3A3428] bg-[#1A1917]"
                >

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.96723 6.38385C2.33664 7.30078 1.99904 8.38741 1.99902 9.50022C1.99902 11.8002 3.49914 13.5003 4.99925 15.0003L10.5077 20.3323C10.6967 20.544 10.9286 20.7129 11.188 20.828C11.4474 20.9432 11.7283 21.0018 12.0121 21C12.2959 20.9982 12.576 20.936 12.8339 20.8176C13.0918 20.6992 13.1503 20.5273 13.5079 20.3133L19.0003 15.0003C20.5004 13.5003 22.0006 11.7902 22.0006 9.50022C22.0059 8.38496 21.6714 7.29454 21.0416 6.37409C20.4118 5.45363 19.5166 4.74679 18.4752 4.34765C17.4337 3.94851 16.2954 3.876 15.2117 4.13977C14.128 4.40353 13.1503 4.99107 12.4088 5.82418C12.3564 5.88019 12.2931 5.92485 12.2227 5.95538C12.1524 5.98591 12.0765 6.00167 11.9998 6.00167C11.9231 6.00167 11.8472 5.98591 11.7769 5.95538C11.7065 5.92485 11.6432 5.88019 11.5908 5.82418C10.8469 4.99645 9.8695 4.41381 8.78756 4.15321C7.70562 3.89261 6.57008 3.9663 5.5309 4.36457C4.49173 4.76283 3.59782 5.46692 2.96723 6.38385Z"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                </button>

              </div>

            </div>


            {/* =================================================
                EXTRA INFORMATION
            ================================================== */}
            <div className="flex w-full flex-wrap items-center gap-6 pt-2">

              <p className="font-dMSans text-[13px] text-[#9E9A90]">
                Prep time: 35 mins
              </p>

              <p className="font-dMSans text-[13px] text-[#9E9A90]">
                ✓ 100% Organic & Fresh
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="flex w-full items-center justify-center gap-4 py-3">

          <div className="h-px w-full bg-[#3A3428]" />

          <div className="h-3 w-3 shrink-0 rotate-45 border border-[#D4AF37]" />

          <div className="h-px w-full bg-[#3A3428]" />

        </div>


        {/* =====================================================
            ABOUT + INGREDIENTS
        ====================================================== */}
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-20">

          {/* ABOUT THIS DISH */}

          <div className="flex w-full flex-col items-start gap-4">

            <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
              ABOUT THIS DISH
            </h2>

            <p className="w-full font-dMSans text-base leading-[26px] text-[#E5E3DC]">
              Rayalaseema Mutton Curry represents the bold and rustic character
              of Rayalaseema cuisine. Tender mutton is slowly cooked with
              traditional spices, native chillies, onion, garlic and generous
              amounts of pepper to create a rich, fiery curry inspired by
              traditional village kitchens.
            </p>

          </div>


          {/* INGREDIENTS */}

          <div className="flex w-full flex-col items-start gap-4">

            <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
              INGREDIENTS
            </h2>

            <div className="flex w-full flex-wrap items-start gap-2">

              {[
                "Mutton",
                "Red Chilli",
                "Black Pepper",
                "Onion",
                "Garlic",
                "Ginger",
                "Curry Leaves",
                "Traditional Spices",
                "Cold-Pressed Oil",
              ].map((ingredient) => (
                <div
                  key={ingredient}
                  className="rounded-lg border border-[#3A3428] bg-[#1E1D1B] px-4 py-2"
                >

                  <p className="font-dMSans text-sm font-medium text-[#E5E3DC]">
                    {ingredient}
                  </p>

                </div>
              ))}

            </div>


            <p className="pt-3 font-dMSans text-sm font-semibold text-[#F3E5AB]">
              ✓ Authentic Rayalaseema recipe with no artificial colour or
              preservatives.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}