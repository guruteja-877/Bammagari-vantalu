// //crct code 
// import FoodImage from "../assets/images/Foodimage.png";
// import FoodImage1 from "../assets/images/Foodimage(1).png";
// import FoodImage2 from "../assets/images/Foodimage(2).png";
// import FoodImage3 from "../assets/images/Foodimage(3).png";
// import FoodImage4 from "../assets/images/Foodimage(4).png";
// import FoodImage5 from "../assets/images/Foodimage(5).png";

// const regions = [
//   {
//     name: "Rayalaseema",
//     image: FoodImage,
//     description:
//       "Famous for its fiery spice levels and robust flavors. Savor the authentic Ragi Sankati paired with rich, aromatic Naatu Kodi Pulusu.",
//   },
//   {
//     name: "Coastal Andhra",
//     image: FoodImage1,
//     description:
//       "A seafood lover's paradise featuring tangy tamarind-based curries. Taste the legendary Chepala Pulusu cooked slowly in traditional clay pots.",
//   },
//   {
//     name: "Telangana",
//     image: FoodImage2,
//     description:
//       "Rooted in rustic village traditions, dominated by millets and sesame. Relish the crispy Sarva Pindi and spicy country-style mutton curries.",
//   },
//   {
//     name: "Godavari Specials",
//     image: FoodImage3,
//     description:
//       "Known for rich hospitality and subtle, sweet-tangy balance. Delight in our hot steamed rice served with freshly churned ghee and legendary Avakaya.",
//   },
//   {
//     name: "Hyderabadi",
//     image: FoodImage4,
//     description:
//       "A royal blend of Mughlai and local spices. Experience the legendary slow-cooked Dum Biryani, fragrant with saffron, mint, and pure spices.",
//   },
//   {
//     name: "Nellore",
//     image: FoodImage5,
//     description:
//       "Celebrated for its distinct use of raw mangoes in spicy gravies. Experience the authentic taste of Nellore's tangy fish curries.",
//   },
// ];

// export default function MenuPage() {
//   return (
//     <main className="min-h-screen w-full overflow-hidden bg-[#130E0C] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-[100px]">
      
//       {/* =========================
//           PAGE HEADER
//       ========================== */}
//       <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4">
        
//         <div className="flex h-[68px] w-fit items-center gap-2">
//           <div className="h-px w-6 bg-[#F59E0B]" />

//           <p className="font-instrumentSerif text-[22px] tracking-[0.08em] text-[#FBBF24] sm:text-[25px]">
//             OUR MENU
//           </p>

//           <div className="h-px w-6 bg-[#F59E0B]" />
//         </div>

//         <p className="w-full text-center font-geist text-base text-[#9CA3AF] sm:text-lg md:text-[22px]">
//           Every region has its own flavour, every dish has a story.
//         </p>
//       </section>

//       {/* =========================
//           REGION CARDS
//       ========================== */}
//       <section className="mx-auto mt-14 grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
//         {regions.map((region) => (
//           <article
//             key={region.name}
//             className="flex w-full flex-col overflow-hidden rounded-2xl border border-[rgba(245,158,11,0.15)] bg-[#1C1412] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.4)]"
//           >
//             {/* Food Image */}
//             <img
//               src={region.image}
//               alt={region.name}
//               className="h-[220px] w-full object-cover"
//             />

//             {/* Card Content */}
//             <div className="flex w-full flex-col items-start gap-3 p-6">
              
//               <h2 className="w-full font-youngSerif text-[22px] text-[#F3F4F6]">
//                 {region.name}
//               </h2>

//               <p className="w-full font-geist text-sm leading-6 text-[#9CA3AF]">
//                 {region.description}
//               </p>

//             </div>
//           </article>
//         ))}

//       </section>

//       {/* =========================
//           VIEW ALL REGIONS BUTTON
//       ========================== */}
//       <div className="flex w-full justify-center pt-10">
//         <button
//           type="button"
//           className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-8 py-4 transition-all duration-300 hover:bg-[#FBBF24] hover:shadow-lg hover:shadow-[#F59E0B]/20"
//         >
//           <span className="whitespace-nowrap font-geist text-base font-semibold text-[#130E0C]">
//             View All Regions
//           </span>

//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//           >
//             <path
//               d="M3.33279 7.99996H12.6672M7.99999 12.6672L12.6672 7.99996L7.99999 3.33276"
//               stroke="#130E0C"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </main>
//   );
// }





import { Link } from "react-router-dom";

import FoodImage from "../assets/images/Foodimage.png";
import FoodImage1 from "../assets/images/Foodimage(1).png";
import FoodImage2 from "../assets/images/Foodimage(2).png";
import FoodImage3 from "../assets/images/Foodimage(3).png";
import FoodImage4 from "../assets/images/Foodimage(4).png";
import FoodImage5 from "../assets/images/Foodimage(5).png";

const regions = [
  {
    name: "Rayalaseema",
    image: FoodImage,
    description:
      "Famous for its fiery spice levels and robust flavors. Savor the authentic Ragi Sankati paired with rich, aromatic Naatu Kodi Pulusu.",
  },
  {
    name: "Coastal Andhra",
    image: FoodImage1,
    description:
      "A seafood lover's paradise featuring tangy tamarind-based curries. Taste the legendary Chepala Pulusu cooked slowly in traditional clay pots.",
  },
  {
    name: "Telangana",
    image: FoodImage2,
    description:
      "Rooted in rustic village traditions, dominated by millets and sesame. Relish the crispy Sarva Pindi and spicy country-style mutton curries.",
  },
  {
    name: "Godavari Specials",
    image: FoodImage3,
    description:
      "Known for rich hospitality and subtle, sweet-tangy balance. Delight in our hot steamed rice served with freshly churned ghee and legendary Avakaya.",
  },
  {
    name: "Hyderabadi",
    image: FoodImage4,
    description:
      "A royal blend of Mughlai and local spices. Experience the legendary slow-cooked Dum Biryani, fragrant with saffron, mint, and pure spices.",
  },
  {
    name: "Nellore",
    image: FoodImage5,
    description:
      "Celebrated for its distinct use of raw mangoes in spicy gravies. Experience the authentic taste of Nellore's tangy fish curries.",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#130E0C] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-[100px]">
      
      {/* PAGE HEADER */}
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4">
        <div className="flex h-[68px] w-fit items-center gap-2">
          <div className="h-px w-6 bg-[#F59E0B]" />

          <p className="font-instrumentSerif text-[22px] tracking-[0.08em] text-[#FBBF24] sm:text-[25px]">
            OUR MENU
          </p>

          <div className="h-px w-6 bg-[#F59E0B]" />
        </div>

        <p className="w-full text-center font-geist text-base text-[#9CA3AF] sm:text-lg md:text-[22px]">
          Every region has its own flavour, every dish has a story.
        </p>
      </section>

      {/* REGION CARDS */}
      <section className="mx-auto mt-14 grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <article
            key={region.name}
            className="flex w-full flex-col overflow-hidden rounded-2xl border border-[rgba(245,158,11,0.15)] bg-[#1C1412] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,158,11,0.4)]"
          >
            <img
              src={region.image}
              alt={region.name}
              className="h-[220px] w-full object-cover"
            />

            <div className="flex w-full flex-col items-start gap-3 p-6">
              <h2 className="w-full font-youngSerif text-[22px] text-[#F3F4F6]">
                {region.name}
              </h2>

              <p className="w-full font-geist text-sm leading-6 text-[#9CA3AF]">
                {region.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* VIEW ALL REGIONS */}
      <div className="flex w-full justify-center pt-10">
        <Link
          to="/menu/all-regions"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-8 py-4 transition-all duration-300 hover:bg-[#FBBF24] hover:shadow-lg hover:shadow-[#F59E0B]/20"
        >
          <span className="whitespace-nowrap font-geist text-base font-semibold text-[#130E0C]">
            View All Regions
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M3.33279 7.99996H12.6672M7.99999 12.6672L12.6672 7.99996L7.99999 3.33276"
              stroke="#130E0C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}