



import Foodimage from "../assets/menuimages/Foodimage.png";
import Foodimage1 from "../assets/menuimages/Foodimage(1).png";
import Foodimage2 from "../assets/menuimages/Foodimage(2).png";
import Foodimage3 from "../assets/menuimages/Foodimage(3).png";
import Foodimage4 from "../assets/menuimages/Foodimage(4).png";
import Foodimage5 from "../assets/menuimages/Foodimage(5).png";

const foodItems = [
  {
    image: Foodimage,
    region: "Andhra",
    name: "Gutti Vankaya Koora",
    price: "₹180",
    rating: "4.7",
    type: "veg",
    spice: "spicy",
  },
  {
    image: Foodimage1,
    region: "Telangana",
    name: "Telangana Kodi Vepudu",
    price: "₹260",
    rating: "4.8",
    type: "non-veg",
    spice: "spicy",
  },
  {
    image: Foodimage2,
    region: "Rayalaseema",
    name: "Gongura Pappu Pachadi",
    price: "₹120",
    rating: "4.6",
    type: "veg",
    spice: "medium",
  },
  {
    image: Foodimage3,
    region: "Coastal Andhra",
    name: "Ghee Neyyi Idli",
    price: "₹90",
    rating: "4.5",
    type: "veg",
    spice: "mild",
  },
  {
    image: Foodimage4,
    region: "Nellore",
    name: "Nellore Chepala Pulusu",
    price: "₹340",
    rating: "4.9",
    type: "non-veg",
    spice: "spicy",
  },
  {
    image: Foodimage5,
    region: "Andhra",
    name: "Pesarattu Upma",
    price: "₹140",
    rating: "4.7",
    type: "veg",
    spice: "medium",
  },
];

const regions = [
  { name: "Andhra", count: 12 },
  { name: "Rayalaseema", count: 8 },
  { name: "Konaseema", count: 6 },
  { name: "Coastal Andhra", count: 9 },
  { name: "Telangana", count: 11 },
  { name: "Hyderabad", count: 15 },
];

const spices = ["Mild", "Medium", "Spicy", "Extra Spicy"];

const prices = [
  { label: "₹0 – ₹200", count: 14 },
  { label: "₹200 – ₹400", count: 28 },
  { label: "₹400+", count: 10 },
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 shrink-0"
    >
      <path
        d="M9.99969 3L4.50024 8.4996L2.00049 5.99978"
        stroke="#130F0C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Checkbox({ checked = false }) {
  return (
    <div
      className={`flex h-[18px] w-[18px] items-center justify-center rounded border-[1.5px] ${
        checked
          ? "border-[#D4A359] bg-[#D4A359]"
          : "border-[#332520] bg-transparent"
      }`}
    >
      {checked && <CheckIcon />}
    </div>
  );
}

function VegIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[10px] w-[10px] rounded bg-[#E8F5E9]"
    >
      <rect width="10" height="10" rx="4" fill="#E8F5E9" />
      <rect
        x="2"
        y="2"
        width="6"
        height="6"
        rx="3"
        fill="#2E7D32"
      />
    </svg>
  );
}

function NonVegIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[10px] w-[10px]"
    >
      <rect width="10" height="10" rx="4" fill="#FFEBEE" />
      <rect
        x="2"
        y="2"
        width="6"
        height="6"
        rx="3"
        fill="#C62828"
      />
    </svg>
  );
}

function RatingIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
    >
      <path
        d="M5.86064 1.03949C5.81867 1.06555 5.78482 1.10281 5.76291 1.14708L4.60841 3.48658C4.53226 3.64072 4.4198 3.77404 4.2807 3.87507C4.14161 3.97611 3.98004 4.04183 3.80991 4.06658L1.22741 4.44408C1.17826 4.45103 1.13205 4.47164 1.09405 4.50357C1.05605 4.5355 1.02777 4.57746 1.01245 4.62468C0.99713 4.67189 0.995377 4.72246 1.00739 4.77062C1.01941 4.81878 1.04471 4.8626 1.08041 4.89708L2.94841 6.71558C3.07172 6.83566 3.16396 6.98393 3.21718 7.1476C3.2704 7.31128 3.28301 7.48545 3.25391 7.65508L2.81341 10.2246C2.80484 10.2734 2.81015 10.3237 2.82874 10.3697C2.84733 10.4157 2.87845 10.4555 2.91856 10.4847C2.95867 10.5139 3.00616 10.5312 3.05564 10.5347C3.10511 10.5382 3.15458 10.5278 3.19841 10.5046L5.50691 9.29058C5.65905 9.21069 5.82832 9.16896 6.00016 9.16896C6.172 9.16896 6.34127 9.21069 6.49341 9.29058L8.80241 10.5046C8.84626 10.5279 8.89579 10.5385 8.94534 10.535C8.9949 10.5316 9.04249 10.5143 9.08268 10.4851C9.12288 10.4559 9.15405 10.416 9.17266 10.3699C9.19127 10.3239 9.19655 10.2735 9.18791 10.2246L8.74691 7.65458C8.71794 7.48503 8.73061 7.31097 8.78383 7.1474C8.83705 6.98382 8.92922 6.83563 9.05241 6.71558L10.9204 4.89658C10.9558 4.86206 10.9809 4.81831 10.9927 4.7703C11.0045 4.72228 11.0027 4.67191 10.9874 4.62488C10.9721 4.57785 10.944 4.53604 10.9062 4.50418C10.8683 4.47232 10.8224 4.45167 10.7734 4.44458L8.19041 4.06658C8.02047 4.04164 7.85913 3.97583 7.72022 3.87481C7.58132 3.77378 7.469 3.64056 7.39291 3.48658L6.23791 1.14708C6.216 1.10281 6.18215 1.06555 6.14019 1.03949C6.09822 1.01344 6.04981 0.999634 6.00041 0.999634C5.95102 0.999634 5.9026 1.01344 5.86064 1.03949Z"
        stroke="#D4A359"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpiceIcons({ level }) {
  const count =
    level === "mild"
      ? 1
      : level === "medium"
      ? 2
      : level === "spicy"
      ? 3
      : 4;

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((item) => (
        <svg
          key={item}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M7.50003 4.49991L4.49979 7.50015M4.49979 4.49991L7.50003 7.50015M11.0003 6.00003C11.0003 8.76168 8.76156 11.0004 5.99991 11.0004C3.23827 11.0004 0.999512 8.76168 0.999512 6.00003C0.999512 3.23839 3.23827 0.999634 5.99991 0.999634C8.76156 0.999634 11.0003 3.23839 11.0003 6.00003Z"
            stroke={item <= count ? "#C62828" : "#332520"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

function FoodCard({ food }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#332520] bg-[#1A1411]">
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover"
        />

        {/* Veg / Non-Veg Badge */}
        <div
          className={`absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-md border-[1.5px] bg-[rgba(0,0,0,0.70)] ${
            food.type === "veg"
              ? "border-[#2E7D32]"
              : "border-[#C62828]"
          }`}
        >
          {food.type === "veg" ? <VegIcon /> : <NonVegIcon />}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex w-full flex-col items-start gap-3 p-[18px]">
        {/* Region + Rating */}
        <div className="flex w-full items-center justify-between">
          <p className="font-dMSans text-xs font-semibold text-[#D4A359]">
            {food.region}
          </p>

          <div className="flex items-center gap-1">
            <RatingIcon />

            <p className="font-dMSans text-[13px] font-semibold text-[#F5ECE3]">
              {food.rating}
            </p>
          </div>
        </div>

        {/* Food Name */}
        <div className="flex w-full flex-col items-start gap-1">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-cormorantGaramond text-xl font-bold text-[#F5ECE3]">
            {food.name}
          </p>
        </div>

        {/* Price + Spice + Add */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <p className="font-dMSans text-lg font-bold text-[#D4A359]">
              {food.price}
            </p>

            <SpiceIcons level={food.spice} />
          </div>

          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] px-4 py-2 transition-colors duration-200 hover:bg-[#D4A359]"
          >
            <p className="font-dMSans text-[13px] font-bold text-[#D4A359] hover:text-[#130F0C]">
              + ADD
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Mainmenusection() {
  return (
    <section className="mx-auto flex w-full max-w-[1400px] items-start gap-8 px-5 pb-16 sm:px-8 md:px-12 lg:px-20">
      {/* =========================
          FILTER SIDEBAR
      ========================== */}
      <aside className="hidden w-[280px] shrink-0 flex-col items-start gap-7 rounded-2xl border border-[#332520] bg-[#1A1411] p-6 lg:flex">
        {/* Filter Header */}
        <div className="flex w-full items-center justify-between">
          <p className="font-cormorantGaramond text-xl font-bold text-[#F5ECE3]">
            Filters
          </p>

          <button
            type="button"
            className="font-dMSans text-xs font-bold text-[#D4A359]"
          >
            CLEAR ALL
          </button>
        </div>

        <div className="h-px w-full bg-[#332520]" />

        {/* Diet */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <p className="font-dMSans text-sm font-bold text-[#F5ECE3]">
            Diet
          </p>

          <div className="flex w-full flex-col items-start gap-2.5">
            <div className="flex w-full items-center gap-2">
              <Checkbox checked />
              <p className="font-dMSans text-sm text-[#F5ECE3]">
                All Options
              </p>
            </div>

            <div className="flex w-full items-center gap-2">
              <Checkbox />
              <p className="font-dMSans text-sm text-[#A8978F]">
                Vegetarian
              </p>
              <VegIcon />
            </div>

            <div className="flex w-full items-center gap-2">
              <Checkbox />
              <p className="font-dMSans text-sm text-[#A8978F]">
                Non-Vegetarian
              </p>
              <NonVegIcon />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#332520]" />

        {/* Region */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <p className="font-dMSans text-sm font-bold text-[#F5ECE3]">
            Region
          </p>

          <div className="flex w-full flex-col items-start gap-2.5">
            {regions.map((region) => (
              <div
                key={region.name}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox />

                  <p className="font-dMSans text-sm text-[#A8978F]">
                    {region.name}
                  </p>
                </div>

                <p className="font-dMSans text-xs text-[#A8978F]">
                  {region.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-[#332520]" />

        {/* Spice Level */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <p className="font-dMSans text-sm font-bold text-[#F5ECE3]">
            Spice Level
          </p>

          <div className="flex w-full flex-col items-start gap-2.5">
            {spices.map((spice) => (
              <div
                key={spice}
                className="flex w-full items-center gap-2"
              >
                <Checkbox checked={spice === "Medium"} />

                <p
                  className={`font-dMSans text-sm ${
                    spice === "Medium"
                      ? "text-[#F5ECE3]"
                      : "text-[#A8978F]"
                  }`}
                >
                  {spice}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-[#332520]" />

        {/* Price Range */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <p className="font-dMSans text-sm font-bold text-[#F5ECE3]">
            Price Range
          </p>

          <div className="flex w-full flex-col items-start gap-2.5">
            {prices.map((price) => (
              <div
                key={price.label}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox checked={price.label === "₹200 – ₹400"} />

                  <p
                    className={`font-dMSans text-sm ${
                      price.label === "₹200 – ₹400"
                        ? "text-[#F5ECE3]"
                        : "text-[#A8978F]"
                    }`}
                  >
                    {price.label}
                  </p>
                </div>

                <p className="font-dMSans text-xs text-[#A8978F]">
                  {price.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* =========================
          FOOD GRID
      ========================== */}
      <div className="flex w-full flex-col gap-6">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {foodItems.map((food) => (
            <FoodCard
              key={food.name}
              food={food}
            />
          ))}
        </div>
      </div>
    </section>
  );
}