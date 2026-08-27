import { useState } from "react";

import Foodimage from "./Nelloreimages/Foodimage.png";
import Foodimage1 from "./Nelloreimages/Foodimage(1).png";
import Foodimage2 from "./Nelloreimages/Foodimage(2).png";
import Foodimage3 from "./Nelloreimages/Foodimage(3).png";
import Foodimage4 from "./Nelloreimages/Foodimage(4).png";
import Foodimage5 from "./Nelloreimages/Foodimage(5).png";
import Foodimage6 from "./Nelloreimages/Foodimage(6).png";
import Foodimage7 from "./Nelloreimages/Foodimage(7).png";


// ======================================================
// DISH DATA
// ======================================================

const dishes = [
  {
    name: "Nellore Chepala Pulusu",
    image: Foodimage,
    price: "₹320",
    type: "NON-VEG",
    description:
      "The definitive sour-and-spicy Nellore fish curry cooked with raw mango pulp.",
  },

  {
    name: "Royyala Curry",
    image: Foodimage1,
    price: "₹360",
    type: "NON-VEG",
    description:
      "Succulent shrimp prepared in a thick, tangy onion-tamarind gravy.",
  },

  {
    name: "Nellore Fish Fry",
    image: Foodimage2,
    price: "₹280",
    type: "NON-VEG",
    description:
      "Crispy pan-fried fish marinated with ginger, garlic and native spices.",
  },

  {
    name: "Nellore Chicken Curry",
    image: Foodimage3,
    price: "₹300",
    type: "NON-VEG",
    description:
      "Tender chicken slow-cooked with traditional Nellore spices and onion masala.",
  },

  {
    name: "Gongura Chicken",
    image: Foodimage4,
    price: "₹320",
    type: "NON-VEG",
    description:
      "Spicy chicken cooked with tangy gongura leaves and authentic Andhra spices.",
  },

  {
    name: "Nellore Royyala Vepudu",
    image: Foodimage5,
    price: "₹350",
    type: "NON-VEG",
    description:
      "Crispy prawns tossed with garlic, curry leaves and aromatic native spices.",
  },

  {
    name: "Nellore Vegetable Curry",
    image: Foodimage6,
    price: "₹180",
    type: "VEG",
    description:
      "Seasonal vegetables cooked in a homestyle Nellore-style spice gravy.",
  },

  {
    name: "Nellore Special Meals",
    image: Foodimage7,
    price: "₹260",
    type: "VEG",
    description:
      "Traditional Andhra meals served with rice, dal, curries, rasam and sides.",
  },
];


// ======================================================
// FOOD TYPE ICON
// ======================================================

function FoodTypeIcon({ type }) {
  const isVeg = type === "VEG";

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[18px] w-[18px] rounded-md border-[1.5px] ${
        isVeg ? "border-[#2E7D32]" : "border-[#C62828]"
      }`}
    >
      <rect
        x="0.75"
        y="0.75"
        width="16.5"
        height="16.5"
        rx="5.25"
        fill="black"
        fillOpacity="0.7"
      />

      <rect
        x="0.75"
        y="0.75"
        width="16.5"
        height="16.5"
        rx="5.25"
        stroke={isVeg ? "#2E7D32" : "#C62828"}
        strokeWidth="1.5"
      />

      <circle
        cx="9"
        cy="9"
        r="4"
        fill={isVeg ? "#2E7D32" : "#C62828"}
      />
    </svg>
  );
}


// ======================================================
// NELLORE CARD
// ======================================================

export default function NelloreCard() {

  const [cartMessage, setCartMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");


  // ====================================================
  // ADD TO CART
  // ====================================================

  const handleAddToCart = (dish) => {

    setCartMessage(`${dish.name} added to cart`);

    setTimeout(() => {
      setCartMessage("");
    }, 2500);
  };


  // ====================================================
  // FILTER DISHES
  // ====================================================

  const filteredDishes = dishes.filter((dish) => {

    const matchesCategory =
      activeCategory === "ALL" ||
      dish.type === activeCategory;

    const matchesSearch =
      dish.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-[#130F0C]">

      {/* ==================================================
          SUCCESS POPUP
      ================================================== */}

      {cartMessage && (
        <div className="fixed right-6 top-6 z-[100] rounded-xl border border-[#D4A359] bg-[#1A1411] px-6 py-4 shadow-2xl">

          <div className="flex items-center gap-3">

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2E7D32] text-white">
              ✓
            </div>

            <p className="font-dMSans text-sm font-bold text-[#F5ECE3]">
              {cartMessage}
            </p>

          </div>

        </div>
      )}


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="flex w-full flex-col items-center px-5 pb-8 pt-28">

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>

          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Nellore Specials
          </p>

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>

        </div>


        <h1 className="mt-4 font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Nellore Cuisine
        </h1>


        <p className="mt-4 max-w-[720px] text-center font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Celebrated for its distinct use of raw mangoes in spicy gravies and
          the legendary Nellore fish curries.
        </p>

      </section>


      {/* ==================================================
          SEARCH BAR
      ================================================== */}

      <section className="flex w-full justify-center px-5 pb-6">

        <div className="flex h-[52px] w-full max-w-[640px] items-center gap-3 rounded-[26px] border border-[#332520] bg-[#1A1411] px-[18px]">

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#D4A359"
              strokeWidth="2"
            />

            <path
              d="M13 13L17 17"
              stroke="#D4A359"
              strokeWidth="2"
              strokeLinecap="round"
            />

          </svg>


          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search dishes..."
            className="w-full bg-transparent font-dMSans text-[15px] text-[#F5ECE3] outline-none placeholder:text-[#A8978F]"
          />

        </div>

      </section>


      {/* ==================================================
          CATEGORY TABS
      ================================================== */}

      <section className="flex justify-center px-5 pb-12">

        <div className="flex flex-wrap justify-center gap-3">

          {/* ALL */}

          <button
            type="button"
            onClick={() => setActiveCategory("ALL")}
            className={`rounded-[20px] px-6 py-2.5 font-dMSans text-xs font-bold transition-all ${
              activeCategory === "ALL"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "border border-[#332520] bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >
            ALL
          </button>


          {/* VEG */}

          <button
            type="button"
            onClick={() => setActiveCategory("VEG")}
            className={`flex items-center gap-1.5 rounded-[20px] border px-5 py-2.5 font-dMSans text-xs font-bold transition-all ${
              activeCategory === "VEG"
                ? "border-[#D4A359] bg-[#D4A359] text-[#130F0C]"
                : "border-[#332520] bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >

            VEG

            <span className="flex h-[10px] w-[10px] items-center justify-center rounded bg-[#E8F5E9]">

              <span className="h-[6px] w-[6px] rounded-full bg-[#2E7D32]" />

            </span>

          </button>


          {/* NON VEG */}

          <button
            type="button"
            onClick={() => setActiveCategory("NON-VEG")}
            className={`flex items-center gap-1.5 rounded-[20px] border px-5 py-2.5 font-dMSans text-xs font-bold transition-all ${
              activeCategory === "NON-VEG"
                ? "border-[#D4A359] bg-[#D4A359] text-[#130F0C]"
                : "border-[#332520] bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >

            NON-VEG

            <span className="flex h-[10px] w-[10px] items-center justify-center rounded bg-[#FFEBEE]">

              <span className="h-[6px] w-[6px] rounded-full bg-[#C62828]" />

            </span>

          </button>

        </div>

      </section>


      {/* ==================================================
          DISHES
      ================================================== */}

      <main className="mx-auto w-full max-w-[1400px] px-5 pb-20 sm:px-8 md:px-12 lg:px-20">

        <div className="mb-8 flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            NELLORE DISHES
          </h2>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        {/* ==================================================
            GRID
        ================================================== */}

        {filteredDishes.length > 0 ? (

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {filteredDishes.map((dish) => (

              <article
                key={dish.name}
                className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
              >

                {/* IMAGE */}

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-[220px] w-full object-cover"
                />


                {/* CONTENT */}

                <div className="flex w-full flex-col gap-3 p-5">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="line-clamp-1 overflow-hidden text-ellipsis font-cormorantGaramond text-[22px] font-bold text-[#F5ECE3]">
                      {dish.name}
                    </h3>

                    <FoodTypeIcon type={dish.type} />

                  </div>


                  <p className="h-10 overflow-hidden text-ellipsis font-dMSans text-sm leading-[1.4em] text-[#A8978F]">
                    {dish.description}
                  </p>


                  <div className="flex items-center justify-between">

                    <p className="font-dMSans text-xl font-bold text-[#D4A359]">
                      {dish.price}
                    </p>


                    {/* ADD TO CART */}

                    <button
                      type="button"
                      onClick={() => handleAddToCart(dish)}
                      className="cursor-pointer rounded-lg border border-[#D4A359] bg-[#261D1A] px-5 py-2.5 font-dMSans text-[13px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* ==================================================
             NO RESULTS
          ================================================== */

          <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-[#332520] bg-[#1A1411]">

            <p className="font-dMSans text-sm text-[#A8978F]">
              No dishes found.
            </p>

          </div>

        )}

      </main>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="flex w-full flex-col gap-12 bg-[#130F0C] px-5 py-16 sm:px-8 md:px-12 lg:px-20">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          <div className="flex max-w-[360px] flex-col gap-4">

            <p className="font-cormorantGaramond text-[28px] font-bold text-[#D4A359]">
              Bammagari Ruchulu
            </p>

            <p className="font-dMSans text-sm leading-[1.6em] text-[#A8978F]">
              Bringing generations-old Telugu heritage recipes directly to
              your modern tables with love, pure native ghee, and authentic
              local spices.
            </p>

          </div>


          <div className="flex flex-wrap gap-16">

            <div className="flex flex-col gap-4">

              <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                Explore
              </p>

              <p className="font-dMSans text-sm text-[#A8978F]">
                Our Heritage
              </p>

              <p className="font-dMSans text-sm text-[#A8978F]">
                Bamma Specials
              </p>

            </div>


            <div className="flex flex-col gap-4">

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


        <div className="h-px w-full bg-[#332520]" />


        <div className="flex flex-col justify-between gap-3 md:flex-row">

          <p className="font-dMSans text-[13px] text-[#A8978F]">
            © 2026 Bammagari Ruchulu. All rights reserved.
          </p>

          <p className="font-dMSans text-[13px] text-[#A8978F]">
            Traditional, Organic, Prepared Just Like Home.
          </p>

        </div>

      </footer>

    </div>
  );
}