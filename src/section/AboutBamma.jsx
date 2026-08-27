import Header from "../components/Header";
import Footer from '../pages/Footer'
import Grandmaimage from "./AboutBamma/Grandmaimage.png";
import Kitchenimage from "./AboutBamma/Kitchenimage.png";
import Heritageimage from "./AboutBamma/Heritageimage.png";
export default function AboutBamma() {
  return (
    <div className="relative min-h-screen bg-[#0C0806] overflow-x-hidden">

      {/* HEADER */}
      <Header />

      {/* PAGE TITLE */}
      <div className="flex pt-20 pr-20 pb-[60px] pl-20 flex-col items-center gap-4 bg-[#0C0806] min-w-screen min-h-screen absolute left-0 top-[104px]">
        <p className="text-[#D4AF37] font-instrumentSerif text-3xl w-fit">
          — ABOUT BAMMA —
        </p>

        <p className="text-[#CBBFB7] font-manrope text-lg leading-[1.6em] w-[720px] text-center">
          Where every recipe carries a story of tradition, love, and authentic
          heritage.
        </p>
      </div>

      {/* STORY SECTION */}
      <div className="flex py-[100px] px-20 items-center gap-[60px] min-w-screen min-h-screen absolute left-0 top-[328px]">

        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-[#C8A960] font-manrope text-sm font-semibold w-fit">
            01 — The Soul of Our Kitchen
          </p>

          <p className="text-[#FAF6F0] font-cormorantGaramond text-5xl font-bold w-full">
            Bamma's Story
          </p>

          <p className="text-[#CBBFB7] font-manrope text-base leading-[1.8em] w-full">
            The heart of our kitchen is Bamma herself — a grandmother whose
            recipes have been passed down through generations. To Bamma,
            cooking was never just about feeding; it was a sacred art form of
            expression, family bonding, and cultural transmission. Every spice
            mix has been hand-adjusted, every roasting duration calibrated by
            her memory, and every dish prepared with the unconditional love,
            patience, and age-old wisdom of traditional Telugu cooking.
          </p>
        </div>

        <div className="flex flex-col items-start rounded-2xl border-2 border-[#C8A960] w-[520px] h-[400px] overflow-hidden">
          <img
            src={Grandmaimage}
            className="w-full h-full object-cover"
            alt="Grandma"
          />
        </div>
      </div>

      {/* KITCHEN SECTION */}
      <div className="flex py-[100px] px-20 items-center gap-[60px] bg-[#17100D] min-w-screen min-h-screen absolute left-0 top-[928px]">

        <div className="flex flex-col items-start rounded-2xl border-2 border-[#C8A960] w-[520px] h-[400px] overflow-hidden">
          <img
            src={Kitchenimage}
            className="w-full h-full object-cover"
            alt="Kitchen"
          />
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-[#C8A960] font-manrope text-sm font-semibold w-fit">
            02 — Time-Honored Methods
          </p>

          <p className="text-[#FAF6F0] font-cormorantGaramond text-5xl font-bold w-full">
            From Our Kitchen
          </p>

          <p className="text-[#CBBFB7] font-manrope text-base leading-[1.8em] w-full">
            We reject modern shortcuts. In our kitchen, we use age-old cooking
            methods that have survived centuries of modernization. We slow-cook
            over wood-fired clay stoves to lock in natural smoky tones,
            hand-pound our red chillies and coriander, and grind our masalas on
            stone grinders. This rigorous discipline is our commitment. No
            artificial additives, no preservatives, and no colors. Just pure,
            clean flavor the way nature and Bamma intended.
          </p>
        </div>
      </div>

      {/* HERITAGE SECTION */}
      <div className="flex py-[100px] px-20 items-center gap-[60px] min-w-screen min-h-screen absolute left-0 top-[1528px]">

        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-[#C8A960] font-manrope text-sm font-semibold w-fit">
            03 — Regions of Abundance
          </p>

          <p className="text-[#FAF6F0] font-cormorantGaramond text-5xl font-bold w-full">
            Our Culinary Heritage
          </p>

          <p className="text-[#CBBFB7] font-manrope text-base leading-[1.8em] w-full">
            Our menu is a celebration of the geographic diverse culinary
            profiles of Andhra Pradesh, Rayalaseema, Telangana, and the
            pristine coastal belt. From the deep fiery heat of Guntur
            chillies, to the sweet-tangy tamarind of Nellore, and the
            nutrient-dense ragi-rich preparations of Rayalaseema, we ensure
            every region’s signature is respected, reproduced, and honored.
          </p>
        </div>

        <div className="flex flex-col items-start rounded-2xl border-2 border-[#C8A960] w-[520px] h-[400px] overflow-hidden">
          <img
            src={Heritageimage}
            className="w-full h-full object-cover"
            alt="Heritage"
          />
        </div>
      </div>

      {/* PROMISE BANNER */}
      <div className="flex py-[100px] px-20 flex-col items-center gap-12 bg-[#17100D] min-w-screen min-h-screen absolute left-0 top-[2128px]">

        <div className="flex flex-col items-center gap-4 w-full">

          <p className="text-[#C8A960] font-manrope text-sm font-semibold w-fit">
            Our Uncompromised Promise
          </p>

          <p className="text-[#FAF6F0] font-cormorantGaramond text-5xl font-bold w-[800px] text-center">
            Fresh ingredients. No preservatives. Pure love.
          </p>

        </div>

        <div className="flex items-start gap-6 w-full">

          {/* DAILY SOURCED */}
          <div className="flex p-8 flex-col items-start gap-4 rounded-xl border border-[rgba(200,169,96,0.25)] bg-[#0C0806] w-full">
            <p className="text-[#C8A960] font-cormorantGaramond text-2xl font-bold w-fit">
              Daily Sourced
            </p>

            <p className="text-[#CBBFB7] font-manrope text-sm leading-[1.6em] w-full">
              Fresh produce and premium quality meats sourced from local farms
              every single morning.
            </p>
          </div>

          {/* 100% HOMEMADE */}
          <div className="flex p-8 flex-col items-start gap-4 rounded-xl border border-[rgba(200,169,96,0.25)] bg-[#0C0806] w-full">
            <p className="text-[#C8A960] font-cormorantGaramond text-2xl font-bold w-fit">
              100% Homemade
            </p>

            <p className="text-[#CBBFB7] font-manrope text-sm leading-[1.6em] w-full">
              Every chutney, pickle, and curry powder is prepared fresh in our
              kitchen.
            </p>
          </div>

          {/* ZERO SHORTCUTS */}
          <div className="flex p-8 flex-col items-start gap-4 rounded-xl border border-[rgba(200,169,96,0.25)] bg-[#0C0806] w-full">
            <p className="text-[#C8A960] font-cormorantGaramond text-2xl font-bold w-fit">
              Zero Shortcuts
            </p>

            <p className="text-[#CBBFB7] font-manrope text-sm leading-[1.6em] w-full">
              No artificial enhancers, msg, stabilizers or frozen pre-mixes are
              allowed in our premises.
            </p>
          </div>

          {/* SERVED WITH HONOR */}
          <div className="flex p-8 flex-col items-start gap-4 rounded-xl border border-[rgba(200,169,96,0.25)] bg-[#0C0806] w-full">
            <p className="text-[#C8A960] font-cormorantGaramond text-2xl font-bold w-fit">
              Served with Honor
            </p>

            <p className="text-[#CBBFB7] font-manrope text-sm leading-[1.6em] w-full">
              Treated like a guest in our home, served with ultimate warmth and
              traditional respect.
            </p>
          </div>

        </div>

        {/* MENU BUTTON */}
        <div className="flex pt-5 items-start gap-4 w-fit">

          <button
            type="button"
            onClick={() => (window.location.href = "/menu")}
            className="flex py-[18px] px-10 items-center gap-2.5 rounded-lg bg-[#D59D3F] w-fit cursor-pointer hover:opacity-90 transition"
          >
            <p className="text-[#0C0806] font-manrope text-[15px] font-bold w-fit">
              Explore Our Menu
            </p>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M3.33301 7.99996H12.6674M8.00021 12.6672L12.6674 7.99996L8.00021 3.33276"
                stroke="#0C0806"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>
      </div>


      {/* FOOTER */}
      <Footer />

 

    </div>
    
  );
}