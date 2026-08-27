// import Sigimage from "./Andhracusineimages/Sigimage.png";
// import Sigimage1 from "./Andhracusineimages/Sigimage(1).png";
// import Sigimage2 from "./Andhracusineimages/Sigimage(2).png";

// import { useNavigate } from "react-router-dom";

// import Foodimage from "./Andhracusineimages/Foodimage.png";
// import Foodimage1 from "./Andhracusineimages/Foodimage(1).png";
// import Foodimage2 from "./Andhracusineimages/Foodimage(2).png";
// import Foodimage3 from "./Andhracusineimages/Foodimage(3).png";
// import Foodimage4 from "./Andhracusineimages/Foodimage(4).png";
// import Foodimage5 from "./Andhracusineimages/Foodimage(5).png";
// import Foodimage6 from "./Andhracusineimages/Foodimage(6).png";
// import Foodimage7 from "./Andhracusineimages/Foodimage(7).png";
// import Foodimage8 from "./Andhracusineimages/Foodimage(8).png";

// export default function AndhraCusine() {
//   const navigate = useNavigate();
//   const signatureDishes = [
//     {
//       name: "Andhra Meals",
//       image: Sigimage,
//       description:
//         "Ultimate Andhra Thali served with rice, pappu, sambar, rasam, curries, and podi",
//       price: "₹250",
//       type: "veg",
//     },
//     {
//       name: "Gongura Mutton",
//       image: Sigimage1,
//       description:
//         "Tender chunks of mutton cooked in a spicy tangy sorrel leaf gravy",
//       price: "₹380",
//       type: "nonveg",
//     },
//     {
//       name: "Gutti Vankaya Koora",
//       image: Sigimage2,
//       description:
//         "Stuffed baby eggplants slow-cooked in a rich peanut and sesame gravy",
//       price: "₹180",
//       type: "veg",
//     },
//   ];

//   const dishes = [
//     {
//       name: "Gongura Chicken",
//       image: Foodimage,
//       description:
//         "Tangy gongura leaf chicken curry with traditional spices",
//       price: "₹320",
//       type: "nonveg",
//     },
//     {
//       name: "Gongura Pappu",
//       image: Foodimage1,
//       description: "Sorrel leaves dal cooked slow with green chillies",
//       price: "₹150",
//       type: "veg",
//     },
//     {
//       name: "Andhra Fish Curry",
//       image: Foodimage2,
//       description:
//         "Spicy and tangy tamarind-based traditional fish curry",
//       price: "₹280",
//       type: "nonveg",
//     },
//     {
//       name: "Royyala Iguru",
//       image: Foodimage3,
//       description:
//         "Juicy prawns dry curry prepared with native Andhra spices",
//       price: "₹360",
//       type: "nonveg",
//     },
//     {
//       name: "Andhra Pulihora",
//       image: Foodimage4,
//       description:
//         "Classic tangy tamarind rice tempered with mustard and peanuts",
//       price: "₹120",
//       type: "veg",
//     },
//     {
//       name: "Avakaya Annam",
//       image: Foodimage5,
//       description:
//         "Spicy mango pickle rice prepared with pure cow ghee",
//       price: "₹140",
//       type: "veg",
//     },
//     {
//       name: "Kodi Vepudu",
//       image: Foodimage6,
//       description:
//         "Crispy fried Andhra-style chicken tossed in dry spices",
//       price: "₹280",
//       type: "nonveg",
//     },
//     {
//       name: "Mutton Vepudu",
//       image: Foodimage7,
//       description:
//         "Pan-fried dry spiced tender mutton chunks",
//       price: "₹350",
//       type: "nonveg",
//     },
//     {
//       name: "Ragi Sangati",
//       image: Foodimage8,
//       description:
//         "Healthy traditional finger millet dumpling",
//       price: "₹100",
//       type: "veg",
//     },
//   ];

//   const getTypeColor = (type) => {
//     return type === "veg" ? "#2E7D32" : "#C62828";
//   };

//   return (
//     <main className="min-h-screen w-full bg-[#130F0C]">

//       {/* =========================
//           MENU HERO
//       ========================== */}
//       <section className="flex w-full flex-col items-center justify-center gap-4 px-5 pb-16 pt-32 text-center sm:px-8 lg:px-20">

//         {/* Heading Decoration */}
//         <div className="flex items-center gap-3">

//           <div className="flex items-center gap-1">
//             <div className="h-px w-4 bg-[#D4A359]" />
//             <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
//             <div className="h-px w-4 bg-[#D4A359]" />
//           </div>

//           <p className="font-instrumentSerif text-2xl text-[#D4A359]">
//             Andhra SPECIALS
//           </p>

//           <div className="flex items-center gap-1">
//             <div className="h-px w-4 bg-[#D4A359]" />
//             <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
//             <div className="h-px w-4 bg-[#D4A359]" />
//           </div>

//         </div>

//         {/* Main Title */}
//         <h1 className="font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
//           Andhra Cuisine
//         </h1>

//         {/* Description */}
//         <p className="max-w-[720px] font-dMSans text-base leading-[1.6em] text-[#A8978F]">
//           Renowned for robust, fiery spice levels with bold use of red
//           chillies, garlic, and tamarind.
//         </p>

//       </section>


//       {/* =========================
//           SIGNATURE DISHES
//       ========================== */}
//       <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-16 sm:px-8 lg:px-20">

//         {/* Section Heading */}
//         <div className="flex items-center gap-3">

//           <div className="h-3 w-3 bg-[#D4A359]" />

//           <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
//             SIGNATURE DISHES
//           </h2>

//           <div className="h-3 w-3 bg-[#D4A359]" />

//         </div>

//         {/* Signature Cards */}
//         <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {signatureDishes.map((dish) => (
//             <div
//               key={dish.name}
//               className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
//             >

//               {/* Image */}
//               <img
//                 src={dish.image}
//                 alt={dish.name}
//                 className="h-[220px] w-full object-cover"
//               />

//               {/* Card Content */}
//               <div className="flex w-full flex-col gap-3 p-5">

//                 {/* Name + Type */}
//                 <div className="flex w-full items-center justify-between gap-3">

//                   <h3 className="line-clamp-1 w-full overflow-hidden text-ellipsis font-cormorantGaramond text-[22px] font-bold text-[#F5ECE3]">
//                     {dish.name}
//                   </h3>

//                   {/* Veg / Non-Veg */}
//                   <div
//                     className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border-[1.5px] bg-black/70"
//                     style={{
//                       borderColor: getTypeColor(dish.type),
//                     }}
//                   >
//                     <div
//                       className="h-2 w-2 rounded-full"
//                       style={{
//                         backgroundColor: getTypeColor(dish.type),
//                       }}
//                     />
//                   </div>

//                 </div>

//                 {/* Description */}
//                 <p className="h-10 w-full overflow-hidden text-ellipsis font-dMSans text-sm leading-[1.4em] text-[#A8978F]">
//                   {dish.description}
//                 </p>

//                 {/* Price + Cart */}
//                 <div className="flex w-full items-center justify-between">

//                   <p className="font-dMSans text-xl font-bold text-[#D4A359]">
//                     {dish.price}
//                   </p>

//                   <button
//                     type="button"
//                     className="rounded-lg border border-[#D4A359] bg-[#261D1A] px-5 py-2.5 font-dMSans text-[13px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
//                   >
//                     ADD TO CART
//                   </button>

//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </section>


//       {/* =========================
//           ANDHRA MENU
//       ========================== */}
//       <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-5 pb-16 sm:px-8 lg:px-20">

//         {/* Section Heading */}
//         <div className="flex items-center gap-3">

//           <div className="flex items-center gap-1">
//             <div className="h-px w-4 bg-[#D4A359]" />
//             <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
//             <div className="h-px w-4 bg-[#D4A359]" />
//           </div>

//           <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
//             ANDHRA MENU
//           </h2>

//           <div className="flex items-center gap-1">
//             <div className="h-px w-4 bg-[#D4A359]" />
//             <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
//             <div className="h-px w-4 bg-[#D4A359]" />
//           </div>

//         </div>

//         {/* Food Grid */}
//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

//           {dishes.map((dish) => (
//             <div
//               key={dish.name}
//               className="flex w-full flex-col overflow-hidden rounded-xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
//             >

//               {/* Food Image */}
//               <img
//                 src={dish.image}
//                 alt={dish.name}
//                 className="h-40 w-full object-cover"
//               />

//               {/* Card Content */}
//               <div className="flex w-full flex-col gap-2.5 p-3.5">

//                 {/* Name + Type */}
//                 <div className="flex w-full items-center justify-between gap-2">

//                   <h3 className="line-clamp-1 w-full overflow-hidden text-ellipsis font-cormorantGaramond text-lg font-bold text-[#F5ECE3]">
//                     {dish.name}
//                   </h3>

//                   {/* Veg / Non-Veg */}
//                   <div
//                     className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-[1.5px] bg-black/70"
//                     style={{
//                       borderColor: getTypeColor(dish.type),
//                     }}
//                   >
//                     <div
//                       className="h-1.5 w-1.5 rounded-full"
//                       style={{
//                         backgroundColor: getTypeColor(dish.type),
//                       }}
//                     />
//                   </div>

//                 </div>

//                 {/* Description */}
//                 <p className="line-clamp-1 w-full overflow-hidden text-ellipsis font-dMSans text-xs leading-[1.3em] text-[#A8978F]">
//                   {dish.description}
//                 </p>

//                 {/* Price + Cart */}
//                 <div className="flex w-full items-center justify-between">

//                   <p className="font-dMSans text-base font-bold text-[#D4A359]">
//                     {dish.price}
//                   </p>

//                   <button
//                     type="button"
//                     className="rounded-md border border-[#D4A359] bg-[#261D1A] px-3.5 py-1.5 font-dMSans text-[11px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
//                   >
//                     ADD TO CART
//                   </button>

//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </section>

//     </main>
//   );
// }




import { useNavigate } from "react-router-dom";

import Sigimage from "./Andhracusineimages/Sigimage.png";
import Sigimage1 from "./Andhracusineimages/Sigimage(1).png";
import Sigimage2 from "./Andhracusineimages/Sigimage(2).png";

import Foodimage from "./Andhracusineimages/Foodimage.png";
import Foodimage1 from "./Andhracusineimages/Foodimage(1).png";
import Foodimage2 from "./Andhracusineimages/Foodimage(2).png";
import Foodimage3 from "./Andhracusineimages/Foodimage(3).png";
import Foodimage4 from "./Andhracusineimages/Foodimage(4).png";
import Foodimage5 from "./Andhracusineimages/Foodimage(5).png";
import Foodimage6 from "./Andhracusineimages/Foodimage(6).png";
import Foodimage7 from "./Andhracusineimages/Foodimage(7).png";
import Foodimage8 from "./Andhracusineimages/Foodimage(8).png";

export default function AndhraCusine() {
  const navigate = useNavigate();

  const signatureDishes = [
    {
      name: "Andhra Meals",
      image: Sigimage,
      description:
        "Ultimate Andhra Thali served with rice, pappu, sambar, rasam, curries, and podi",
      price: "₹250",
      type: "veg",
    },
    {
      name: "Gongura Mutton",
      image: Sigimage1,
      description:
        "Tender chunks of mutton cooked in a spicy tangy sorrel leaf gravy",
      price: "₹380",
      type: "nonveg",
    },
    {
      name: "Gutti Vankaya Koora",
      image: Sigimage2,
      description:
        "Stuffed baby eggplants slow-cooked in a rich peanut and sesame gravy",
      price: "₹180",
      type: "veg",
    },
  ];

  const dishes = [
    {
      name: "Gongura Chicken",
      image: Foodimage,
      description:
        "Tangy gongura leaf chicken curry with traditional spices",
      price: "₹320",
      type: "nonveg",
    },
    {
      name: "Gongura Pappu",
      image: Foodimage1,
      description: "Sorrel leaves dal cooked slow with green chillies",
      price: "₹150",
      type: "veg",
    },
    {
      name: "Andhra Fish Curry",
      image: Foodimage2,
      description:
        "Spicy and tangy tamarind-based traditional fish curry",
      price: "₹280",
      type: "nonveg",
    },
    {
      name: "Royyala Iguru",
      image: Foodimage3,
      description:
        "Juicy prawns dry curry prepared with native Andhra spices",
      price: "₹360",
      type: "nonveg",
    },
    {
      name: "Andhra Pulihora",
      image: Foodimage4,
      description:
        "Classic tangy tamarind rice tempered with mustard and peanuts",
      price: "₹120",
      type: "veg",
    },
    {
      name: "Avakaya Annam",
      image: Foodimage5,
      description:
        "Spicy mango pickle rice prepared with pure cow ghee",
      price: "₹140",
      type: "veg",
    },
    {
      name: "Kodi Vepudu",
      image: Foodimage6,
      description:
        "Crispy fried Andhra-style chicken tossed in dry spices",
      price: "₹280",
      type: "nonveg",
    },
    {
      name: "Mutton Vepudu",
      image: Foodimage7,
      description:
        "Pan-fried dry spiced tender mutton chunks",
      price: "₹350",
      type: "nonveg",
    },
    {
      name: "Ragi Sangati",
      image: Foodimage8,
      description:
        "Healthy traditional finger millet dumpling",
      price: "₹100",
      type: "veg",
    },
  ];

  const getTypeColor = (type) => {
    return type === "veg" ? "#2E7D32" : "#C62828";
  };

  return (
    <main className="min-h-screen w-full bg-[#130F0C]">

      {/* =========================
          MENU HERO
      ========================== */}
      <section className="flex w-full flex-col items-center justify-center gap-4 px-5 pb-16 pt-32 text-center sm:px-8 lg:px-20">

        {/* Heading Decoration */}
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

          <p className="font-instrumentSerif text-2xl text-[#D4A359]">
            Andhra SPECIALS
          </p>

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

        </div>

        {/* Main Title */}
        <h1 className="font-cormorantGaramond text-5xl font-bold text-[#F5ECE3]">
          Andhra Cuisine
        </h1>

        {/* Description */}
        <p className="max-w-[720px] font-dMSans text-base leading-[1.6em] text-[#A8978F]">
          Renowned for robust, fiery spice levels with bold use of red
          chillies, garlic, and tamarind.
        </p>

      </section>


      {/* =========================
          SIGNATURE DISHES
      ========================== */}
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7 px-5 pb-16 sm:px-8 lg:px-20">

        {/* Section Heading */}
        <div className="flex items-center gap-3">

          <div className="h-3 w-3 bg-[#D4A359]" />

          <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            SIGNATURE DISHES
          </h2>

          <div className="h-3 w-3 bg-[#D4A359]" />

        </div>

        {/* Signature Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {signatureDishes.map((dish) => (
            <div
              key={dish.name}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
            >

              {/* Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="h-[220px] w-full object-cover"
              />

              {/* Card Content */}
              <div className="flex w-full flex-col gap-3 p-5">

                {/* Name + Type */}
                <div className="flex w-full items-center justify-between gap-3">

                  <h3 className="line-clamp-1 w-full overflow-hidden text-ellipsis font-cormorantGaramond text-[22px] font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h3>

                  {/* Veg / Non-Veg */}
                  <div
                    className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border-[1.5px] bg-black/70"
                    style={{
                      borderColor: getTypeColor(dish.type),
                    }}
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: getTypeColor(dish.type),
                      }}
                    />
                  </div>

                </div>

                {/* Description */}
                <p className="h-10 w-full overflow-hidden text-ellipsis font-dMSans text-sm leading-[1.4em] text-[#A8978F]">
                  {dish.description}
                </p>

                {/* Price + Cart */}
                <div className="flex w-full items-center justify-between">

                  <p className="font-dMSans text-xl font-bold text-[#D4A359]">
                    {dish.price}
                  </p>

                  {/* ADD TO CART */}
                  <button
                    type="button"
                    onClick={() => {
                      if (dish.name === "Gongura Mutton") {
                        navigate(
                          "/menu/all-regions/andhra-cuisine/gongura-mutton"
                        );
                      }
                    }}
                    className="rounded-lg border border-[#D4A359] bg-[#261D1A] px-5 py-2.5 font-dMSans text-[13px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>


      {/* =========================
          ANDHRA MENU
      ========================== */}
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-5 pb-16 sm:px-8 lg:px-20">

        {/* Section Heading */}
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

          <h2 className="font-cormorantGaramond text-2xl font-bold text-[#D4A359]">
            ANDHRA MENU
          </h2>

          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-[#D4A359]" />
            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />
            <div className="h-px w-4 bg-[#D4A359]" />
          </div>

        </div>

        {/* Food Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex w-full flex-col overflow-hidden rounded-xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
            >

              {/* Food Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="h-40 w-full object-cover"
              />

              {/* Card Content */}
              <div className="flex w-full flex-col gap-2.5 p-3.5">

                {/* Name + Type */}
                <div className="flex w-full items-center justify-between gap-2">

                  <h3 className="line-clamp-1 w-full overflow-hidden text-ellipsis font-cormorantGaramond text-lg font-bold text-[#F5ECE3]">
                    {dish.name}
                  </h3>

                  {/* Veg / Non-Veg */}
                  <div
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-[1.5px] bg-black/70"
                    style={{
                      borderColor: getTypeColor(dish.type),
                    }}
                  >
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: getTypeColor(dish.type),
                      }}
                    />
                  </div>

                </div>

                {/* Description */}
                <p className="line-clamp-1 w-full overflow-hidden text-ellipsis font-dMSans text-xs leading-[1.3em] text-[#A8978F]">
                  {dish.description}
                </p>

                {/* Price + Cart */}
                <div className="flex w-full items-center justify-between">

                  <p className="font-dMSans text-base font-bold text-[#D4A359]">
                    {dish.price}
                  </p>

                  <button
                    type="button"
                    className="rounded-md border border-[#D4A359] bg-[#261D1A] px-3.5 py-1.5 font-dMSans text-[11px] font-bold text-[#D4A359] transition-all duration-300 hover:bg-[#D4A359] hover:text-[#130F0C]"
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}