import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import images from "../assets/assets";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={images["./images/Bammagariruchuluhomepage.png"]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <main className="relative z-10 flex min-h-screen items-center pt-12">

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 lg:px-16">

          {/* ================= LEFT ================= */}

          <div className="max-w-[520px]">

            <div className="mb-4 flex items-center gap-2">

              <div className="h-px w-6 bg-[#DF9F28]"></div>

              <p className="font-dMSans text-xs font-bold tracking-[0.25em] text-[#DF9F28]">
                AUTHENTIC TELUGU HOMEMADE FOOD
              </p>

              <span className="text-[#DF9F28]">✦</span>

            </div>

            <h1 className="font-instrumentSerif text-6xl leading-[0.9] text-[#FAF3E0]">
              Bamma Chethi
            </h1>

            <h1 className="font-instrumentSerif text-6xl leading-[0.9] text-[#DF9F28]">
              Ruchi... Mee
            </h1>

            <h1 className="font-instrumentSerif text-6xl leading-[0.9] text-[#FAF3E0]">
              Intiki!
            </h1>

            <p className="mt-8 max-w-[470px] text-base leading-7 text-[#D6CFC8]">
              Traditional Telugu recipes, authentic spices and the warmth of
              Bamma's kitchen — freshly prepared and delivered straight to your
              doorstep.
            </p>

            <div className="mt-10 flex gap-5">

              <button
                onClick={() => navigate("/menu")}
                className="rounded-full bg-[#DF9F28] px-8 py-4 text-sm font-bold tracking-wider text-black transition hover:bg-[#C88E23]"
              >
                ORDER NOW →
              </button>

              <button
                onClick={() => navigate("/about")}
                className="rounded-full border border-white px-8 py-4 text-sm font-semibold tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                OUR STORY
              </button>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative h-[520px] w-[520px]">

            {/* Main Dish */}

            <div className="absolute right-0 top-0 h-[280px] w-[280px] overflow-hidden rounded-full border-[3px] border-[#DF9F28] shadow-2xl">

              <img
                src={images["./images/Dishimage.png"]}
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

            {/* Dish 2 */}

            <div className="absolute bottom-28 left-0 h-[160px] w-[160px] overflow-hidden rounded-full border-[3px] border-[#DF9F28] shadow-2xl">

              <img
                src={images["./images/Dishimage(1).png"]}
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

            {/* Dish 3 */}

            <div className="absolute bottom-2 right-10 h-[120px] w-[120px] overflow-hidden rounded-full border-[3px] border-[#DF9F28] shadow-2xl">

              <img
                src={images["./images/Dishimage(2).png"]}
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}