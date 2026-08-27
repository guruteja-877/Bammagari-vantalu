import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// =========================
// SIGNATURE IMAGES
// =========================

import Sigimage from "./Gunturimages/Sigimage.png";
import Sigimage1 from "./Gunturimages/Sigimage(1).png";
import Sigimage2 from "./Gunturimages/Sigimage(2).png";

// =========================
// FOOD IMAGES
// =========================

import Foodimage from "./Gunturimages/Foodimage.png";
import Foodimage1 from "./Gunturimages/Foodimage(1).png";
import Foodimage2 from "./Gunturimages/Foodimage(2).png";
import Foodimage3 from "./Gunturimages/Foodimage(3).png";
import Foodimage4 from "./Gunturimages/Foodimage(4).png";
import Foodimage5 from "./Gunturimages/Foodimage(5).png";
import Foodimage6 from "./Gunturimages/Foodimage(6).png";
import Foodimage7 from "./Gunturimages/Foodimage(7).png";


// =========================
// SIGNATURE DISHES
// =========================

const signatureDishes = [
  {
    id: "guntur-chicken",
    name: "Guntur Chicken",
    image: Sigimage,
    price: 300,
    type: "non-veg",
    description:
      "Fiery country chicken tossed with the famous hot Guntur red chilies.",
  },

  {
    id: "guntur-mutton-fry",
    name: "Guntur Mutton Fry",
    image: Sigimage1,
    price: 380,
    type: "non-veg",
    description:
      "Slow roasted tender mutton chunks coated in high-heat aromatic dry masalas.",
  },

  {
    id: "mirapakaya-bajji",
    name: "Mirapakaya Bajji",
    image: Sigimage2,
    price: 120,
    type: "veg",
    description:
      "Spiced batter-fried whole green chilies served with raw peanut chutney.",
  },
];


// =========================
// MORE FOOD DISHES
// =========================

const foodDishes = [
  {
    id: "gongura-chicken",
    name: "Gongura Chicken",
    image: Foodimage,
    price: 320,
    type: "non-veg",
    description:
      "Tender chicken cooked with tangy Gongura leaves and traditional Guntur spices.",
  },

  {
    id: "guntur-chilli-chicken",
    name: "Guntur Chilli Chicken",
    image: Foodimage1,
    price: 300,
    type: "non-veg",
    description:
      "Spicy chicken prepared with authentic Guntur red chillies and aromatic spices.",
  },

  {
    id: "guntur-mutton-curry",
    name: "Guntur Mutton Curry",
    image: Foodimage2,
    price: 380,
    type: "non-veg",
    description:
      "Tender mutton slowly cooked with traditional Guntur spices and rich masala.",
  },

  {
    id: "natukodi-pulusu",
    name: "Natu Kodi Pulusu",
    image: Foodimage3,
    price: 350,
    type: "non-veg",
    description:
      "Traditional country chicken curry prepared with spices, tamarind and fresh herbs.",
  },

  {
    id: "guntur-prawn-curry",
    name: "Guntur Prawn Curry",
    image: Foodimage4,
    price: 360,
    type: "non-veg",
    description:
      "Juicy prawns cooked in a fiery Guntur-style masala with aromatic spices.",
  },

  {
    id: "gutti-vankaya",
    name: "Gutti Vankaya",
    image: Foodimage5,
    price: 220,
    type: "veg",
    description:
      "Baby brinjals stuffed with a traditional spicy peanut and sesame masala.",
  },

  {
    id: "guntur-pappu",
    name: "Guntur Pappu",
    image: Foodimage6,
    price: 160,
    type: "veg",
    description:
      "Comforting lentils cooked with traditional spices and served with steamed rice.",
  },

  {
    id: "guntur-special-meals",
    name: "Guntur Special Meals",
    image: Foodimage7,
    price: 260,
    type: "veg",
    description:
      "Traditional Guntur-style meal featuring rice, dal, curries, chutneys and accompaniments.",
  },
];


// =========================
// ALL DISHES
// =========================

const allDishes = [...signatureDishes, ...foodDishes];


// =========================
// GUNTUR PAGE
// =========================

export default function Guntur() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // =========================
  // FILTER DISHES
  // =========================

  const filteredDishes = useMemo(() => {
    return allDishes.filter((dish) => {
      const matchesCategory =
        category === "all" || dish.type === category;

      const matchesSearch = dish.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);


  // =========================
  // OPEN DISH CARD
  // =========================

  const openDish = (dish) => {
    navigate(
      `/menu/all-regions/guntur-cuisine/guntur-card/${dish.id}`,
      {
        state: dish,
      }
    );
  };


  return (
    <main className="min-h-screen w-full bg-[#110D0B] text-[#F5ECE3]">

      {/* =========================
          HERO
      ========================== */}

      <section className="flex w-full flex-col items-center justify-center px-5 pb-8 pt-14 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Guntur Specials
          </p>

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

        </div>


        <h1 className="mt-4 text-center font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Guntur Cuisine
        </h1>


        <p className="mt-4 max-w-[720px] text-center font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Home of the legendary red hot chillies. Experience the fiercest
          spice levels in authentic Guntur cuisine.
        </p>

      </section>


      {/* =========================
          SEARCH
      ========================== */}

      <section className="flex w-full justify-center px-5 pb-6 sm:px-8 md:px-12 lg:px-20">

        <div className="flex h-[52px] w-full max-w-[640px] items-center gap-3 rounded-[26px] border border-[#332520] bg-[#1A1411] px-[18px]">

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 18L13.66 13.66M15.9999 7.99993C15.9999 12.4182 12.4182 15.9999 7.99993 15.9999C3.58169 15.9999 0 12.4182 0 7.99993C0 3.58169 3.58169 0 7.99993 0C12.4182 0 15.9999 3.58169 15.9999 7.99993Z"
              stroke="#D4A359"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dishes..."
            className="w-full bg-transparent font-dMSans text-[15px] text-[#F5ECE3] outline-none placeholder:text-[#A8978F]"
          />

        </div>

      </section>


      {/* =========================
          CATEGORY TABS
      ========================== */}

      <section className="flex w-full justify-center px-5 pb-10 sm:px-8 md:px-12 lg:px-20">

        <div className="flex flex-wrap justify-center gap-3">

          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`cursor-pointer rounded-[20px] px-6 py-2.5 font-dMSans text-xs font-bold transition-all ${
              category === "all"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "border border-[#332520] bg-[#1A1411] text-[#F5ECE3] hover:border-[#D4A359]"
            }`}
          >
            ALL
          </button>


          <button
            type="button"
            onClick={() => setCategory("veg")}
            className={`flex cursor-pointer items-center gap-1.5 rounded-[20px] px-5 py-2.5 font-dMSans text-xs font-bold transition-all ${
              category === "veg"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "border border-[#332520] bg-[#1A1411] text-[#F5ECE3] hover:border-[#D4A359]"
            }`}
          >
            VEG

            <span className="flex h-[10px] w-[10px] items-center justify-center rounded bg-[#E8F5E9]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#2E7D32]" />
            </span>

          </button>


          <button
            type="button"
            onClick={() => setCategory("non-veg")}
            className={`flex cursor-pointer items-center gap-1.5 rounded-[20px] px-5 py-2.5 font-dMSans text-xs font-bold transition-all ${
              category === "non-veg"
                ? "bg-[#D4A359] text-[#130F0C]"
                : "border border-[#332520] bg-[#1A1411] text-[#F5ECE3] hover:border-[#D4A359]"
            }`}
          >
            NON-VEG

            <span className="flex h-[10px] w-[10px] items-center justify-center rounded bg-[#FFEBEE]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#C62828]" />
            </span>

          </button>

        </div>

      </section>


      {/* =========================
          SIGNATURE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-12 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            SIGNATURE DISHES
          </h2>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>


        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {signatureDishes
            .filter((dish) => {
              const matchesCategory =
                category === "all" || dish.type === category;

              const matchesSearch = dish.name
                .toLowerCase()
                .includes(search.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map((dish) => (

              <article
                key={dish.id}
                onClick={() => openDish(dish)}
                className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute right-4 top-4 flex h-[18px] w-[18px] items-center justify-center rounded-md border-[1.5px] ${
                      dish.type === "veg"
                        ? "border-[#2E7D32] bg-[#000000B3]"
                        : "border-[#C62828] bg-[#000000B3]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        dish.type === "veg"
                          ? "bg-[#2E7D32]"
                          : "bg-[#C62828]"
                      }`}
                    />
                  </span>

                </div>


                <div className="flex flex-col gap-3 p-5">

                  <h3 className="font-cormorantGaramond text-[22px] font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h3>

                  <p className="h-10 overflow-hidden font-dMSans text-sm leading-[1.4em] text-[#A8978F]">
                    {dish.description}
                  </p>


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
                      className="cursor-pointer rounded-lg border border-[#D4A359] bg-[#261D1A] px-5 py-2.5 font-dMSans text-[13px] font-bold text-[#D4A359] transition-all hover:bg-[#D4A359] hover:text-[#130F0C]"
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
          MORE DISHES
      ========================== */}

      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-20 sm:px-8 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">

          <div className="h-px w-5 bg-[#D4A359]" />

          <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            MORE GUNTUR SPECIALS
          </h2>

          <div className="h-px w-5 bg-[#D4A359]" />

        </div>


        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {foodDishes
            .filter((dish) => {
              const matchesCategory =
                category === "all" || dish.type === category;

              const matchesSearch = dish.name
                .toLowerCase()
                .includes(search.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map((dish) => (

              <article
                key={dish.id}
                onClick={() => openDish(dish)}
                className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute right-4 top-4 flex h-[18px] w-[18px] items-center justify-center rounded-md border-[1.5px] ${
                      dish.type === "veg"
                        ? "border-[#2E7D32] bg-[#000000B3]"
                        : "border-[#C62828] bg-[#000000B3]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        dish.type === "veg"
                          ? "bg-[#2E7D32]"
                          : "bg-[#C62828]"
                      }`}
                    />
                  </span>

                </div>


                <div className="flex flex-col gap-3 p-4">

                  <h3 className="font-cormorantGaramond text-xl font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h3>

                  <p className="line-clamp-2 min-h-[40px] font-dMSans text-[13px] leading-[1.4em] text-[#A8978F]">
                    {dish.description}
                  </p>


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
                      className="cursor-pointer rounded-lg border border-[#D4A359] bg-[#261D1A] px-4 py-2 font-dMSans text-xs font-bold text-[#D4A359] transition-all hover:bg-[#D4A359] hover:text-[#130F0C]"
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </article>

            ))}

        </div>


        {/* NO RESULTS */}

        {filteredDishes.length === 0 && (

          <div className="py-16 text-center">

            <p className="font-cormorantGaramond text-3xl font-bold text-[#D4A359]">
              No dishes found
            </p>

            <p className="mt-2 font-dMSans text-sm text-[#A8978F]">
              Try another search or category.
            </p>

          </div>

        )}

      </section>


      {/* =========================
          BACK TO REGIONS
      ========================== */}

      <div className="flex w-full justify-center pb-16">

        <button
          type="button"
          onClick={() => navigate("/menu/all-regions")}
          className="cursor-pointer rounded-full border border-[#D4A359] bg-[#1A1411] px-8 py-3.5 font-dMSans text-sm font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
        >
          ← BACK TO ALL REGIONS
        </button>

      </div>

    </main>
  );
}