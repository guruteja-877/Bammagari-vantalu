import Header from "../components/Header";
import Footer from "../pages/Footer";

export default function Offers() {
  return (
    <div className="relative min-h-screen bg-[#0C0806]">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <Header />

      <main className="relative z-10 pt-[104px]">

        {/* =====================================================
            PROMO BANNER
        ===================================================== */}
        <section className="flex py-6 px-20 justify-between items-center bg-[#D59D3F] w-full min-h-[104px]">

          <div className="flex items-center gap-3 w-fit">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
            >
              <path
                d="M10 5.83267V17.4993M10 5.83267C9.69856 4.5905 9.17954 3.52892 8.51061 2.78567C7.84169 2.04241 7.0539 1.65236 6.25 1.66636C5.69747 1.66636 5.16756 1.88586 4.77686 2.27656C4.38616 2.66726 4.16667 3.19716 4.16667 3.7497C4.16667 4.30223 4.38616 4.83214 4.77686 5.22284C5.16756 5.61354 5.69747 5.83303 6.25 5.83303M10 5.83267C10.3014 4.5905 10.8205 3.52892 11.4894 2.78567C12.1583 2.04241 12.9461 1.65236 13.75 1.66636C14.3025 1.66636 14.8324 1.88586 15.2231 2.27656C15.6138 2.66726 15.8333 3.19716 15.8333 3.7497C15.8333 4.30223 15.6138 4.83214 15.2231 5.22284C14.8324 5.61354 14.3025 5.83303 13.75 5.83303M16.6667 9.166V15.8327C16.6667 16.2747 16.4911 16.6986 16.1785 17.0112C15.866 17.3237 15.442 17.4993 15 17.4993H5C4.55797 17.4993 4.13405 17.3237 3.82149 17.0112C3.50893 16.6986 3.33333 16.2747 3.33333 15.8327V9.166M16.6667 9.166C17.1269 9.166 17.5 8.7929 17.5 8.33267V6.666C17.5 6.20576 17.1269 5.83267 16.6667 5.83267H3.33333C2.8731 5.83267 2.5 6.20576 2.5 6.666V8.33267C2.5 8.7929 2.8731 9.166 3.33333 9.166M16.6667 9.166H3.33333"
                stroke="#0C0806"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-[#0C0806] font-manrope text-base font-bold">
              LIMITED TIME OFFERS — ORDER NOW AND SAVE BIG!
            </p>
          </div>

          <div className="flex items-center gap-2 w-fit">
            <p className="text-[#0C0806] font-manrope text-sm font-semibold">
              Discounts Apply Automatically at Checkout
            </p>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#0C0806"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

        </section>


        {/* =====================================================
            PAGE TITLE BLOCK
        ===================================================== */}
        <section className="flex py-20 px-20 pb-[60px] flex-col items-center gap-4 bg-[#0C0806] w-full">

          <p className="text-[#D4AF37] font-instrumentSerif text-3xl w-fit">
            — OFFERS —
          </p>

          <p className="text-[#CBBFB7] font-manrope text-lg leading-[1.6em] max-w-[720px] text-center">
            Traditional flavour made even more special — grab today's best
            deals and experience Telugu hospitality.
          </p>

        </section>


        {/* =====================================================
            OFFERS SECTION
        ===================================================== */}
        <section className="flex pt-10 px-20 pb-[100px] flex-col items-start gap-8 w-full bg-[#17100D]">


          {/* ===================================================
              OFFER 1
          =================================================== */}
          <div className="flex p-10 items-center gap-10 rounded-2xl border-[1.5px] border-[#C8A960] bg-[#17100D] w-full">

            <div className="flex flex-col justify-center items-center rounded-[50px] border border-[#C8A960] bg-[rgba(200,169,96,0.08)] w-[100px] h-[100px] shrink-0">

              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
              >
                <path
                  d="M16.7582 2.99881C17.5538 2.99898 18.3168 3.31519 18.8793 3.87788L31.9364 16.935C32.614 17.6168 32.9942 18.539 32.9942 19.5002C32.9942 20.4614 32.614 21.3836 31.9364 22.0654L22.0656 31.9362C21.3838 32.6137 20.4616 32.994 19.5004 32.994C18.5392 32.994 17.617 32.6137 16.9352 31.9362L3.8781 18.8791C3.3154 18.3166 2.99919 17.5536 2.99902 16.758V5.99906C2.99902 5.20334 3.31512 4.44022 3.87778 3.87756C4.44043 3.31491 5.20356 2.99881 5.99927 2.99881H16.7582Z"
                  stroke="#C8A960"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="flex flex-col items-start gap-3 w-full">

              <div className="flex items-center gap-4 flex-wrap">

                <p className="text-[#D59D3F] font-cormorantGaramond text-[32px] font-bold">
                  First Order Feast
                </p>

                <div className="flex py-1 px-3 rounded-md border border-[#C8A960] bg-[#0C0806]">

                  <p className="text-[#C8A960] font-manrope text-xs font-bold">
                    CODE: BAMMA20
                  </p>

                </div>

              </div>

              <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                20% off on your first order.
              </p>

              <p className="text-[#CBBFB7] font-manrope text-[13px]">
                * Valid on orders above ₹500. Terms and conditions apply.
                Valid for a limited time only.
              </p>

            </div>

            <button
              type="button"
              className="flex py-4 px-7 items-center gap-2 rounded-lg bg-[#D59D3F] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >

              <p className="text-[#0C0806] font-manrope text-sm font-bold">
                Claim Offer
              </p>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162"
                  stroke="#0C0806"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>


          {/* ===================================================
              OFFER 2
          =================================================== */}
          <div className="flex p-10 items-center gap-10 rounded-2xl border-[1.5px] border-[#C8A960] bg-[#261C19] w-full">

            <div className="flex flex-col justify-center items-center rounded-[50px] border border-[#C8A960] bg-[rgba(200,169,96,0.08)] w-[100px] h-[100px] shrink-0">

              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7582 2.99878C17.5538 2.99895 18.3168 3.31516 18.8793 3.87785L31.9364 16.9349C32.614 17.6168 32.9942 18.5389 32.9942 19.5002C32.9942 20.4614 32.614 21.3835 31.9364 22.0654L22.0656 31.9362C21.3838 32.6137 20.4616 32.994 19.5004 32.994C18.5392 32.994 17.617 32.6137 16.9352 31.9362L3.8781 18.8791C3.3154 18.3166 2.99919 17.5536 2.99902 16.7579V5.99903C2.99902 5.20331 3.31512 4.44019 3.87778 3.87753C4.44043 3.31488 5.20356 2.99878 5.99927 2.99878H16.7582Z"
                  stroke="#C8A960"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="flex flex-col items-start gap-3 w-full">

              <div className="flex items-center gap-4 flex-wrap">

                <p className="text-[#D59D3F] font-cormorantGaramond text-[32px] font-bold">
                  Family Thali Pack
                </p>

                <div className="flex py-1 px-3 rounded-md border border-[#C8A960] bg-[#0C0806]">

                  <p className="text-[#C8A960] font-manrope text-xs font-bold">
                    CODE: THALI899
                  </p>

                </div>

              </div>

              <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                Order any 3 curries + rice + dessert at ₹899 (save ₹250).
              </p>

              <p className="text-[#CBBFB7] font-manrope text-[13px]">
                * Perfect for family meals. Terms and conditions apply.
                Valid for a limited time only.
              </p>

            </div>

            <button
              type="button"
              className="flex py-4 px-7 items-center gap-2 rounded-lg bg-[#D59D3F] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >

              <p className="text-[#0C0806] font-manrope text-sm font-bold">
                Claim Offer
              </p>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162"
                  stroke="#0C0806"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>


          {/* ===================================================
              OFFER 3
          =================================================== */}
          <div className="flex p-10 items-center gap-10 rounded-2xl border-[1.5px] border-[#C8A960] bg-[#17100D] w-full">

            <div className="flex flex-col justify-center items-center rounded-[50px] border border-[#C8A960] bg-[rgba(200,169,96,0.08)] w-[100px] h-[100px] shrink-0">

              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7582 2.99878C17.5538 2.99895 18.3165 3.31516 18.8793 3.87785L31.9364 16.9349C32.614 17.6168 32.9942 18.5389 32.9942 19.5002C32.9942 20.4614 32.614 21.3835 31.9364 22.0654L22.0656 31.9362C21.3838 32.6137 20.4616 32.994 19.5004 32.994C18.5392 32.994 17.617 32.6137 16.9352 31.9362L3.8781 18.8791C3.3154 18.3166 2.99919 17.5536 2.99902 16.7579V5.99903C2.99902 5.20331 3.31512 4.44019 3.87778 3.87753C4.44043 3.31488 5.20356 2.99878 5.99927 2.99878H16.7582Z"
                  stroke="#C8A960"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="flex flex-col items-start gap-3 w-full">

              <div className="flex items-center gap-4 flex-wrap">

                <p className="text-[#D59D3F] font-cormorantGaramond text-[32px] font-bold">
                  Weekend Biryani Bonanza
                </p>

                <div className="flex py-1 px-3 rounded-md border border-[#C8A960] bg-[#0C0806]">

                  <p className="text-[#C8A960] font-manrope text-xs font-bold">
                    CODE: BOGO-BIR
                  </p>

                </div>

              </div>

              <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                Buy 1 Get 1 Free on Hyderabadi Biryani every Saturday & Sunday.
              </p>

              <p className="text-[#CBBFB7] font-manrope text-[13px]">
                * Valid only on dine-in & takeaway. Terms and conditions apply.
                Valid for a limited time only.
              </p>

            </div>

            <button
              type="button"
              className="flex py-4 px-7 items-center gap-2 rounded-lg bg-[#D59D3F] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >

              <p className="text-[#0C0806] font-manrope text-sm font-bold">
                Claim Offer
              </p>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162"
                  stroke="#0C0806"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>
                    {/* ===================================================
              OFFER 4
          =================================================== */}
          <div className="flex p-10 items-center gap-10 rounded-2xl border-[1.5px] border-[#C8A960] bg-[#261C19] w-full">

            <div className="flex flex-col justify-center items-center rounded-[50px] border border-[#C8A960] bg-[rgba(200,169,96,0.08)] w-[100px] h-[100px] shrink-0">

              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7582 2.99878C17.5538 2.99895 18.3165 3.31516 18.8793 3.87785L31.9364 16.9349C32.614 17.6168 32.9942 18.5389 32.9942 19.5002C32.9942 20.4614 32.614 21.3835 31.9364 22.0654L22.0656 31.9362C21.3838 32.6137 20.4616 32.994 19.5004 32.994C18.5392 32.994 17.617 32.6137 16.9352 31.9362L3.8781 18.8791C3.3154 18.3166 2.99919 17.5536 2.99902 16.7579V5.99903C2.99902 5.20331 3.31512 4.44019 3.87778 3.87753C4.44043 3.31488 5.20356 2.99878 5.99927 2.99878H16.7582Z"
                  stroke="#C8A960"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="flex flex-col items-start gap-3 w-full">

              <div className="flex items-center gap-4 flex-wrap">

                <p className="text-[#C8A960] font-cormorantGaramond text-[32px] font-bold">
                  Bamma's Loyalty Reward
                </p>

                <div className="flex py-1 px-3 rounded-md border border-[#C8A960] bg-[#0C0806]">

                  <p className="text-[#C8A960] font-manrope text-xs font-bold">
                    CODE: LOYALTY
                  </p>

                </div>

              </div>

              <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                Earn 1 point per ₹10 spent. Redeem 100 points for ₹50 off.
              </p>

              <p className="text-[#CBBFB7] font-manrope text-[13px]">
                * Automatically credited to account. Terms and conditions apply.
                Valid for a limited time only.
              </p>

            </div>

            <button
              type="button"
              className="flex py-4 px-7 items-center gap-2 rounded-lg bg-[#D59D3F] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >

              <p className="text-[#0C0806] font-manrope text-sm font-bold">
                Claim Offer
              </p>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 7.00006H11.0836M6.99982 11.0839L11.0836 7.00006L6.99982 2.91626"
                  stroke="#0C0806"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>


          {/* ===================================================
              OFFER 5
          =================================================== */}
          <div className="flex p-10 items-center gap-10 rounded-2xl border-[1.5px] border-[#C8A960] bg-[#17100D] w-full">

            <div className="flex flex-col justify-center items-center rounded-[50px] border border-[#C8A960] bg-[rgba(200,169,96,0.08)] w-[100px] h-[100px] shrink-0">

              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7582 2.99878C17.5538 2.99895 18.3165 3.31516 18.8793 3.87785L31.9364 16.9349C32.614 17.6168 32.9942 18.5389 32.9942 19.5002C32.9942 20.4614 32.614 21.3835 31.9364 22.0654L22.0656 31.9362C21.3838 32.6137 20.4616 32.994 19.5004 32.994C18.5392 32.994 17.617 32.6137 16.9352 31.9362L3.8781 18.8791C3.3154 18.3166 2.99919 17.5536 2.99902 16.7579V5.99903C2.99902 5.20331 3.31512 4.44019 3.87778 3.87753C4.44043 3.31488 5.20356 2.99878 5.99927 2.99878H16.7582Z"
                  stroke="#C8A960"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="flex flex-col items-start gap-3 w-full">

              <div className="flex items-center gap-4 flex-wrap">

                <p className="text-[#C8A960] font-cormorantGaramond text-[32px] font-bold">
                  Refer a Friend
                </p>

                <div className="flex py-1 px-3 rounded-md border border-[#C8A960] bg-[#0C0806]">

                  <p className="text-[#C8A960] font-manrope text-xs font-bold">
                    CODE: REFER100
                  </p>

                </div>

              </div>

              <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                Give ₹100, Get ₹100. Share the taste of Bamma's kitchen.
              </p>

              <p className="text-[#CBBFB7] font-manrope text-[13px]">
                * Valid after their first order. Terms and conditions apply.
                Valid for a limited time only.
              </p>

            </div>

            <button
              type="button"
              className="flex py-4 px-7 items-center gap-2 rounded-lg bg-[#D59D3F] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >

              <p className="text-[#0C0806] font-manrope text-sm font-bold">
                Claim Offer
              </p>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 7.00006H11.0836M6.99982 11.0839L11.0836 7.00006L6.99982 2.91626"
                  stroke="#0C0806"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>


        </section>


        {/* =====================================================
            FOOTER
            Comes AFTER the complete offers section
        ===================================================== */}
        <Footer />

      </main>

    </div>
  );
}