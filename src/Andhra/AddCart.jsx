// import Recommendimage from "./Andhracusineimages/Recommendimage.png";
// import Recommendimage1 from "./Andhracusineimages/Recommendimage(1).png";
// import Recommendimage2 from "./Andhracusineimages/Recommendimage(2).png";
// import Recommendimage3 from "./Andhracusineimages/Recommendimage(3).png";

// export default function AddCart() {
//   const recommendations = [
//     {
//       name: "Gongura Pachadi",
//       price: 120,
//       image: Recommendimage,
//     },
//     {
//       name: "Andhra Meals",
//       price: 280,
//       image: Recommendimage1,
//     },
//     {
//       name: "Potharekulu (Dry Fruit)",
//       price: 220,
//       image: Recommendimage2,
//     },
//     {
//       name: "Royyala Iguru",
//       price: 360,
//       image: Recommendimage3,
//     },
//   ];

//   return (
//     <section className="flex w-full flex-col items-start gap-8 bg-[#0D0A08] px-5 py-16 sm:px-8 lg:px-20">

//       {/* =========================
//           SECTION HEADING
//       ========================== */}
//       <div className="flex w-full flex-col items-center gap-2">

//         <p className="font-newsreader text-[28px] font-bold text-[#D59D3F]">
//           — YOU MAY ALSO LIKE —
//         </p>

//         <p className="font-manrope text-sm text-[#A39E93]">
//           Complete your meal with our traditional specialties
//         </p>

//       </div>


//       {/* =========================
//           RECOMMENDATION CARDS
//       ========================== */}
//       <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

//         {recommendations.map((item) => (
//           <div
//             key={item.name}
//             className="flex w-full flex-col overflow-hidden rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512]"
//           >

//             {/* IMAGE */}
//             <img
//               src={item.image}
//               className="h-[189px] w-full object-cover"
//               alt={item.name}
//             />


//             {/* CONTENT */}
//             <div className="flex w-full flex-col items-start gap-3 p-4">

//               <p className="line-clamp-1 w-full overflow-hidden text-ellipsis font-newsreader text-lg font-bold text-[#F4EFE6]">
//                 {item.name}
//               </p>


//               {/* PRICE + ADD */}
//               <div className="flex w-full items-center justify-between">

//                 <p className="font-manrope text-[15px] font-bold text-[#D59D3F]">
//                   ₹{item.price}
//                 </p>

//                 <button
//                   type="button"
//                   className="cursor-pointer rounded border border-[#D59D3F] px-3 py-1.5 transition-all duration-200 hover:bg-[#D59D3F] hover:text-[#0D0A08]"
//                 >
//                   <p className="font-manrope text-[11px] font-bold text-[#D59D3F] hover:text-[#0D0A08]">
//                     Add +
//                   </p>
//                 </button>

//               </div>

//             </div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Foodimage from "./cartimages/Foodimage.png";
// import Foodimage1 from "./cartimages/Foodimage(1).png";
// import Foodimage2 from "./cartimages/Foodimage(2).png";


// import Recommendimage from "../Andhra/Andhracusineimages/Recommendimage.png";
// import Recommendimage1 from "../Andhra/Andhracusineimages/Recommendimage(1).png";
// import Recommendimage2 from "../Andhra/Andhracusineimages/Recommendimage(2).png";
// import Recommendimage3 from "../Andhra/Andhracusineimages/Recommendimage(3).png";

// export default function Cart() {
//     const navigate = useNavigate();
//   const [gonguraQuantity, setGonguraQuantity] = useState(1);
//   const [ragiQuantity, setRagiQuantity] = useState(2);
//   const [potharekuluQuantity, setPotharekuluQuantity] = useState(1);

//   const gonguraPrice = 399;
//   const ragiPrice = 349;
//   const potharekuluPrice = 199;

//   const subtotal =
//     gonguraPrice * gonguraQuantity +
//     ragiPrice * ragiQuantity +
//     potharekuluPrice * potharekuluQuantity;

//   const deliveryFee = 40;
//   const taxes = Math.round(subtotal * 0.05);
//   const total = subtotal + deliveryFee + taxes;

//   return (
//     <main className="min-h-screen w-full bg-[#0D0A08]">

//       {/* =========================
//           CART SECTION
//       ========================== */}

//       <div className="flex w-full flex-col items-start gap-8 px-5 pb-16 pt-10 sm:px-8 lg:px-20">

//         {/* CART HEADER */}

//         <div className="flex w-full flex-col items-start gap-2">

//           <p className="font-newsreader text-[32px] font-bold text-[#D59D3F]">
//             Your Cart
//           </p>

//           <p className="font-manrope text-sm text-[#A39E93]">
//             Review your selected traditional specialties
//           </p>

//         </div>


//         {/* CART + SUMMARY */}

//         <div className="flex w-full flex-col items-start gap-8 lg:flex-row">

//           {/* =========================
//               CART ITEMS
//           ========================== */}

//           <div className="flex w-full flex-col items-start gap-5">

//             {/* =========================
//                 GONGURA MUTTON
//             ========================== */}

//             <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512] p-5 sm:flex-row">

//               <img
//                 src={Foodimage}
//                 className="h-[140px] w-full rounded-lg object-cover sm:w-[140px]"
//                 alt="Gongura Mutton"
//               />

//               <div className="flex w-full flex-col items-start gap-3">

//                 <div className="flex w-full items-center justify-between">

//                   <div className="flex items-center gap-2">

//                     <div className="h-4 w-4 rounded-sm border-[1.5px] border-[#E23E3E]">
//                       <div className="mx-auto mt-[3px] h-[6px] w-[6px] rounded-full bg-[#E23E3E]" />
//                     </div>

//                     <p className="font-newsreader text-[22px] font-bold text-[#F4EFE6]">
//                       Gongura Mutton
//                     </p>

//                   </div>

//                   <p className="font-manrope text-lg font-bold text-[#D59D3F]">
//                     ₹{gonguraPrice * gonguraQuantity}
//                   </p>

//                 </div>


//                 <div className="flex items-center gap-1.5">

//                   <p className="font-manrope text-xs text-[#A39E93]">
//                     Region:
//                   </p>

//                   <p className="font-manrope text-xs font-semibold text-[#D59D3F]">
//                     Andhra
//                   </p>

//                 </div>


//                 <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

//                   <div className="flex items-center gap-5">

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       🗑 Remove
//                     </button>

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       ♡ Wishlist
//                     </button>

//                   </div>


//                   {/* QUANTITY */}

//                   <div className="flex items-center gap-2">

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setGonguraQuantity((quantity) =>
//                           quantity > 1 ? quantity - 1 : 1
//                         )
//                       }
//                       disabled={gonguraQuantity === 1}
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       −
//                     </button>

//                     <p className="w-6 text-center font-manrope text-base font-bold text-[#F4EFE6]">
//                       {gonguraQuantity}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setGonguraQuantity((quantity) => quantity + 1)
//                       }
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       +
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </div>
//                         {/* =========================
//                 RAGI SANGATI + NATU KODI
//             ========================== */}

//             <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512] p-5 sm:flex-row">

//               <img
//                 src={Foodimage1}
//                 className="h-[140px] w-full rounded-lg object-cover sm:w-[140px]"
//                 alt="Ragi Sangati + Natu Kodi"
//               />

//               <div className="flex w-full flex-col items-start gap-3">

//                 <div className="flex w-full items-center justify-between">

//                   <div className="flex items-center gap-2">

//                     <div className="h-4 w-4 rounded-sm border-[1.5px] border-[#E23E3E]">
//                       <div className="mx-auto mt-[3px] h-[6px] w-[6px] rounded-full bg-[#E23E3E]" />
//                     </div>

//                     <p className="font-newsreader text-[22px] font-bold text-[#F4EFE6]">
//                       Ragi Sangati + Natu Kodi
//                     </p>

//                   </div>

//                   <p className="font-manrope text-lg font-bold text-[#D59D3F]">
//                     ₹{ragiPrice * ragiQuantity}
//                   </p>

//                 </div>


//                 <div className="flex items-center gap-1.5">

//                   <p className="font-manrope text-xs text-[#A39E93]">
//                     Region:
//                   </p>

//                   <p className="font-manrope text-xs font-semibold text-[#D59D3F]">
//                     Rayalaseema
//                   </p>

//                 </div>


//                 <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

//                   <div className="flex items-center gap-5">

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       🗑 Remove
//                     </button>

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       ♡ Wishlist
//                     </button>

//                   </div>


//                   <div className="flex items-center gap-2">

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setRagiQuantity((quantity) =>
//                           quantity > 1 ? quantity - 1 : 1
//                         )
//                       }
//                       disabled={ragiQuantity === 1}
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       −
//                     </button>

//                     <p className="w-6 text-center font-manrope text-base font-bold text-[#F4EFE6]">
//                       {ragiQuantity}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setRagiQuantity((quantity) => quantity + 1)
//                       }
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       +
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* =========================
//                 POTHAREKULU
//             ========================== */}

//             <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512] p-5 sm:flex-row">

//               <img
//                 src={Foodimage2}
//                 className="h-[140px] w-full rounded-lg object-cover sm:w-[140px]"
//                 alt="Potharekulu"
//               />

//               <div className="flex w-full flex-col items-start gap-3">

//                 <div className="flex w-full items-center justify-between">

//                   <div className="flex items-center gap-2">

//                     <div className="h-4 w-4 rounded-sm border-[1.5px] border-[#2ECC71]">
//                       <div className="mx-auto mt-[3px] h-[6px] w-[6px] rounded-full bg-[#2ECC71]" />
//                     </div>

//                     <p className="font-newsreader text-[22px] font-bold text-[#F4EFE6]">
//                       Potharekulu
//                     </p>

//                   </div>

//                   <p className="font-manrope text-lg font-bold text-[#D59D3F]">
//                     ₹{potharekuluPrice * potharekuluQuantity}
//                   </p>

//                 </div>


//                 <div className="flex items-center gap-1.5">

//                   <p className="font-manrope text-xs text-[#A39E93]">
//                     Region:
//                   </p>

//                   <p className="font-manrope text-xs font-semibold text-[#D59D3F]">
//                     Andhra
//                   </p>

//                 </div>


//                 <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

//                   <div className="flex items-center gap-5">

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       🗑 Remove
//                     </button>

//                     <button
//                       type="button"
//                       className="font-manrope text-[13px] text-[#A39E93]"
//                     >
//                       ♡ Wishlist
//                     </button>

//                   </div>


//                   <div className="flex items-center gap-2">

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setPotharekuluQuantity((quantity) =>
//                           quantity > 1 ? quantity - 1 : 1
//                         )
//                       }
//                       disabled={potharekuluQuantity === 1}
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       −
//                     </button>

//                     <p className="w-6 text-center font-manrope text-base font-bold text-[#F4EFE6]">
//                       {potharekuluQuantity}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setPotharekuluQuantity((quantity) => quantity + 1)
//                       }
//                       className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(213,157,63,0.20)] text-[#D59D3F]"
//                     >
//                       +
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* =========================
//               ORDER SUMMARY
//           ========================== */}

//           <div className="flex w-full flex-col items-start gap-6 lg:w-[420px] lg:shrink-0">

//             <div className="flex w-full flex-col items-start gap-5 rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512] p-7">

//               <p className="font-newsreader text-xl font-bold text-[#D59D3F]">
//                 Order Summary
//               </p>


//               <div className="flex w-full flex-col items-start gap-3">

//                 <div className="flex w-full items-start justify-between">

//                   <p className="font-manrope text-sm text-[#A39E93]">
//                     Subtotal
//                   </p>

//                   <p className="font-manrope text-sm text-[#F4EFE6]">
//                     ₹{subtotal}
//                   </p>

//                 </div>


//                 <div className="flex w-full items-start justify-between">

//                   <p className="font-manrope text-sm text-[#A39E93]">
//                     Delivery Fee
//                   </p>

//                   <p className="font-manrope text-sm text-[#F4EFE6]">
//                     ₹{deliveryFee}
//                   </p>

//                 </div>


//                 <div className="flex w-full items-start justify-between">

//                   <p className="font-manrope text-sm text-[#A39E93]">
//                     Taxes
//                   </p>

//                   <p className="font-manrope text-sm text-[#F4EFE6]">
//                     ₹{taxes}
//                   </p>

//                 </div>

//               </div>


//               <div className="h-px w-full bg-[rgba(213,157,63,0.15)]" />


//               <div className="flex w-full items-center justify-between">

//                 <p className="font-newsreader text-[22px] font-bold text-[#D59D3F]">
//                   TOTAL
//                 </p>

//                 <p className="font-manrope text-[22px] font-extrabold text-[#D59D3F]">
//                   ₹{total}
//                 </p>

//               </div>


//               {/* PROMO CODE */}

//               <div className="flex w-full items-start gap-2">

//                 <div className="flex w-full items-center rounded-md border border-[rgba(213,157,63,0.15)] bg-[#0D0A08] px-4 py-3">

//                   <p className="font-manrope text-sm text-[#A39E93]">
//                     Enter promo code
//                   </p>

//                 </div>

//                 <button
//                   type="button"
//                   className="rounded-md border border-[#D59D3F] px-4 py-3"
//                 >
//                   <p className="font-manrope text-sm font-bold text-[#D59D3F]">
//                     Apply
//                   </p>
//                 </button>

//               </div>


//               {/* CHECKOUT */}

//               <button
//                 type="button"
//                 className="flex w-full items-center justify-center rounded-lg bg-[#D59D3F] py-4"
//               >
//                 <p className="font-manrope text-base font-extrabold text-[#0D0A08]">
//                   Proceed to Checkout →
//                 </p>
//               </button>

//             </div>


//             {/* DELIVERY INFORMATION */}

//             <div className="flex w-full flex-col items-start gap-5 rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512] p-7">

//               <p className="font-newsreader text-lg font-bold text-[#D59D3F]">
//                 Delivery Information
//               </p>

//               <div className="flex w-full flex-col items-start gap-3">

//                 <p className="font-manrope text-sm text-[#F4EFE6]">
//                   Select your delivery address
//                 </p>

//                 {/* <button
//                   type="button"
//                   className="flex w-full items-center justify-center rounded-lg border border-[#D59D3F] py-3.5"
//                 >
//                   <p className="font-manrope text-sm font-bold text-[#D59D3F]">
//                     Add Delivery Address
//                   </p>
//                 </button> */}
//                 <button
//   type="button"
//   onClick={() => navigate("/address")}
//   className="flex w-full items-center justify-center rounded-lg border border-[#D59D3F] py-3.5 transition-all duration-300 hover:bg-[#D59D3F] hover:text-[#0D0A08]"
// >
//   <p className="font-manrope text-sm font-bold text-[#D59D3F]">
//     Add Delivery Address
//   </p>
// </button>

//               </div>


//               <div className="flex items-center gap-2">

//                 <p className="text-[#D59D3F]">
//                   ◷
//                 </p>

//                 <p className="font-manrope text-sm font-bold text-[#F4EFE6]">
//                   Estimated delivery: 35–45 minutes
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//             {/* =========================
//           YOU MAY ALSO LIKE
//       ========================== */}

//       <section className="flex w-full flex-col items-start gap-8 bg-[#0D0A08] px-5 py-16 sm:px-8 lg:px-20">

//         <div className="flex w-full flex-col items-center gap-2">

//           <p className="font-newsreader text-[28px] font-bold text-[#D59D3F]">
//             — YOU MAY ALSO LIKE —
//           </p>

//           <p className="font-manrope text-sm text-[#A39E93]">
//             Complete your meal with our traditional specialties
//           </p>

//         </div>


//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">


//           {/* GONGURA PACHADI */}

//           <div className="flex w-full flex-col overflow-hidden rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512]">

//             <img
//               src={Recommendimage}
//               className="h-[189px] w-full object-cover"
//               alt="Gongura Pachadi"
//             />

//             <div className="flex w-full flex-col gap-3 p-4">

//               <p className="font-newsreader text-lg font-bold text-[#F4EFE6]">
//                 Gongura Pachadi
//               </p>

//               <div className="flex w-full items-center justify-between">

//                 <p className="font-manrope text-[15px] font-bold text-[#D59D3F]">
//                   ₹120
//                 </p>

//                 <button
//                   type="button"
//                   className="rounded border border-[#D59D3F] px-3 py-1.5"
//                 >
//                   <p className="font-manrope text-[11px] font-bold text-[#D59D3F]">
//                     Add +
//                   </p>
//                 </button>

//               </div>

//             </div>

//           </div>


//           {/* ANDHRA MEALS */}

//           <div className="flex w-full flex-col overflow-hidden rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512]">

//             <img
//               src={Recommendimage1}
//               className="h-[189px] w-full object-cover"
//               alt="Andhra Meals"
//             />

//             <div className="flex w-full flex-col gap-3 p-4">

//               <p className="font-newsreader text-lg font-bold text-[#F4EFE6]">
//                 Andhra Meals
//               </p>

//               <div className="flex w-full items-center justify-between">

//                 <p className="font-manrope text-[15px] font-bold text-[#D59D3F]">
//                   ₹280
//                 </p>

//                 <button
//                   type="button"
//                   className="rounded border border-[#D59D3F] px-3 py-1.5"
//                 >
//                   <p className="font-manrope text-[11px] font-bold text-[#D59D3F]">
//                     Add +
//                   </p>
//                 </button>

//               </div>

//             </div>

//           </div>


//           {/* POTHAREKULU */}

//           <div className="flex w-full flex-col overflow-hidden rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512]">

//             <img
//               src={Recommendimage2}
//               className="h-[189px] w-full object-cover"
//               alt="Potharekulu (Dry Fruit)"
//             />

//             <div className="flex w-full flex-col gap-3 p-4">

//               <p className="font-newsreader text-lg font-bold text-[#F4EFE6]">
//                 Potharekulu (Dry Fruit)
//               </p>

//               <div className="flex w-full items-center justify-between">

//                 <p className="font-manrope text-[15px] font-bold text-[#D59D3F]">
//                   ₹220
//                 </p>

//                 <button
//                   type="button"
//                   className="rounded border border-[#D59D3F] px-3 py-1.5"
//                 >
//                   <p className="font-manrope text-[11px] font-bold text-[#D59D3F]">
//                     Add +
//                   </p>
//                 </button>

//               </div>

//             </div>

//           </div>


//           {/* ROYYALA IGURU */}

//           <div className="flex w-full flex-col overflow-hidden rounded-xl border border-[rgba(213,157,63,0.15)] bg-[#1A1512]">

//             <img
//               src={Recommendimage3}
//               className="h-[189px] w-full object-cover"
//               alt="Royyala Iguru"
//             />

//             <div className="flex w-full flex-col gap-3 p-4">

//               <p className="font-newsreader text-lg font-bold text-[#F4EFE6]">
//                 Royyala Iguru
//               </p>

//               <div className="flex w-full items-center justify-between">

//                 <p className="font-manrope text-[15px] font-bold text-[#D59D3F]">
//                   ₹360
//                 </p>

//                 <button
//                   type="button"
//                   className="rounded border border-[#D59D3F] px-3 py-1.5"
//                 >
//                   <p className="font-manrope text-[11px] font-bold text-[#D59D3F]">
//                     Add +
//                   </p>
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../services/api";

// Keep your existing image imports here.
// If your original imports have different names/paths,
// keep those original imports.

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingFoodId, setUpdatingFoodId] = useState(null);
  const [error, setError] = useState("");

  // =========================
  // GET CART
  // =========================
  const fetchCart = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getCart();

      setCart(data);
    } catch (err) {
      console.error("GET CART ERROR:", err);
      setError(err.message || "Unable to load cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // =========================
  // UPDATE QUANTITY
  // =========================
  const handleQuantityChange = async (foodId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;

    if (newQuantity < 1) {
      return;
    }

    try {
      setUpdatingFoodId(foodId);
      setError("");

      const updatedCart = await updateCartItem(
        foodId,
        newQuantity
      );

      setCart(updatedCart);
    } catch (err) {
      console.error("UPDATE CART ERROR:", err);
      setError(err.message || "Unable to update quantity.");
    } finally {
      setUpdatingFoodId(null);
    }
  };

  // =========================
  // REMOVE ITEM
  // =========================
  const handleRemove = async (foodId) => {
    try {
      setUpdatingFoodId(foodId);
      setError("");

      const updatedCart = await removeFromCart(foodId);

      setCart(updatedCart);
    } catch (err) {
      console.error("REMOVE CART ERROR:", err);
      setError(err.message || "Unable to remove item.");
    } finally {
      setUpdatingFoodId(null);
    }
  };

  // =========================
  // CLEAR CART
  // =========================
  const handleClearCart = async () => {
    try {
      setError("");

      await clearCart();

      await fetchCart();
    } catch (err) {
      console.error("CLEAR CART ERROR:", err);
      setError(err.message || "Unable to clear cart.");
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#130E0C] flex items-center justify-center text-[#D4AF37]">
        Loading cart...
      </div>
    );
  }

  const items = cart?.items || [];

  // Backend calculates totalPrice.
  const subtotal = cart?.totalPrice || 0;

  // Keep your existing checkout calculation.
  const deliveryFee = items.length > 0 ? 40 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  return (
    <main className="min-h-screen bg-[#130E0C] text-white">

      {/* =========================
          YOUR EXISTING HEADER
          ========================= */}

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {/* =========================
            EMPTY CART
            ========================= */}

        {items.length === 0 ? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

            <h1 className="mb-4 text-3xl font-bold text-[#D4AF37]">
              Your cart is empty
            </h1>

            <p className="mb-6 text-[#A79C93]">
              Add some delicious food to your cart.
            </p>

            <button
              type="button"
              onClick={() => navigate("/menu")}
              className="rounded-lg bg-[#D4AF37] px-6 py-3 font-bold text-[#130E0C]"
            >
              EXPLORE MENU
            </button>

          </div>
        ) : (

          <div className="grid gap-10 lg:grid-cols-3">

            {/* =========================
                CART ITEMS
                ========================= */}

            <div className="lg:col-span-2">

              <div className="mb-6 flex items-center justify-between">

                <h1 className="text-3xl font-bold text-[#D4AF37]">
                  Your Cart
                </h1>

                <button
                  type="button"
                  onClick={handleClearCart}
                  className="text-sm font-semibold text-red-400"
                >
                  Clear Cart
                </button>

              </div>

              <div className="space-y-5">

                {items.map((item) => {

                  const food = item.food;

                  if (!food) {
                    return null;
                  }

                  const foodId = food._id;

                  return (
                    <div
                      key={foodId}
                      className="rounded-xl border border-[#3D2B23] bg-[#1D1512] p-5"
                    >

                      <div className="flex gap-5">

                        {/* Food Image */}

                        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg">

                          {food.image ? (
                            <img
                              src={food.image}
                              alt={food.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-[#261D18] text-xs text-[#A79C93]">
                              No Image
                            </div>
                          )}

                        </div>

                        {/* Food Details */}

                        <div className="flex flex-1 flex-col justify-between">

                          <div>

                            <h2 className="text-xl font-semibold">
                              {food.name}
                            </h2>

                            <p className="mt-1 text-sm text-[#A79C93]">
                              {food.region}
                            </p>

                            <p className="mt-2 font-semibold text-[#D4AF37]">
                              ₹{item.price}
                            </p>

                          </div>

                          <div className="mt-4 flex items-center justify-between">

                            {/* Quantity */}

                            <div className="flex items-center gap-3">

                              <button
                                type="button"
                                disabled={
                                  updatingFoodId === foodId ||
                                  item.quantity <= 1
                                }
                                onClick={() =>
                                  handleQuantityChange(
                                    foodId,
                                    item.quantity,
                                    -1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center rounded border border-[#3D2B23] text-lg disabled:opacity-40"
                              >
                                −
                              </button>

                              <span className="min-w-[20px] text-center">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                disabled={updatingFoodId === foodId}
                                onClick={() =>
                                  handleQuantityChange(
                                    foodId,
                                    item.quantity,
                                    1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center rounded border border-[#3D2B23] text-lg disabled:opacity-40"
                              >
                                +
                              </button>

                            </div>

                            {/* Remove */}

                            <button
                              type="button"
                              disabled={updatingFoodId === foodId}
                              onClick={() => handleRemove(foodId)}
                              className="text-sm font-semibold text-red-400 disabled:opacity-40"
                            >
                              REMOVE
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* =========================
                ORDER SUMMARY
                ========================= */}

            <div>

              <div className="sticky top-6 rounded-xl border border-[#3D2B23] bg-[#1D1512] p-6">

                <h2 className="mb-6 text-2xl font-bold text-[#D4AF37]">
                  Order Summary
                </h2>

                <div className="space-y-4">

                  <div className="flex justify-between text-[#A79C93]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-[#A79C93]">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>

                  <div className="flex justify-between text-[#A79C93]">
                    <span>Taxes</span>
                    <span>₹{taxes}</span>
                  </div>

                  <div className="my-4 border-t border-[#3D2B23]" />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">
                      ₹{total}
                    </span>
                  </div>

                </div>

                {/* Checkout */}

                <button
                  type="button"
                  onClick={() => navigate("/address")}
                  className="mt-8 h-12 w-full rounded-lg bg-[#D4AF37] font-bold text-[#130E0C] transition hover:opacity-90"
                >
                  PROCEED TO CHECKOUT
                </button>

              </div>

            </div>

          </div>

        )}

      </div>
    </main>
  );
}

