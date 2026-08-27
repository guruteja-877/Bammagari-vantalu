import Sigimage from "./Konaseemaimages/Sigimage.png";
import Sigimage1 from "./Konaseemaimages/Sigimage(1).png";
import Sigimage2 from "./Konaseemaimages/Sigimage(2).png";

import Foodimage from "./Konaseemaimages/Foodimage.png";
import Foodimage1 from "./Konaseemaimages/Foodimage(1).png";
import Foodimage2 from "./Konaseemaimages/Foodimage(2).png";
import Foodimage3 from "./Konaseemaimages/Foodimage(3).png";
import Foodimage4 from "./Konaseemaimages/Foodimage(4).png";
import Foodimage5 from "./Konaseemaimages/Foodimage(5).png";
import Foodimage6 from "./Konaseemaimages/Foodimage(6).png";
import Foodimage7 from "./Konaseemaimages/Foodimage(7).png";

import { useNavigate } from "react-router-dom";


// =====================================================
// FOOD DISHES
// =====================================================

const foodDishes = [
  {
    name: "Royyala Vepudu",
    price: 340,
    image: Foodimage,
    description:
      "Aromatic prawn fry prepared with local Konaseema coconut masala",
    type: "nonveg",
  },

  {
    name: "Godavari Crab Curry",
    price: 380,
    image: Foodimage1,
    description:
      "Fiery fresh water crab cooked in thick spicy coconut gravy",
    type: "nonveg",
  },

  {
    name: "Konaseema Fish Fry",
    price: 260,
    image: Foodimage2,
    description:
      "Pan-fried fish coated in signature Godavari region spice paste",
    type: "nonveg",
  },

  {
    name: "Kodi Pulusu",
    price: 280,
    image: Foodimage3,
    description:
      "Chicken curry cooked with a tangy splash of local tamarind extract",
    type: "nonveg",
  },

  {
    name: "Gongura Royyala Curry",
    price: 360,
    image: Foodimage4,
    description:
      "Prawns cooked in sour gongura paste with green chillies",
    type: "nonveg",
  },

  {
    name: "Coconut Rice",
    price: 130,
    image: Foodimage5,
    description:
      "Fragrant rice cooked in fresh coconut milk, tempered with cashews",
    type: "veg",
  },

  {
    name: "Mamidikaya Pulihora",
    price: 140,
    image: Foodimage6,
    description:
      "Festive rice flavored with tangy grated raw mango",
    type: "veg",
  },

  {
    name: "Poornam Boorelu",
    price: 100,
    image: Foodimage7,
    description:
      "Crispy sweet golden fritters filled with coconut-chana jaggery",
    type: "veg",
  },
];


// =====================================================
// KONASEEMA PAGE
// =====================================================

export default function Konaseema() {

  const navigate = useNavigate();


  // ===================================================
  // ROUTE FOR KONASEEMA CARD
  // ===================================================

  const cardRoute =
    "/menu/all-regions/konaseema-cuisine/konaseema-card";


  // ===================================================
  // SIGNATURE DISHES
  // ===================================================

  const signatureDishes = [
    {
      name: "Konaseema Fish Pulusu",
      price: 300,
      image: Sigimage,
      description:
        "Aromatic river-fish stew cooked with raw mango slices and coconut milk",
      type: "nonveg",
    },

    {
      name: "Royyala Iguru",
      price: 360,
      image: Sigimage1,
      description:
        "Succulent Godavari shrimp dry curry finished with grated fresh coconut",
      type: "nonveg",
    },

    {
      name: "Bobbatlu",
      price: 120,
      image: Sigimage2,
      description:
        "Ghee-soaked sweet flatbread stuffed with sweet lentil paste",
      type: "veg",
    },
  ];


  // ===================================================
  // OPEN DISH
  // ===================================================

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


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="flex min-h-[329px] w-full flex-col items-center justify-center px-5 pt-14">

        {/* TOP LABEL */}

        <div className="flex items-center gap-3">

          {/* LEFT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>


          {/* LABEL */}

          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Konaseema SPECIALS
          </p>


          {/* RIGHT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>

        </div>


        {/* MAIN TITLE */}

        <h1 className="mt-4 font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Konaseema Cuisine
        </h1>


        {/* DESCRIPTION */}

        <p className="mt-4 max-w-[720px] text-center font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Lush coconut country delivering aromatic seafood curries and
          traditional sweets from the Godavari delta.
        </p>

      </section>



      {/* =================================================
          SEARCH BAR
      ================================================= */}

      <section className="flex w-full justify-center px-5 pb-6">

        <div className="flex h-[52px] w-full max-w-[640px] items-center gap-3 rounded-[26px] border border-[#332520] bg-[#1A1411] px-[18px]">

          {/* SEARCH ICON */}

          <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center">

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M15.7501 15.7501L12.4951 12.4951M14.25 8.25C14.25 11.5637 11.5637 14.25 8.25 14.25C4.93629 14.25 2.25 11.5637 2.25 8.25C2.25 4.93629 4.93629 2.25 8.25 2.25C11.5637 2.25 14.25 4.93629 14.25 8.25Z"
                stroke="#D4A359"
                strokeWidth="2"
                strokeLinecap="round"
              />

            </svg>

          </div>


          {/* SEARCH INPUT */}

          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full bg-transparent font-dMSans text-[15px] text-[#F5ECE3] outline-none placeholder:text-[#A8978F]"
          />

        </div>

      </section>



      {/* =================================================
          CATEGORY TABS
      ================================================= */}

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



      {/* =================================================
          SIGNATURE DISHES
      ================================================= */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-12 sm:px-8 md:px-12 lg:px-20">

        {/* TITLE */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            SIGNATURE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        {/* SIGNATURE GRID */}

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


              {/* CONTENT */}

              <div className="flex w-full flex-col gap-3 p-5">

                <div className="flex items-center justify-between gap-3">

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
                      className="h-[18px] w-[18px] shrink-0 rounded-md border-[1.5px] border-[#2E7D32] bg-black/70 p-1"
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
                      className="h-[18px] w-[18px] shrink-0 rounded-md border-[1.5px] border-[#C62828] bg-black/70 p-1"
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


                {/* PRICE + ADD */}

                <div className="flex items-center justify-between">

                  <p className="font-dMSans text-xl font-bold text-[#D4A359]">
                    ₹{dish.price}
                  </p>


                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
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
            {/* =================================================
          MORE DISHES
      ================================================= */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-6 px-5 pb-16 sm:px-8 md:px-12 lg:px-20">

        {/* SECTION TITLE */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            MORE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        {/* FOOD GRID */}

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {foodDishes.map((dish) => (

            <article
              key={dish.name}
              onClick={() => openDish(dish)}
              className="flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
            >

              {/* IMAGE */}

              <img
                src={dish.image}
                className="h-40 w-full object-cover"
                alt={dish.name}
              />


              {/* CONTENT */}

              <div className="flex w-full flex-col gap-2.5 p-3.5">

                {/* NAME + TYPE */}

                <div className="flex items-center justify-between gap-2">

                  <p className="line-clamp-1 overflow-hidden text-ellipsis font-cormorantGaramond text-lg font-bold text-[#F5ECE3]">
                    {dish.name}
                  </p>


                  {/* VEG / NON VEG */}

                  {dish.type === "veg" ? (

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0 rounded-md border-[1.5px] border-[#2E7D32] bg-black/70 p-1"
                    >

                      <rect
                        x="0.75"
                        y="0.75"
                        width="14.5"
                        height="14.5"
                        rx="5.25"
                        fill="black"
                      />

                      <rect
                        x="0.75"
                        y="0.75"
                        width="14.5"
                        height="14.5"
                        rx="5.25"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="8"
                        cy="8"
                        r="3"
                        fill="#2E7D32"
                      />

                    </svg>

                  ) : (

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0 rounded-md border-[1.5px] border-[#C62828] bg-black/70 p-1"
                    >

                      <rect
                        x="0.75"
                        y="0.75"
                        width="14.5"
                        height="14.5"
                        rx="5.25"
                        fill="black"
                      />

                      <rect
                        x="0.75"
                        y="0.75"
                        width="14.5"
                        height="14.5"
                        rx="5.25"
                        stroke="#C62828"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="8"
                        cy="8"
                        r="3"
                        fill="#C62828"
                      />

                    </svg>

                  )}

                </div>


                {/* DESCRIPTION */}

                <p className="line-clamp-1 overflow-hidden text-ellipsis font-dMSans text-xs leading-[1.3em] text-[#A8978F]">
                  {dish.description}
                </p>


                {/* PRICE + ADD */}

                <div className="flex items-center justify-between">

                  <p className="font-dMSans text-base font-bold text-[#D4A359]">
                    ₹{dish.price}
                  </p>


                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openDish(dish);
                    }}
                    className="rounded-md border border-[#D4A359] bg-[#261D1A] px-3.5 py-1.5 transition-all duration-300 hover:bg-[#D4A359]"
                  >

                    <p className="font-dMSans text-[11px] font-bold text-[#D4A359]">
                      ADD TO CART
                    </p>

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>



      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="flex w-full flex-col items-start gap-12 bg-[#130F0C] px-5 pt-20 pb-10 sm:px-8 md:px-12 lg:px-20">

        {/* TOP FOOTER */}

        <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">

          {/* BRAND */}

          <div className="flex w-full max-w-[360px] flex-col items-start gap-4">

            <p className="font-cormorantGaramond text-[28px] font-bold text-[#D4A359]">
              Bammagari Ruchulu
            </p>

            <p className="font-dMSans text-sm leading-[1.6em] text-[#A8978F]">
              Bringing generations-old Telugu heritage recipes directly to your
              modern tables with love, pure native ghee, and authentic local
              spices.
            </p>

          </div>


          {/* LINKS */}

          <div className="flex w-full flex-col items-start gap-10 sm:flex-row sm:gap-16 lg:w-fit">

            {/* EXPLORE */}

            <div className="flex flex-col items-start gap-4">

              <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                Explore
              </p>

              <p className="cursor-pointer font-dMSans text-sm text-[#A8978F] transition-colors hover:text-[#D4A359]">
                Our Heritage
              </p>

              <p className="cursor-pointer font-dMSans text-sm text-[#A8978F] transition-colors hover:text-[#D4A359]">
                Bamma Specials
              </p>

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


        {/* BOTTOM FOOTER */}

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">

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