import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// =========================
// COASTAL ANDHRA IMAGES
// =========================

import Sigimage from "./CoastalAndhraimages/Sigimage.png";
import Sigimage1 from "./CoastalAndhraimages/Sigimage(1).png";
import Sigimage2 from "./CoastalAndhraimages/Sigimage(2).png";

import FoodImage from "./CoastalAndhraimages/FoodImage.png";
import FoodImage1 from "./CoastalAndhraimages/FoodImage(1).png";
import FoodImage2 from "./CoastalAndhraimages/FoodImage(2).png";
import FoodImage3 from "./CoastalAndhraimages/FoodImage(3).png";
import FoodImage4 from "./CoastalAndhraimages/FoodImage(4).png";
import FoodImage5 from "./CoastalAndhraimages/FoodImage(5).png";
import FoodImage6 from "./CoastalAndhraimages/FoodImage(6).png";
import FoodImage7 from "./CoastalAndhraimages/FoodImage(7).png";


// =========================
// DISH DATA
// =========================

const dishes = {

  "chepala-pulusu": {
    name: "Chepala Pulusu",
    image: Sigimage,
    price: 300,
    type: "NON-VEG",
    prepTime: "25 mins",
    description:
      "Traditional tangy and spicy fish stew cooked with raw mango slices and authentic Coastal Andhra spices.",
    about:
      "A signature Coastal Andhra fish preparation made with fresh fish, tamarind, raw mango and native spices. Slow cooking allows the flavours to develop into a rich, tangy and spicy curry.",
    ingredients: [
      "Fresh Fish",
      "Tamarind",
      "Raw Mango",
      "Onion",
      "Green Chilli",
      "Garlic",
      "Ginger",
      "Traditional Spices",
      "Cold-Pressed Oil",
    ],
  },


  "prawn-curry": {
    name: "Prawn Curry",
    image: Sigimage1,
    price: 340,
    type: "NON-VEG",
    prepTime: "30 mins",
    description:
      "Godavari special tiger prawns simmered in aromatic grated coconut curry.",
    about:
      "A rich coastal prawn curry inspired by the flavours of the Godavari region. Fresh prawns are cooked with coconut, aromatic spices and a traditional masala base.",
    ingredients: [
      "Tiger Prawns",
      "Fresh Coconut",
      "Onion",
      "Tomato",
      "Green Chilli",
      "Garlic",
      "Ginger",
      "Curry Leaves",
      "Traditional Spices",
    ],
  },


  "coastal-andhra-meals": {
    name: "Coastal Andhra Meals",
    image: Sigimage2,
    price: 260,
    type: "VEG",
    prepTime: "20 mins",
    description:
      "A magnificent thali featuring white rice, sambar, rasam and fresh coastal-style vegetable curries.",
    about:
      "A traditional Coastal Andhra meal bringing together steamed rice, comforting lentil preparations, rasam, vegetables and authentic regional flavours.",
    ingredients: [
      "Steamed Rice",
      "Toor Dal",
      "Tamarind",
      "Seasonal Vegetables",
      "Green Chilli",
      "Curry Leaves",
      "Mustard Seeds",
      "Traditional Spices",
    ],
  },


  "andhra-chicken-curry": {
    name: "Andhra Chicken Curry",
    image: FoodImage2,
    price: 320,
    type: "NON-VEG",
    prepTime: "35 mins",
    description:
      "Country-style chicken curry prepared with fiery Andhra spices and fresh herbs.",
    about:
      "A rustic chicken curry prepared with traditional Andhra spices, onion, ginger, garlic and fresh herbs.",
    ingredients: [
      "Chicken",
      "Onion",
      "Tomato",
      "Green Chilli",
      "Ginger",
      "Garlic",
      "Curry Leaves",
      "Andhra Spices",
    ],
  },


  "gutti-vankaya": {
    name: "Gutti Vankaya",
    image: FoodImage3,
    price: 220,
    type: "VEG",
    prepTime: "25 mins",
    description:
      "Stuffed baby eggplants cooked slowly in a rich traditional Andhra masala.",
    about:
      "Tender baby eggplants are stuffed with a roasted spice mixture and slow cooked until they absorb the rich masala.",
    ingredients: [
      "Baby Eggplant",
      "Peanuts",
      "Sesame",
      "Coconut",
      "Onion",
      "Garlic",
      "Red Chilli",
      "Traditional Spices",
    ],
  },


  "avakaya-annam": {
    name: "Avakaya Annam",
    image: FoodImage4,
    price: 180,
    type: "VEG",
    prepTime: "15 mins",
    description:
      "Steamed rice mixed with authentic Andhra mango pickle and traditional spices.",
    about:
      "A simple and flavourful Andhra favourite combining soft steamed rice with bold homemade mango pickle.",
    ingredients: [
      "Steamed Rice",
      "Raw Mango",
      "Red Chilli",
      "Mustard",
      "Sesame Oil",
      "Salt",
    ],
  },


  "andhra-kodi-vepudu": {
    name: "Andhra Kodi Vepudu",
    image: FoodImage5,
    price: 330,
    type: "NON-VEG",
    prepTime: "30 mins",
    description:
      "Spicy dry chicken preparation tossed with roasted spices and curry leaves.",
    about:
      "A fiery dry chicken preparation made with roasted spices, curry leaves and traditional Andhra seasoning.",
    ingredients: [
      "Chicken",
      "Onion",
      "Curry Leaves",
      "Green Chilli",
      "Garlic",
      "Ginger",
      "Red Chilli",
      "Roasted Spices",
    ],
  },


  "pootharekulu": {
    name: "Pootharekulu",
    image: FoodImage6,
    price: 160,
    type: "VEG",
    prepTime: "10 mins",
    description:
      "Delicate traditional sweet layered with rice paper, ghee and powdered sugar.",
    about:
      "A delicate Andhra sweet made from paper-thin rice layers combined with ghee and powdered sugar.",
    ingredients: [
      "Rice Paper",
      "Ghee",
      "Sugar",
      "Cardamom",
    ],
  },


  "gongura-pachadi": {
    name: "Gongura Pachadi",
    image: FoodImage7,
    price: 140,
    type: "VEG",
    prepTime: "15 mins",
    description:
      "Classic Andhra sorrel-leaf pickle with red chillies and traditional seasoning.",
    about:
      "A traditional Andhra chutney made from fresh gongura leaves, red chillies and aromatic tempering.",
    ingredients: [
      "Gongura Leaves",
      "Red Chilli",
      "Garlic",
      "Mustard Seeds",
      "Cumin",
      "Sesame Oil",
      "Salt",
    ],
  },

};


// =========================
// COMPONENT
// =========================

export default function CoastalAndhraCard() {

  const navigate = useNavigate();

  const { dishName } = useParams();

  const [quantity, setQuantity] = useState(1);


  // =========================
  // FIND CURRENT DISH
  // =========================

  const currentDish =
    dishes[dishName] || dishes["chepala-pulusu"];


  // =========================
  // TOTAL PRICE
  // =========================

  const totalPrice =
    currentDish.price * quantity;


  // =========================
  // QUANTITY FUNCTIONS
  // =========================

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };


  const decreaseQuantity = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    const cartItem = {
      name: currentDish.name,
      price: currentDish.price,
      quantity: quantity,
      image: currentDish.image,
    };


    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];


    const existingIndex =
      existingCart.findIndex(
        (item) => item.name === currentDish.name
      );


    if (existingIndex !== -1) {

      existingCart[existingIndex].quantity += quantity;

    } else {

      existingCart.push(cartItem);

    }


    localStorage.setItem(
      "cartItems",
      JSON.stringify(existingCart)
    );


    navigate("/cart");
  };


  return (

    <main className="min-h-screen bg-[#130F0C]">

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-5 py-10 sm:px-8 md:px-12 lg:px-20">


        {/* =========================
            BACK BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() =>
            navigate("/menu/all-regions/coastal-andhra")
          }
          className="flex w-fit cursor-pointer items-center gap-2 font-dMSans text-sm font-semibold text-[#D4A359] transition-all hover:text-[#E5C65A]"
        >
          ← BACK TO COASTAL ANDHRA
        </button>


        {/* =========================
            DISH DETAILS
        ========================== */}

        <div className="flex w-full flex-col gap-10 lg:flex-row">


          {/* =========================
              IMAGE
          ========================== */}

          <div className="w-full lg:w-1/2">

            <div className="overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411]">

              <img
                src={currentDish.image}
                alt={currentDish.name}
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

            </div>

          </div>


          {/* =========================
              DETAILS
          ========================== */}

          <div className="flex w-full flex-col items-start gap-6 lg:w-1/2">


            {/* DISH TYPE */}

            <div className="flex items-center gap-3">

              <span
                className={`flex h-[18px] w-[18px] items-center justify-center rounded-md border-[1.5px] ${
                  currentDish.type === "VEG"
                    ? "border-[#2E7D32]"
                    : "border-[#C62828]"
                } bg-black/70`}
              >

                <span
                  className={`h-[7px] w-[7px] rounded-full ${
                    currentDish.type === "VEG"
                      ? "bg-[#2E7D32]"
                      : "bg-[#C62828]"
                  }`}
                />

              </span>


              <p className="font-dMSans text-xs font-bold text-[#A8978F]">
                {currentDish.type}
              </p>

            </div>


            {/* DISH NAME */}

            <h1 className="font-cormorantGaramond text-4xl font-bold text-[#F5ECE3] sm:text-5xl">
              {currentDish.name}
            </h1>


            {/* PRICE */}

            <p className="font-dMSans text-2xl font-bold text-[#D4A359]">
              ₹{currentDish.price}
            </p>


            {/* DESCRIPTION */}

            <p className="max-w-[650px] font-dMSans text-base leading-[1.7em] text-[#A8978F]">
              {currentDish.description}
            </p>


            {/* DIVIDER */}

            <div className="h-px w-full bg-[#332520]" />


            {/* QUANTITY */}

            <div className="flex w-full items-center justify-between">

              <p className="font-dMSans text-sm font-bold text-[#E5E3DC]">
                Quantity
              </p>


              <div className="flex items-center gap-5 rounded-[30px] border border-[#3A3428] bg-[#1E1D1B] px-4 py-2">


                {/* MINUS */}

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


                {/* NUMBER */}

                <p className="min-w-[20px] text-center font-dMSans text-base font-bold text-[#E5E3DC]">
                  {quantity}
                </p>


                {/* PLUS */}

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[14px] bg-[#D4AF37] text-black transition-all hover:bg-[#E5C65A]"
                >
                  +
                </button>

              </div>

            </div>


            {/* =========================
                ADD TO CART
            ========================== */}

            <div className="flex w-full items-center gap-4">

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#D4AF37] py-[18px] transition-all duration-300 hover:bg-[#E5C65A]"
              >

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M1.70801 1.70801H3.37467L5.59134 12.0585C5.67266 12.4376 5.88357 12.7765 6.18777 13.0168C6.49197 13.2571 6.87043 13.3839 7.25801 13.3753H15.408C15.7873 13.3746 16.1551 13.2447 16.4505 13.0068C16.746 12.7689 16.9515 12.4373 17.033 12.0669L18.408 5.87488H4.26634M7.49984 17.5006C7.49984 17.9609 7.12674 18.334 6.6665 18.334C6.20627 18.334 5.83317 17.9609 5.83317 17.5006C5.83317 17.0404 6.20627 16.6673 6.6665 16.6673C7.12674 16.6673 7.49984 17.0404 7.49984 17.5006ZM16.6665 17.5006C16.6665 17.9609 16.2934 18.334 15.8332 18.334C15.3729 18.334 14.9998 17.9609 14.9998 17.5006C14.9998 17.0404 15.3729 16.6673 15.8332 16.6673C16.2934 16.6673 16.6665 17.0404 16.6665 17.5006Z"
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
                    d="M2.96723 6.38385C2.33664 7.30078 1.99904 8.38741 1.99902 9.50022C1.99902 11.8002 3.49914 13.5003 4.99925 15.0003L10.5077 20.3323C10.6967 20.544 10.9286 20.7129 11.188 20.828C11.4474 20.9432 11.7283 21.0018 12.0121 21C12.2959 20.9982 12.576 20.936 12.8339 20.8176C13.0918 20.6992 13.3216 20.5273 13.5079 20.3133L19.0003 15.0003C20.5004 13.5003 22.0006 11.7902 22.0006 9.50022C22.0059 8.38496 21.6714 7.29454 21.0416 6.37409C20.4118 5.45363 19.5166 4.74679 18.4752 4.34765C17.4337 3.94851 16.2954 3.876 15.2117 4.13977C14.128 4.40353 13.1503 4.99107 12.4088 5.82418C12.3564 5.88019 12.2931 5.92485 12.2227 5.95538C12.1524 5.98591 12.0765 6.00167 11.9998 6.00167C11.9231 6.00167 11.8472 5.98591 11.7769 5.95538C11.7065 5.92485 11.6432 5.88019 11.5908 5.82418C10.8469 4.99645 9.8695 4.41381 8.78756 4.15321C7.70562 3.89261 6.57008 3.9663 5.5309 4.36457C4.49173 4.76283 3.59782 5.46692 2.96723 6.38385Z"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                </svg>

              </button>

            </div>


            {/* EXTRA INFO */}

            <div className="flex w-full flex-wrap items-center gap-6 pt-2">

              <p className="font-dMSans text-[13px] text-[#9E9A90]">
                Prep time: {currentDish.prepTime}
              </p>

              <p className="font-dMSans text-[13px] text-[#9E9A90]">
                ✓ 100% Organic & Fresh
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="flex w-full items-center justify-center gap-4 py-3">

          <div className="h-px w-full bg-[#3A3428]" />

          <div className="h-3 w-3 shrink-0 rotate-45 border border-[#D4AF37]" />

          <div className="h-px w-full bg-[#3A3428]" />

        </div>
                {/* =========================
            ABOUT + INGREDIENTS
        ========================== */}

        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-20">


          {/* =========================
              ABOUT THIS DISH
          ========================== */}

          <div className="flex w-full flex-col items-start gap-4">

            <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
              ABOUT THIS DISH
            </h2>

            <p className="w-full font-dMSans text-base leading-[26px] text-[#E5E3DC]">
              {currentDish.about}
            </p>

          </div>


          {/* =========================
              INGREDIENTS
          ========================== */}

          <div className="flex w-full flex-col items-start gap-4">

            <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
              INGREDIENTS
            </h2>


            <div className="flex w-full flex-wrap items-start gap-2">

              {currentDish.ingredients.map((ingredient) => (

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
              ✓ Authentic Coastal Andhra recipe with no artificial color or
              preservatives.
            </p>

          </div>

        </div>


        {/* =========================
            FOOTER
        ========================== */}

        <footer className="mt-8 flex w-full flex-col items-start gap-12 bg-[#130F0C] px-5 pt-20 pb-10 sm:px-8 md:px-12 lg:px-20">

          {/* TOP FOOTER */}

          <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">


            {/* BRAND */}

            <div className="flex w-full max-w-[360px] flex-col items-start gap-4">

              <p className="font-cormorantGaramond text-[28px] font-bold text-[#D4A359]">
                Bammagari Ruchulu
              </p>

              <p className="font-dMSans text-sm leading-[1.6em] text-[#A8978F]">
                Bringing generations-old Telugu heritage recipes directly to
                your modern tables with love, pure native ghee, and authentic
                local spices.
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

      </div>

    </main>

  );

}