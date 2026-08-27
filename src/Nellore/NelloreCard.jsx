import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NelloreCard() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the selected dish from Nellore.jsx
  const dish = location.state;

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // If page is opened directly without selecting a dish
  if (!dish) {
    return (
      <main className="min-h-screen bg-[#110D0B] px-5 py-20 text-center">
        <h1 className="font-cormorantGaramond text-4xl font-bold text-[#D4A359]">
          Dish Not Found
        </h1>

        <p className="mt-4 font-dMSans text-[#A8978F]">
          Please select a dish from Nellore Cuisine.
        </p>

        <button
          type="button"
          onClick={() => navigate("/menu/all-regions/nellore")}
          className="mt-8 rounded-xl bg-[#D4AF37] px-8 py-4 font-dMSans font-bold text-[#111]"
        >
          GO TO NELLORE CUISINE
        </button>
      </main>
    );
  }

  // Price
  const price = Number(dish.price) || 0;

  // Total price
  const totalPrice = price * quantity;

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Add selected dish to cart
  const handleAddToCart = () => {
    navigate("/cart", {
      state: {
        name: dish.name,
        price: price,
        image: dish.image,
        description: dish.description,
        type: dish.type,
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
  };

  return (
    <main className="min-h-screen w-full bg-[#110D0B] px-5 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={() => navigate("/menu/all-regions/nellore")}
        className="mb-8 flex items-center gap-2 font-dMSans text-sm font-semibold text-[#D4A359] transition-all hover:text-[#E5C65A]"
      >
        ← BACK TO NELLORE
      </button>

      {/* =================================================
          MAIN DISH SECTION
      ================================================= */}

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row">

        {/* =================================================
            DISH IMAGE
        ================================================= */}

        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-[#3A3428] bg-[#1A1512]">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        {/* =================================================
            DISH DETAILS
        ================================================= */}

        <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2">

          {/* CATEGORY */}

          <p className="font-dMSans text-sm font-bold uppercase tracking-[3px] text-[#D4A359]">
            NELLORE SPECIAL
          </p>

          {/* TITLE */}

          <h1 className="font-cormorantGaramond text-5xl font-bold leading-tight text-[#F5ECE3]">
            {dish.name}
          </h1>

          {/* DESCRIPTION */}

          <p className="font-dMSans text-base leading-7 text-[#A8978F]">
            {dish.description}
          </p>

          {/* PRICE */}

          <p className="font-dMSans text-3xl font-bold text-[#D4A359]">
            ₹{price}
          </p>

          {/* =================================================
              QUANTITY
          ================================================= */}

          <div className="flex flex-col gap-3">

            <p className="font-dMSans text-sm font-semibold text-[#E5E3DC]">
              SELECT QUANTITY
            </p>

            <div className="flex w-fit items-center gap-5 rounded-[30px] border border-[#3A3428] bg-[#1E1D1B] px-4 py-2">

              {/* MINUS */}

              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xl text-[#E5E3DC] transition-all ${
                  quantity === 1
                    ? "cursor-not-allowed bg-[#22201E] opacity-50"
                    : "cursor-pointer bg-[#2A2825] hover:bg-[#3A3733]"
                }`}
              >
                −
              </button>

              {/* NUMBER */}

              <p className="min-w-[25px] text-center font-dMSans text-base font-bold text-[#E5E3DC]">
                {quantity}
              </p>

              {/* PLUS */}

              <button
                type="button"
                onClick={increaseQuantity}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#D4AF37] text-xl text-black transition-all hover:bg-[#E5C65A]"
              >
                +
              </button>

            </div>
          </div>

          {/* =================================================
              ADD TO CART
          ================================================= */}

          <div className="flex w-full items-center gap-4">

            {/* ADD TO CART */}

            <button
              type="button"
              onClick={handleAddToCart}
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
                  d="M1.70801 1.70801H3.37467L5.59134 12.0585C5.67266 12.4376 5.88357 12.7765 6.18777 13.0168C6.49197 13.2571 6.87043 13.3839 7.25801 13.3753H15.408C15.7873 13.3746 16.1551 13.2447 16.4505 13.0068C16.746 12.7689 16.9515 12.4373 17.033 12.0669L18.408 5.87488H4.26634M7.49984 17.5006C7.49984 17.9609 7.12674 18.334 6.6665 18.334C6.20627 18.334 5.83317 17.9609 5.83317 17.5006C5.83317 17.0404 6.20627 16.6673 6.6665 16.6673C7.12674 16.6673 7.49984 17.0404 7.49984 17.5006ZM16.6665 17.5006C16.6665 17.9609 16.2934 18.334 15.8332 18.334C15.3729 18.334 14.9998 17.5006 14.9998 17.5006C14.9998 17.0404 15.3729 17.5006 16.6673 15.8332 16.6673 16.2934 16.6673 16.6665 17.5006Z"
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

          {/* =================================================
              EXTRA INFO
          ================================================= */}

          <div className="flex flex-wrap items-center gap-6 pt-2">

            <p className="font-dMSans text-[13px] text-[#9E9A90]">
              Prep time: 30 mins
            </p>

            <p className="font-dMSans text-[13px] text-[#9E9A90]">
              ✓ Fresh & Authentic
            </p>

          </div>

        </div>
      </div>

      {/* =================================================
          DIVIDER
      ================================================= */}

      <div className="mx-auto mt-10 flex w-full max-w-[1200px] items-center justify-center gap-4 py-3">

        <div className="h-px w-full bg-[#3A3428]" />

        <div className="h-3 w-3 shrink-0 rotate-45 border border-[#D4AF37]" />

        <div className="h-px w-full bg-[#3A3428]" />

      </div>

      {/* =================================================
          ABOUT + INGREDIENTS
      ================================================= */}

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:gap-20">

        {/* ABOUT */}

        <div className="flex w-full flex-col gap-4">

          <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
            ABOUT THIS DISH
          </h2>

          <p className="font-dMSans text-base leading-[26px] text-[#E5E3DC]">
            {dish.description}
          </p>

        </div>

        {/* INGREDIENTS */}

        <div className="flex w-full flex-col gap-4">

          <h2 className="font-cormorantGaramond text-[28px] font-bold text-[#D4AF37]">
            INGREDIENTS
          </h2>

          <div className="flex w-full flex-wrap gap-2">

            {[
              "Fresh Fish",
              "Raw Mango",
              "Green Chilli",
              "Ginger",
              "Garlic",
              "Onion",
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
            ✓ Authentic Nellore recipe with traditional ingredients.
          </p>

        </div>

      </div>

    </main>
  );
}