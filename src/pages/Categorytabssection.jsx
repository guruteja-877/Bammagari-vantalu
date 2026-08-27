import { useState } from "react";

const tabs = [
  "ALL",
  "VEG",
  "NON-VEG",
  "MEALS",
  "RICE",
  "TIFFINS",
  "CURRIES",
  "PULUSU",
  "PACHADILU",
  "DESSERTS",
  "COMBOS",
];

export default function Categorytabssection({ onCategoryChange }) {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Send selected category to parent component
    if (onCategoryChange) {
      onCategoryChange(tab);
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pb-12 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-wrap justify-center gap-3">

        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabClick(tab)}
              aria-pressed={isActive}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-[#D4A359] text-[#130F0C] shadow-[0_4px_15px_rgba(212,163,89,0.15)]"
                  : "border border-[#332520] bg-[#1A1411] text-[#A8978F] hover:border-[#D4A359] hover:text-[#F5ECE3]"
              }`}
            >
              <span
                className={`font-dMSans text-xs ${
                  isActive ? "font-bold" : "font-semibold"
                }`}
              >
                {tab}
              </span>

              {/* VEG indicator */}
              {tab === "VEG" && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <rect
                    width="10"
                    height="10"
                    rx="4"
                    fill="#E8F5E9"
                  />

                  <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    rx="3"
                    fill="#2E7D32"
                  />
                </svg>
              )}

              {/* NON-VEG indicator */}
              {tab === "NON-VEG" && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <rect
                    width="10"
                    height="10"
                    rx="4"
                    fill="#FFEBEE"
                  />

                  <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    rx="3"
                    fill="#C62828"
                  />
                </svg>
              )}
            </button>
          );
        })}

      </div>
    </section>
  );
}