import Sigimage from "./Rayalaseemaimages/Sigimage.png";
import Sigimage1 from "./Rayalaseemaimages/Sigimage(1).png";
import Sigimage2 from "./Rayalaseemaimages/Sigimage(2).png";

import Foodimage from "./Rayalaseemaimages/Foodimage.png";
import Foodimage1 from "./Rayalaseemaimages/Foodimage(1).png";
import Foodimage2 from "./Rayalaseemaimages/Foodimage(2).png";
import Foodimage3 from "./Rayalaseemaimages/Foodimage(3).png";
import Foodimage4 from "./Rayalaseemaimages/Foodimage(4).png";
import Foodimage5 from "./Rayalaseemaimages/Foodimage(5).png";
import Foodimage6 from "./Rayalaseemaimages/Foodimage(6).png";
import Foodimage7 from "./Rayalaseemaimages/Foodimage(7).png";

import { useNavigate } from "react-router-dom";


export default function Rayalaseema() {

  const navigate = useNavigate();


  /* =========================
      ROUTE
  ========================== */

  const cardRoute =
    "/menu/all-regions/rayalaseema-cuisine/rayalaseema-card";


  /* =========================
      SIGNATURE DISHES DATA
  ========================== */

  const signatureDishes = [

    {
      name: "Ragi Sangati",
      price: 100,
      image: Sigimage,
      description:
        "Traditional finger millet dumpling, rich in nutrition and rusticity",
      type: "veg",
    },

    {
      name: "Natu Kodi Pulusu",
      price: 320,
      image: Sigimage1,
      description:
        "Fiery free-range country chicken curry slow simmered in hot spices",
      type: "nonveg",
    },

    {
      name: "Rayalaseema Mutton Curry",
      price: 380,
      image: Sigimage2,
      description:
        "Extremely spicy mutton curry highlighting native Rayalaseema pepper",
      type: "nonveg",
    },

  ];


  /* =========================
      MORE DISHES DATA
  ========================== */

  const moreDishes = [

    {
      name: "Ragi Mudde",
      price: 120,
      image: Foodimage,
      description:
        "Traditional millet-based dish prepared with nutritious finger millet.",
      type: "veg",
    },

    {
      name: "Natu Kodi Fry",
      price: 280,
      image: Foodimage1,
      description:
        "Spicy country chicken fry prepared with traditional Rayalaseema spices.",
      type: "nonveg",
    },

    {
      name: "Peanut Chutney",
      price: 90,
      image: Foodimage2,
      description:
        "Rustic roasted peanut chutney blended with native chillies and spices.",
      type: "veg",
    },

    {
      name: "Jonna Rotte",
      price: 100,
      image: Foodimage3,
      description:
        "Traditional sorghum flatbread served with rustic curries and chutneys.",
      type: "veg",
    },

    {
      name: "Kodi Vepudu",
      price: 300,
      image: Foodimage4,
      description:
        "Crispy country chicken cooked with fiery native spices and curry leaves.",
      type: "nonveg",
    },

    {
      name: "Brinjal Curry",
      price: 160,
      image: Foodimage5,
      description:
        "Baby brinjals cooked slowly with roasted peanuts, sesame and spices.",
      type: "veg",
    },

    {
      name: "Mutton Keema",
      price: 340,
      image: Foodimage6,
      description:
        "Spiced minced mutton cooked with onions, chillies and aromatic herbs.",
      type: "nonveg",
    },

    {
      name: "Payasam",
      price: 140,
      image: Foodimage7,
      description:
        "Traditional sweet preparation made with milk, jaggery and aromatic spices.",
      type: "veg",
    },

  ];


  /* =========================
      OPEN DISH CARD
  ========================== */

  const openDish = (dish) => {

    navigate(cardRoute, {
      state: {
        name: dish.name,
        price: dish.price,
        image: dish.image,
        description: dish.description,
        type: dish.type,
      },
    });

  };


  return (

    <main className="min-h-screen bg-[#130F0C] text-white">


      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="flex min-h-[380px] w-full flex-col items-center justify-center px-5 pt-14">

        <div className="flex items-center gap-3">

          {/* LEFT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>


          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Rayalaseema SPECIALS
          </p>


          {/* RIGHT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>

        </div>


        <h1 className="mt-4 font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Rayalaseema Cuisine
        </h1>


        <p className="mt-4 max-w-[720px] text-center font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Famous for its fiery heat and rustic millet-based cuisine from the
          heartland of Andhra Pradesh.
        </p>

      </section>


      {/* =========================
          CATEGORY TABS
      ========================== */}

      <section className="flex w-full justify-center px-5 pb-10">

        <div className="flex items-center justify-center gap-3">


          {/* ALL */}

          <button
            type="button"
            className="rounded-[20px] bg-[#D4A359] px-6 py-2.5"
          >

            <p className="font-dMSans text-xs font-bold text-[#130F0C]">
              ALL
            </p>

          </button>


          {/* VEG */}

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-[20px] border border-[#332520] bg-[#1A1411] px-5 py-2.5"
          >

            <p className="font-dMSans text-xs font-bold text-[#F5ECE3]">
              VEG
            </p>


            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <rect
                width="10"
                height="10"
                rx="4"
                fill="#E8F5E9"
              />

              <rect
                x="2"
                y="2"
                width="6"
                height="6"
                rx="3"
                fill="#2E7D32"
              />

            </svg>

          </button>


          {/* NON VEG */}

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-[20px] border border-[#332520] bg-[#1A1411] px-5 py-2.5"
          >

            <p className="font-dMSans text-xs font-bold text-[#F5ECE3]">
              NON-VEG
            </p>


            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <rect
                width="10"
                height="10"
                rx="4"
                fill="#FFEBEE"
              />

              <rect
                x="2"
                y="2"
                width="6"
                height="6"
                rx="3"
                fill="#C62828"
              />

            </svg>

          </button>

        </div>

      </section>


      {/* =========================
          SIGNATURE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-16 sm:px-8 md:px-12 lg:px-20">


        {/* HEADING */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            SIGNATURE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        {/* SIGNATURE CARDS */}

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {signatureDishes.map((dish) => (

            <article
              key={dish.name}
              onClick={() => openDish(dish)}
              className="flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
            >


              {/* IMAGE */}

              <img
                src={dish.image}
                className="h-[220px] w-full object-cover"
                alt={dish.name}
              />


              <div className="flex w-full flex-col gap-3 p-5">


                {/* NAME + TYPE */}

                <div className="flex items-center justify-between">

                  <h2 className="line-clamp-1 font-cormorantGaramond text-[22px] font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h2>


                  {/* FOOD TYPE */}

                  {dish.type === "veg" ? (

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[18px] w-[18px] rounded-md border-[1.5px] border-[#2E7D32] bg-black/70 p-1"
                    >

                      <rect
                        x="0.75"
                        y="0.75"
                        width="16.5"
                        height="16.5"
                        rx="5.25"
                        fill="black"
                      />

                      <rect
                        x="0.75"
                        y="0.75"
                        width="16.5"
                        height="16.5"
                        rx="5.25"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="9"
                        cy="9"
                        r="4"
                        fill="#2E7D32"
                      />

                    </svg>

                  ) : (

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[18px] w-[18px] rounded-md border-[1.5px] border-[#C62828] bg-black/70 p-1"
                    >

                      <rect
                        x="0.75"
                        y="0.75"
                        width="16.5"
                        height="16.5"
                        rx="5.25"
                        fill="black"
                      />

                      <rect
                        x="0.75"
                        y="0.75"
                        width="16.5"
                        height="16.5"
                        rx="5.25"
                        stroke="#C62828"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="9"
                        cy="9"
                        r="4"
                        fill="#C62828"
                      />

                    </svg>

                  )}

                </div>


                {/* DESCRIPTION */}

                <p className="h-10 overflow-hidden font-dMSans text-sm leading-[1.4em] text-[#A8978F]">
                  {dish.description}
                </p>


                {/* PRICE + BUTTON */}

                <div className="flex items-center justify-between">

                  <p className="font-dMSans text-xl font-bold text-[#D4A359]">
                    ₹{dish.price}
                  </p>


                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDish(dish);
                    }}
                    className="rounded-lg border border-[#D4A359] bg-[#261D1A] px-5 py-2.5 transition-all duration-300 hover:bg-[#D4A359]"
                  >

                    <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                      ADD TO CART
                    </p>

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>
            {/* =========================
          EXPLORE MORE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8 px-5 pb-16 sm:px-8 md:px-12 lg:px-20">


        {/* HEADING */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            EXPLORE MORE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        {/* FOOD GRID */}

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {moreDishes.map((dish) => (

            <article
              key={dish.name}
              onClick={() => openDish(dish)}
              className="flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
            >


              {/* IMAGE */}

              <img
                src={dish.image}
                className="h-[190px] w-full object-cover"
                alt={dish.name}
              />


              {/* CONTENT */}

              <div className="flex flex-col gap-3 p-4">


                {/* NAME + TYPE */}

                <div className="flex items-center justify-between gap-3">

                  <h3 className="line-clamp-1 font-cormorantGaramond text-xl font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h3>


                  {/* TYPE */}

                  <div
                    className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border-[1.5px] bg-black/70 ${
                      dish.type === "veg"
                        ? "border-[#2E7D32]"
                        : "border-[#C62828]"
                    }`}
                  >

                    <div
                      className={`h-2 w-2 rounded-full ${
                        dish.type === "veg"
                          ? "bg-[#2E7D32]"
                          : "bg-[#C62828]"
                      }`}
                    />

                  </div>

                </div>


                {/* DESCRIPTION */}

                <p className="h-10 overflow-hidden font-dMSans text-[13px] leading-[1.4em] text-[#A8978F]">
                  {dish.description}
                </p>


                {/* PRICE + BUTTON */}

                <div className="flex items-center justify-between">


                  <p className="font-dMSans text-lg font-bold text-[#D4A359]">
                    ₹{dish.price}
                  </p>


                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDish(dish);
                    }}
                    className="rounded-lg border border-[#D4A359] px-4 py-2 font-dMSans text-[11px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="flex w-full flex-col gap-12 bg-[#130F0C] px-5 pb-10 pt-20 sm:px-8 md:px-12 lg:px-20">


        {/* FOOTER TOP */}

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">


          {/* BRAND */}

          <div className="flex w-full max-w-[360px] flex-col items-start gap-4">

            <p className="font-cormorantGaramond text-[28px] font-bold text-[#D4A359]">
              Bammagari Ruchulu
            </p>


            <p className="w-full font-dMSans text-sm leading-[1.6em] text-[#A8978F]">
              Bringing generations-old Telugu heritage recipes directly to
              your modern tables with love, pure native ghee, and authentic
              local spices.
            </p>

          </div>


          {/* FOOTER LINKS */}

          <div className="flex flex-wrap items-start gap-12 sm:gap-16">


            {/* EXPLORE */}

            <div className="flex flex-col items-start gap-4">

              <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                Explore
              </p>


              <button
                type="button"
                className="font-dMSans text-sm text-[#A8978F] transition-colors hover:text-[#D4A359]"
              >
                Our Heritage
              </button>


              <button
                type="button"
                className="font-dMSans text-sm text-[#A8978F] transition-colors hover:text-[#D4A359]"
              >
                Bamma Specials
              </button>

            </div>


            {/* CONTACT */}

            <div className="flex flex-col items-start gap-4">

              <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                Contact Us
              </p>


              <p className="font-dMSans text-sm text-[#A8978F]">
                +91 99887 76655
              </p>


              <p className="font-dMSans text-sm text-[#A8978F]">
                hello@bammagariruchulu.com
              </p>


              <p className="font-dMSans text-sm text-[#A8978F]">
                Hyderabad, Telangana
              </p>

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="h-px w-full bg-[#332520]" />


        {/* FOOTER BOTTOM */}

        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="font-dMSans text-[13px] text-[#A8978F]">
            © 2026 Bammagari Ruchulu. All rights reserved.
          </p>


          <p className="font-dMSans text-[13px] text-[#A8978F]">
            Traditional, Organic, Prepared Just Like Home.
          </p>

        </div>

      </footer>


    </main>

  );
}
