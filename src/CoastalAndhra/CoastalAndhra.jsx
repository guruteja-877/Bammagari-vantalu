import { useState } from "react";
import { useNavigate } from "react-router-dom";

// =========================
// SIGNATURE IMAGES
// =========================
import Sigimage from "./CoastalAndhraimages/Sigimage.png";
import Sigimage1 from "./CoastalAndhraimages/Sigimage(1).png";
import Sigimage2 from "./CoastalAndhraimages/Sigimage(2).png";

// =========================
// FOOD IMAGES
// =========================
import Foodimage from "./CoastalAndhraimages/Foodimage.png";
import Foodimage1 from "./CoastalAndhraimages/Foodimage(1).png";
import Foodimage2 from "./CoastalAndhraimages/Foodimage(2).png";
import Foodimage3 from "./CoastalAndhraimages/Foodimage(3).png";
import Foodimage4 from "./CoastalAndhraimages/Foodimage(4).png";
import Foodimage5 from "./CoastalAndhraimages/Foodimage(5).png";
import Foodimage6 from "./CoastalAndhraimages/Foodimage(6).png";
import Foodimage7 from "./CoastalAndhraimages/Foodimage(7).png";
import Foodimage8 from "./CoastalAndhraimages/Foodimage(8).png";


// =========================
// FOOD DATA
// =========================
const foodDishes = [
  {
    name: "Andhra Fish Curry",
    description: "Spicy tamarind fish",
    price: 280,
    image: Foodimage,
    type: "nonveg",
  },
  {
    name: "Royyala Vepudu",
    description: "Crispy prawn fry",
    price: 340,
    image: Foodimage1,
    type: "nonveg",
  },
  {
    name: "Crab Masala",
    description: "Spicy crab curry",
    price: 380,
    image: Foodimage2,
    type: "nonveg",
  },
  {
    name: "Fish Fry",
    description: "Golden fried fish",
    price: 260,
    image: Foodimage3,
    type: "nonveg",
  },
  {
    name: "Prawn Fry",
    description: "Masala prawn fry",
    price: 320,
    image: Foodimage4,
    type: "nonveg",
  },
  {
    name: "Gongura Fish",
    description: "Tangy sorrel fish curry",
    price: 300,
    image: Foodimage5,
    type: "nonveg",
  },
  {
    name: "Andhra Chicken Curry",
    description: "Spicy chicken curry",
    price: 280,
    image: Foodimage6,
    type: "nonveg",
  },
  {
    name: "Pulihora",
    description: "Tamarind rice",
    price: 120,
    image: Foodimage7,
    type: "veg",
  },
  {
    name: "Avakaya Annam",
    description: "Mango pickle rice",
    price: 140,
    image: Foodimage8,
    type: "veg",
  },
];


// =========================
// SIGNATURE DATA
// =========================
const signatureDishes = [
  {
    name: "Chepala Pulusu",
    description:
      "Traditional tangy and spicy fish stew cooked with raw mango slices.",
    price: 300,
    image: Sigimage,
    type: "nonveg",
  },
  {
    name: "Prawn Curry",
    description:
      "Godavari special tiger prawns simmered in aromatic grated coconut curry.",
    price: 340,
    image: Sigimage1,
    type: "nonveg",
  },
  {
    name: "Coastal Andhra Meals",
    description:
      "A magnificent thali featuring white rice, sambar, rasam, and fresh seafood-style veg curries.",
    price: 260,
    image: Sigimage2,
    type: "veg",
  },
];


// =========================
// VEG / NON-VEG ICON
// =========================
function FoodTypeIcon({ type }) {
  const isVeg = type === "veg";

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[18px] w-[18px] rounded-md border-[1.5px] ${
        isVeg ? "border-[#2E7D32]" : "border-[#C62828]"
      } bg-black/70 p-1`}
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


// =========================
// DISH CARD
// =========================
function DishCard({ dish, onClick, signature = false }) {
  return (
    <article
      onClick={onClick}
      className={`flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359] ${
        signature ? "" : "rounded-xl"
      }`}
    >
      <img
        src={dish.image}
        className={`w-full object-cover ${
          signature ? "h-[220px]" : "h-40"
        }`}
        alt={dish.name}
      />

      <div
        className={`flex w-full flex-col ${
          signature ? "gap-3 p-5" : "gap-2.5 p-3.5"
        }`}
      >
        <div className="flex items-center justify-between">

          <h2
            className={`line-clamp-1 overflow-hidden font-cormorantGaramond font-bold text-[#F5ECE3] ${
              signature ? "text-[22px]" : "text-lg"
            }`}
          >
            {dish.name}
          </h2>

          <FoodTypeIcon type={dish.type} />

        </div>

        <p
          className={`overflow-hidden text-ellipsis font-dMSans text-[#A8978F] ${
            signature
              ? "h-10 text-sm leading-[1.4em]"
              : "line-clamp-1 text-xs leading-[1.3em]"
          }`}
        >
          {dish.description}
        </p>

        <div className="flex items-center justify-between">

          <p
            className={`font-dMSans font-bold text-[#D4A359] ${
              signature ? "text-xl" : "text-base"
            }`}
          >
            ₹{dish.price}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`border border-[#D4A359] bg-[#261D1A] font-dMSans font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C] ${
              signature
                ? "rounded-lg px-5 py-2.5 text-[13px]"
                : "rounded-md px-3.5 py-1.5 text-[11px]"
            }`}
          >
            ADD TO CART
          </button>

        </div>
      </div>
    </article>
  );
}


// =========================
// MAIN COMPONENT
// =========================
export default function CoastalAndhra() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");

  const filteredDishes =
    category === "all"
      ? foodDishes
      : foodDishes.filter((dish) => dish.type === category);

  const openDish = (dish) => {
    navigate(
      `/menu/all-regions/coastal-andhra-cuisine/coastal-andhra-card`,
      {
        state: {
          dish,
        },
      }
    );
  };

  return (
    <main className="relative min-h-screen w-full bg-[#130F0C]">

      {/* =========================
          HERO
      ========================== */}

      <section className="flex w-full flex-col items-center gap-4 px-5 pt-14 text-center sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Coastal Andhra Specials
          </p>

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

        </div>

        <h1 className="font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Coastal Andhra Cuisine
        </h1>

        <p className="w-full max-w-[720px] font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Rich sea-flavours highlighting tanginess from fresh raw-mangoes and
          tamarind, served with coastal warmth.
        </p>

      </section>


      {/* =========================
          SEARCH BAR
      ========================== */}

      <section className="flex w-full justify-center px-5 pt-10 sm:px-8 md:px-12 lg:px-20">

        <div className="flex h-[52px] w-full max-w-[640px] items-center gap-3 rounded-[26px] border border-[#332520] bg-[#1A1411] px-[18px]">

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

          <p className="font-dMSans text-[15px] text-[#A8978F]">
            Search dishes...
          </p>

        </div>

      </section>


      {/* =========================
          CATEGORY TABS
      ========================== */}

      <section className="flex w-full justify-center px-5 pt-6 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-[20px] px-6 py-2.5 font-dMSans text-xs font-bold ${
              category === "all"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "border border-[#332520] bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >
            ALL
          </button>

          <button
            type="button"
            onClick={() => setCategory("veg")}
            className={`flex items-center gap-1.5 rounded-[20px] border border-[#332520] px-5 py-2.5 font-dMSans text-xs font-bold ${
              category === "veg"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >
            VEG
            <span className="h-2.5 w-2.5 rounded bg-[#E8F5E9]">
              <span className="m-[3px] block h-1 w-1 rounded-full bg-[#2E7D32]" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCategory("nonveg")}
            className={`flex items-center gap-1.5 rounded-[20px] border border-[#332520] px-5 py-2.5 font-dMSans text-xs font-bold ${
              category === "nonveg"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "bg-[#1A1411] text-[#F5ECE3]"
            }`}
          >
            NON-VEG
            <span className="h-2.5 w-2.5 rounded bg-[#FFEBEE]">
              <span className="m-[3px] block h-1 w-1 rounded-full bg-[#C62828]" />
            </span>
          </button>

        </div>

      </section>


      {/* =========================
          SIGNATURE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-12 pt-10 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            SIGNATURE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {signatureDishes
            .filter(
              (dish) =>
                category === "all" || dish.type === category
            )
            .map((dish) => (
              <DishCard
                key={dish.name}
                dish={dish}
                signature
                onClick={() => openDish(dish)}
              />
            ))}

        </div>

      </section>
            {/* =========================
          MORE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-5 pb-20 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <p className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            MORE DISHES
          </p>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.name}
              dish={dish}
              onClick={() => openDish(dish)}
            />
          ))}

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

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