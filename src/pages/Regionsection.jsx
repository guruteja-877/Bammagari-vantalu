import Regionimage from "../assets/images/Regionimage.png";
import Regionimage1 from "../assets/images/Regionimage(1).png";
import Regionimage2 from "../assets/images/Regionimage(2).png";
import Regionimage3 from "../assets/images/Regionimage(3).png";
import Regionimage4 from "../assets/images/Regionimage(4).png";
import Regionimage5 from "../assets/images/Regionimage(5).png";
import Regionimage6 from "../assets/images/Regionimage(6).png";
import Regionimage7 from "../assets/images/Regionimage(7).png";

import { useNavigate } from "react-router-dom";


// =========================
// REGION DATA
// =========================

const regions = [

  {
    name: "Andhra",
    image: Regionimage,
    path: "/menu/all-regions/andhra-cuisine",
    description:
      "Renowned for its robust, spicy dishes rich in red chillies, garlic and tamarind.",
  },

  {
    name: "Rayalaseema",
    image: Regionimage1,
    path: "/menu/all-regions/rayalaseema",
    description:
      "Famous for its fiery heat levels and rustic favorites like Ragi Sangati paired with Natu Kodi Pulusu.",
  },

  {
    name: "Konaseema",
    image: Regionimage2,
    path: "/menu/all-regions/konaseema",
    description:
      "Lush coconut country delivering aromatic fish pulusu and shrimp curries served on fresh banana leaves.",
  },

  {
    name: "Coastal Andhra",
    image: Regionimage3,
    path: "/menu/all-regions/coastal-andhra",
    description:
      "Rich sea-flavours highlighting tanginess from fresh raw-mangoes and tamarind.",
  },

  {
    name: "Guntur",
    image: Regionimage4,
    path: "/menu/all-regions/guntur",
    description:
      "Home of the legendary red hot chillies. Experience spicy curries that will leave you craving more.",
  },

  {
    name: "Nellore",
    image: Regionimage5,
    path: "/menu/all-regions/nellore",
    description:
      "Signature Nellore Chepala Pulusu prepared meticulously in traditional clay pots with raw mango infusion.",
  },

  {
    name: "Telangana",
    image: Regionimage6,
    path: "/menu/all-regions/telangana",
    description:
      "Rustic local recipes dominated by dry native spices, millets, and robust country meats.",
  },

  {
    name: "Hyderabad",
    image: Regionimage7,
    path: "/menu/all-regions/hyderabad",
    description:
      "Royal Mughlai-infused heritage, delivering slow-cooked Dum Biryanis aromatic with saffron and mint.",
  },

];


// =========================
// REGION SECTION
// =========================

export default function Regionsection() {

  const navigate = useNavigate();

  return (

    <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8 px-5 pb-16 sm:px-8 md:px-12 lg:px-20">


      {/* =========================
          SECTION HEADING
      ========================= */}

      <div className="flex flex-col items-center gap-3">

        <div className="flex items-center gap-3">

          {/* LEFT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>


          {/* HEADING */}

          <p className="font-dMSans text-lg font-bold text-[#D4A359]">
            EXPLORE BY REGION
          </p>


          {/* RIGHT DECORATION */}

          <div className="flex items-center gap-1">

            <div className="h-px w-4 bg-[#D4A359]" />

            <div className="h-1 w-1 rounded-sm bg-[#D4A359]" />

            <div className="h-px w-4 bg-[#D4A359]" />

          </div>

        </div>

      </div>


      {/* =========================
          REGION CARDS
      ========================= */}

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {regions.map((region) => (

          <article
            key={region.name}

            onClick={() => navigate(region.path)}

            className="flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A359]"
          >

            {/* IMAGE */}

            <img
              src={region.image}
              alt={region.name}
              className="h-[150px] w-full object-cover"
            />


            {/* CONTENT */}

            <div className="flex w-full flex-col gap-2 p-4">

              <h2 className="font-cormorantGaramond text-xl font-bold text-[#F5ECE3]">
                {region.name}
              </h2>

              <p className="line-clamp-2 font-dMSans text-[13px] leading-[1.4em] text-[#A8978F]">
                {region.description}
              </p>

            </div>

          </article>

        ))}

      </div>






    </section>

  );
}