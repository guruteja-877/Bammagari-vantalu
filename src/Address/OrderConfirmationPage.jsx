import { useNavigate } from "react-router-dom";

export default function OrderConfirmationPage() {
     const navigate = useNavigate();

  return (
    <div className="flex min-h-[1600px] flex-col items-start bg-[#120D0B] min-w-screen min-h-screen">
      <div className="flex py-0 px-20 justify-between items-center shrink-0 border-b border-b-[#3D2B23] bg-[#120D0B] w-full h-[100px]">
        <div className="flex flex-col items-start gap-0.5 w-fit">
          <p className="text-[#D4A359] font-instrumentSerif text-[26px] w-fit">
            Bammagari Ruchulu
          </p>
        </div>
        <div className="flex items-center gap-8 w-fit">
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#D4AF37] font-dMSans text-[13px] font-semibold w-fit">
              Home
            </p>
            <div className="bg-[#D4AF37] w-4 h-0.5"></div>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F4EFEB] font-dMSans text-[13px] font-medium w-fit">
              Our Menu
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F4EFEB] font-dMSans text-[13px] font-medium w-fit">
              Bamma Specials
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F4EFEB] font-dMSans text-[13px] font-medium w-fit">
              About Bamma
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F4EFEB] font-dMSans text-[13px] font-medium w-fit">
              Offers
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F4EFEB] font-dMSans text-[13px] font-medium w-fit">
              Contact
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 w-fit">
          <div className="flex items-center gap-2 w-fit">
            <div className="flex justify-center items-center rounded-[20px] border border-[rgba(250,243,224,0.70)] w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-[18px] h-[18px] overflow-hidden relative "
              >
                <g clipPath="url(#clip0_271_1473)">
                  <path
                    d="M1.53906 1.53711H3.03906L5.03406 10.8526C5.10725 11.1937 5.29707 11.4987 5.57085 11.715C5.84463 11.9313 6.18524 12.0454 6.53406 12.0376H13.8691C14.2104 12.0371 14.5414 11.9201 14.8073 11.706C15.0732 11.4919 15.2582 11.1935 15.3316 10.8601L16.5691 5.2873H3.84156M6.75171 15.7505C6.75171 16.1647 6.41592 16.5005 6.00171 16.5005C5.5875 16.5005 5.25171 16.1647 5.25171 15.7505C5.25171 15.3362 5.5875 15.0004 6.00171 15.0004C6.41592 15.0004 6.75171 15.3362 6.75171 15.7505ZM15.0017 15.7505C15.0017 16.1647 14.6659 16.5005 14.2517 16.5005C13.8375 16.5005 13.5017 16.1647 13.5017 15.7505C13.5017 15.3362 13.8375 15.0004 14.2517 15.0004C14.6659 15.0004 15.0017 15.3362 15.0017 15.7505Z"
                    stroke="#FAF3E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_271_1473">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex py-2 px-4 items-center gap-2 rounded-[20px] border border-[#DF9F28] w-fit">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 overflow-hidden relative "
            >
              <path
                d="M11.0817 12.25V11.0833C11.0817 10.4645 10.8358 9.871 10.3982 9.43342C9.96053 8.99583 9.36697 8.75 8.74806 8.75H5.24766C4.62875 8.75 4.03519 8.99583 3.59756 9.43342C3.15992 9.871 2.91406 10.4645 2.91406 11.0833V12.25M9.33146 4.08333C9.33146 5.372 8.28667 6.41667 6.99786 6.41667C5.70905 6.41667 4.66426 5.372 4.66426 4.08333C4.66426 2.79467 5.70905 1.75 6.99786 1.75C8.28667 1.75 9.33146 2.79467 9.33146 4.08333Z"
                stroke="#DF9F28"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex pt-14 pr-0 pb-6 pl-0 flex-col items-center gap-3 w-full">
        <p className="text-[#D4AF37] font-instrumentSerif text-3xl w-fit">
          — ORDER PLACED SUCCESSFULLY —
        </p>
      </div>
      <div className="flex pt-0 pr-60 pb-[100px] pl-60 flex-col items-center gap-8 w-full">
        <div className="flex justify-center items-center rounded-[40px] border-2 border-[#D4AF37] bg-[#1B1410] shadow-[04px16px0rgba(212,175,55,0.13)] w-20 h-20">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 w-8 h-8 overflow-hidden relative "
          >
            <path
              d="M26.6671 8L12.0019 22.6656L5.33594 15.9994"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-[#F4EFEB] font-dMSans text-base leading-[26px] w-[640px] text-center">
          Thank you for ordering from Bammagari Ruchulu. Your traditional Andhra
          &amp; Telangana favourites are being prepared with care in our
          traditional kitchens.
        </p>
        <div className="flex p-8 flex-col items-start gap-6 rounded-2xl border border-[#3D2B23] bg-[#1B1410] shadow-[08px24px0rgba(0,0,0,0.25)] w-[580px]">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#D4AF37] font-dMSans text-base font-bold w-fit">
              ORDER #BR10248
            </p>
            <p className="text-[#A79C93] font-dMSans text-[13px] w-fit">
              Placed just now
            </p>
          </div>
          <div className="bg-[#3D2B23] w-full"></div>
          <div className="flex flex-col items-start gap-1 w-full">
            <p className="text-[#A79C93] font-dMSans text-[11px] font-bold w-fit">
              ESTIMATED DELIVERY TIME
            </p>
            <p className="text-[#D4AF37] font-eBGaramond text-[32px] font-semibold w-fit">
              35–45 minutes
            </p>
          </div>
          <div className="flex py-4 px-0 justify-center items-start gap-3 w-full">
            <div className="opacity-40 bg-[#D4AF37] w-[60px]"></div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 overflow-hidden relative "
            >
              <g clipPath="url(#clip0_271_1495)">
                <path
                  d="M10.0033 6.00005L6.00298 10.0004M6.00298 6.00005L10.0033 10.0004M14.6703 8.00021C14.6703 11.6824 11.6853 14.6674 8.00314 14.6674C4.32094 14.6674 1.33594 11.6824 1.33594 8.00021C1.33594 4.31801 4.32094 1.33301 8.00314 1.33301C11.6853 1.33301 14.6703 4.31801 14.6703 8.00021Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_271_1495">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="w-1 h-1"></div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 overflow-hidden relative "
            >
              <g clipPath="url(#clip0_271_1498)">
                <path
                  d="M10.0033 6.00005L6.00298 10.0004M6.00298 6.00005L10.0033 10.0004M14.6703 8.00021C14.6703 11.6824 11.6853 14.6674 8.00314 14.6674C4.32094 14.6674 1.33594 11.6824 1.33594 8.00021C1.33594 4.31801 4.32094 1.33301 8.00314 1.33301C11.6853 1.33301 14.6703 4.31801 14.6703 8.00021Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_271_1498">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="opacity-40 bg-[#D4AF37] w-[60px]"></div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#A79C93] font-dMSans text-[11px] font-bold w-fit">
              DELIVERING TO
            </p>
            <div className="flex flex-col items-start gap-0.5 w-full">
              <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                Shravan Kumar
              </p>
              <p className="text-[#A79C93] font-dMSans text-sm w-fit">
                Gachibowli, Hyderabad, Telangana — 500032
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <p className="text-[#A79C93] font-dMSans text-[11px] font-bold w-fit">
              PAYMENT METHOD
            </p>
            <div className="flex justify-between items-center w-full">
              <p className="text-[#F4EFEB] font-dMSans text-sm w-fit">
                Paid Online &#40;Credit Card&#41;
              </p>
              <p className="text-[#D4AF37] font-dMSans text-sm font-bold w-fit">
                ₹985
              </p>
            </div>
          </div>
          <div className="bg-[#3D2B23] w-full"></div>
          <div className="flex flex-col items-start gap-4 w-full">
            <p className="text-[#A79C93] font-dMSans text-[11px] font-bold w-fit">
              ORDER SUMMARY
            </p>
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-eBGaramond text-[13px] w-fit">
                  Gongura Mutton × 1
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm w-fit">₹399</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-eBGaramond text-[13px] w-fit">
                  Ragi Sangati + Natu Kodi × 1
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm w-fit">₹349</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-eBGaramond text-[13px] w-fit">
                  Potharekulu × 1
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm w-fit">₹199</p>
              </div>
            </div>
            <div className="bg-[#3D2B23] w-full"></div>
            <div className="flex justify-between items-center w-full">
              <p className="text-[#D4AF37] font-dMSans text-sm font-bold w-fit">
                TOTAL PAID
              </p>
              <p className="text-[#D4AF37] font-dMSans text-base font-bold w-fit">
                ₹985
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-3 flex-col items-center gap-4 w-full">
          <div className="flex justify-center items-start gap-4 w-fit">
<button
  type="button"
  onClick={() => navigate("/tracking")}
  className="cursor-pointer text-nowrap flex justify-center items-center rounded-lg bg-[#D4AF37] shadow-[04px12px0rgba(212,175,55,0.20)] w-[260px] h-[52px]"
>
  <p className="text-[#120D0B] font-dMSans text-sm font-bold w-fit">
    TRACK MY ORDER →
  </p>
</button>
            <button className="cursor-pointer text-nowrap flex justify-center items-center rounded-lg border-[1.5px] border-[#D4AF37] w-[260px] h-[52px]">
              <p className="text-[#D4AF37] font-dMSans text-sm font-bold w-fit">
                EXPLORE OUR MENU →
              </p>
            </button>
          </div>
          <p className="text-[#A79C93] font-dMSans text-[13px] w-fit">
            You can track your order anytime from your orders dashboard.
          </p>
        </div>
        <div className="flex pt-12 pr-0 pb-4 pl-0 flex-col items-center gap-2 w-full">
          <svg
            width="80"
            height="16"
            viewBox="0 0 80 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-30 w-20 h-4 overflow-hidden relative "
          >
            <g opacity="0.3">
              <path
                d="M50.0009 6.00005L29.9993 10.0004M29.9993 6.00005L50.0009 10.0004M73.3361 8.00021C73.3361 11.6824 58.411 14.6674 40.0001 14.6674C21.5891 14.6674 6.66406 11.6824 6.66406 8.00021C6.66406 4.31801 21.5891 1.33301 40.0001 1.33301C58.411 1.33301 73.3361 4.31801 73.3361 8.00021Z"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}