import React from "react";
import Sigimage from "../Rayalaseema/Rayalaseemaimages/Sigimage.png";

export default function BammaSpecial() {
  const dishes = [
    {
      name: "Gongura Mutton",
      image: "/Dishimage.png",
      price: "₹399",
      type: "Non-Veg",
      description:
        "Tangy sorrel leaf mutton curry, slow-cooked with traditional spices.",
    },
    {
      name: "Ragi Sangati & Natu Kodi",
      image: "/Dishimage(1).png",
      price: "₹349",
      type: "Non-Veg",
      description:
        "Hand-pounded ragi balls served with country chicken curry.",
    },
    {
      name: "Bamma Special Chicken Curry",
      image: "/Dishimage(2).png",
      price: "₹329",
      type: "Non-Veg",
      description:
        "Our signature home-style chicken curry with aromatic spices.",
    },
    {
      name: "Nellore Chepala Pulusu",
      image: "/Dishimage(3).png",
      price: "₹379",
      type: "Non-Veg",
      description:
        "Tangy tamarind fish curry from the coastal Nellore region.",
    },
    {
      name: "Royyala Iguru",
      image: "/Dishimage(4).png",
      price: "₹449",
      type: "Non-Veg",
      description:
        "Spicy dry prawn fry with curry leaves and red chillies.",
    },
    {
      name: "Gutti Vankaya",
      image: "/Dishimage(5).png",
      price: "₹249",
      type: "Veg",
      description:
        "Stuffed brinjal curry with peanut and sesame masala.",
    },
    {
      name: "Andhra Chicken Fry",
      image: "/Dishimage(6).png",
      price: "₹299",
      type: "Non-Veg",
      description:
        "Crispy spice-rubbed chicken fry with fiery red chilli coating.",
    },
    {
      name: "Hyderabadi Biryani",
      image: "/Dishimage(7).png",
      price: "₹359",
      type: "Non-Veg",
      description:
        "Fragrant basmati rice layered with slow-cooked meat and saffron.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0C0806]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between border-b border-[rgba(255,255,255,0.10)] bg-[#0C0806] px-5 py-6 sm:px-8 md:px-12 lg:px-20">

        <div className="flex flex-col items-start">
          <p className="font-cormorantGaramond text-[28px] font-bold text-[#D59D3F]">
            Bammagari Ruchulu
          </p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">

          <div className="cursor-pointer">
            <p className="font-manrope text-sm font-medium text-[#FAF6F0]">
              Home
            </p>
          </div>

          <div className="cursor-pointer">
            <p className="font-manrope text-sm font-medium text-[#FAF6F0]">
              Our Menu
            </p>
          </div>

          <div className="flex cursor-pointer flex-col items-center gap-1">
            <p className="font-manrope text-sm font-semibold text-[#C8A960]">
              Bamma Specials
            </p>

            <div className="h-0.5 w-4 bg-[#C8A960]" />
          </div>

          <div className="cursor-pointer">
            <p className="font-manrope text-sm font-medium text-[#FAF6F0]">
              About Bamma
            </p>
          </div>

          <div className="cursor-pointer">
            <p className="font-manrope text-sm font-medium text-[#FAF6F0]">
              Offers
            </p>
          </div>

          <div className="cursor-pointer">
            <p className="font-manrope text-sm font-medium text-[#FAF6F0]">
              Contact
            </p>
          </div>

        </nav>

        <div className="flex items-center gap-3 sm:gap-6">

          {/* CART */}

          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[20px] border border-[rgba(250,243,224,0.70)]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53711 1.5372H3.03711L5.03211 10.8527C5.10529 11.1938 5.29511 11.4988 5.56889 11.7151C5.84267 11.9314 6.18329 12.0455 6.53211 12.0377H13.8671C14.2085 12.0372 14.5395 11.9202 14.8054 11.7061C15.0713 11.492 15.2562 11.1936 15.3296 10.8602L16.5671 5.28739H3.83961"
                stroke="#FAF3E0"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                cx="5.99976"
                cy="15.7506"
                r="0.75"
                stroke="#FAF3E0"
                strokeWidth="1.2"
              />

              <circle
                cx="14.2498"
                cy="15.7506"
                r="0.75"
                stroke="#FAF3E0"
                strokeWidth="1.2"
              />
            </svg>
          </button>

          {/* USER */}

          <button
            type="button"
            className="flex h-9 w-10 cursor-pointer items-center justify-center rounded-[20px] border border-[#DF9F28]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0836 12.25V11.0833C11.0836 10.4645 10.8378 9.871 10.4001 9.43342C9.96249 8.99583 9.36893 8.75 8.75002 8.75H5.24962C4.63071 8.75 4.03715 8.99583 3.59951 9.43342C3.16188 9.871 2.91602 10.4645 2.91602 11.0833V12.25M9.33342 4.08333C9.33342 5.372 8.28863 6.41667 6.99982 6.41667C5.711 6.41667 4.66622 5.372 4.66622 4.08333C4.66622 2.79467 5.711 1.75 6.99982 1.75C8.28863 1.75 9.33342 2.79467 9.33342 4.08333Z"
                stroke="#DF9F28"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>
      </header>


      {/* =====================================================
          PAGE TITLE
      ====================================================== */}

      <section className="absolute left-0 top-[104px] flex w-full flex-col items-center gap-4 bg-[#0C0806] px-5 py-16 sm:px-8 md:px-12 lg:px-20">

        <p className="font-instrumentSerif text-3xl text-[#D4AF37]">
          — BAMMA SPECIALS —
        </p>

        <p className="w-full max-w-[720px] text-center font-manrope text-lg leading-[1.6em] text-[#CBBFB7]">
          Bamma's most loved recipes, prepared with traditional flavours and
          homemade warmth.
        </p>

      </section>


      {/* =====================================================
          SIGNATURE SPOTLIGHT
      ====================================================== */}

      <section className="absolute left-0 top-[328px] flex w-full flex-col items-center gap-10 bg-[#17100D] px-5 py-16 sm:px-8 md:px-12 lg:flex-row lg:gap-[60px] lg:px-20">

        {/* IMAGE */}

        <div className="flex h-[360px] w-[360px] shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-[#C8A960] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]">

          <img
            src={Sigimage}
            className="h-full w-full object-cover"
            alt="Gongura Mutton"
          />

        </div>


        {/* CONTENT */}

        <div className="flex w-full flex-col items-start gap-6">

          <div className="flex flex-wrap items-center gap-3">

            {/* NON VEG */}

            <div className="flex items-center gap-1.5 rounded-md border border-[#E53E3E] bg-[rgba(229,62,62,0.13)] px-3 py-1.5">

              <div className="h-2 w-2 rounded-full bg-[#E53E3E]" />

              <p className="font-manrope text-xs font-bold text-[#E53E3E]">
                Non-Veg
              </p>

            </div>


            {/* SIGNATURE */}

            <div className="flex items-center gap-1.5 rounded-md border border-[#C8A960] bg-[rgba(200,169,96,0.13)] px-3 py-1.5">

              <p className="font-manrope text-xs font-bold text-[#C8A960]">
                ★ Bamma's Signature Pick
              </p>

            </div>

          </div>


          <div className="flex w-full flex-col items-start gap-3">

            <h1 className="font-cormorantGaramond text-5xl font-bold text-[#FAF6F0] sm:text-[56px]">
              Gongura Mutton
            </h1>

            <p className="font-manrope text-xl font-semibold text-[#C8A960]">
              ₹399
            </p>

          </div>


          <p className="w-full font-manrope text-base leading-[1.6em] text-[#CBBFB7]">
            Our crown jewel. Tender, succulent mutton chunks are slow-cooked
            in a tangy, spicy sorrel leaf (Gongura) paste, infused with
            hand-pounded red chillies, garlic, and cold-pressed sesame oil. A
            masterpiece of traditional Telugu culinary art that delivers pure
            joy with every bite.
          </p>


          <div className="flex flex-wrap items-start gap-4">

            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#D59D3F] px-8 py-4 transition-all duration-300 hover:bg-[#E4B04C]"
            >
              <p className="font-manrope text-[15px] font-bold text-[#0C0806]">
                Order Now
              </p>

              <span className="text-[#0C0806]">
                →
              </span>
            </button>


            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-lg border-[1.5px] border-[#C8A960] px-6 py-4 transition-all duration-300 hover:bg-[rgba(200,169,96,0.10)]"
            >
              <span className="text-[#C8A960]">
                🛒
              </span>

              <p className="font-manrope text-[15px] font-bold text-[#C8A960]">
                Add to Cart
              </p>
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPLORE THE SPECIALS
      ====================================================== */}

      <section className="absolute left-0 top-[968px] w-full bg-[#0C0806] px-5 pb-[120px] pt-20 sm:px-8 md:px-12 lg:px-20">

        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-12">

          {/* SECTION TITLE */}

          <div className="flex flex-col items-start gap-2">

            <h2 className="font-cormorantGaramond text-4xl font-bold text-[#FAF6F0]">
              Explore the Specials
            </h2>

            <p className="font-manrope text-[15px] text-[#CBBFB7]">
              Carefully curated traditional favorites that deliver the authentic
              taste of home.
            </p>

          </div>


          {/* GRID */}

          <div className="flex w-full flex-col gap-8">

            {/* ROW 1 */}

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

              {dishes.slice(0, 4).map((dish, index) => (

                <DishCard
                  key={`${dish.name}-${index}`}
                  dish={dish}
                />

              ))}

            </div>


            {/* ROW 2 */}

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

              {dishes.slice(4, 8).map((dish, index) => (

                <DishCard
                  key={`${dish.name}-${index + 4}`}
                  dish={dish}
                />

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="absolute left-0 top-[1930px] flex w-full flex-col items-start gap-12 bg-[#130F0C] px-5 pb-10 pt-20 sm:px-8 md:px-12 lg:px-20">

        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">

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


          {/* FOOTER LINKS */}

          <div className="flex flex-wrap gap-16">

            <div className="flex flex-col items-start gap-4">

              <p className="font-dMSans text-[13px] font-bold text-[#D4A359]">
                Explore
              </p>

              <p className="cursor-pointer font-dMSans text-sm text-[#A8978F]">
                Our Heritage
              </p>

              <p className="cursor-pointer font-dMSans text-sm text-[#A8978F]">
                Bamma Specials
              </p>

            </div>


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


        {/* COPYRIGHT */}

        <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">

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


/* =========================================================
   DISH CARD COMPONENT
========================================================= */

function DishCard({ dish }) {
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#17100D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A960]">

      {/* CARD CONTENT */}

      <div className="flex w-full flex-col gap-5 p-5">

        {/* ROUND IMAGE */}

        <div className="flex w-full justify-center">

          <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full border-2 border-[#C8A960]">

            <img
              src={dish.image}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt={dish.name}
            />

          </div>

        </div>


        {/* DETAILS */}

        <div className="flex w-full flex-col items-start gap-2">

          <div className="flex w-full items-center justify-between">

            {/* TYPE */}

            <div className="flex items-center gap-1.5">

              <div
                className={`h-2 w-2 rounded-full ${
                  dish.type === "Veg"
                    ? "bg-[#48BB78]"
                    : "bg-[#E53E3E]"
                }`}
              />

              <p
                className={`font-manrope text-[11px] font-bold ${
                  dish.type === "Veg"
                    ? "text-[#48BB78]"
                    : "text-[#E53E3E]"
                }`}
              >
                {dish.type}
              </p>

            </div>


            {/* PRICE */}

            <p className="font-manrope text-base font-bold text-[#C8A960]">
              {dish.price}
            </p>

          </div>


          {/* NAME */}

          <p className="line-clamp-1 w-full overflow-hidden text-ellipsis font-cormorantGaramond text-[22px] font-bold text-[#FAF6F0]">
            {dish.name}
          </p>


          {/* DESCRIPTION */}

          <p className="line-clamp-3 w-full overflow-hidden text-ellipsis font-manrope text-[13px] text-[#CBBFB7]">
            {dish.description}
          </p>

        </div>

      </div>


      {/* ADD TO CART */}

      <div className="flex w-full flex-col px-5 pb-5">

        <button
          type="button"
          className="flex w-full cursor-pointer justify-center rounded-lg border border-[#C8A960] px-0 py-3 transition-all duration-300 hover:bg-[#C8A960]"
        >

          <p className="font-manrope text-[13px] font-bold text-[#C8A960] hover:text-[#0C0806]">
            Add To Cart
          </p>

        </button>

      </div>

    </div>
  );
}