
import { useNavigate } from "react-router-dom";
export default function Checkoutpage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[1200px] flex-col items-start bg-[#120E0B] min-w-screen min-h-screen">
      <div className="flex py-0 px-20 justify-between items-center shrink-0 border-b border-b-[#332722] bg-[#120E0B] w-full h-[100px]">
        <div className="flex flex-col items-start gap-0.5 w-fit">
          <p className="text-[#D4A359] font-instrumentSerif text-[26px] w-fit">
            Bammagari Ruchulu
          </p>
        </div>
        <div className="flex items-center gap-8 w-fit">
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F5EFEB] font-dMSans text-[15px] font-medium w-fit">
              Home
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#E5A93C] font-dMSans text-[15px] font-medium w-fit">
              Our Menu
            </p>
            <div className="bg-[#E5A93C] w-4 h-0.5"></div>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F5EFEB] font-dMSans text-[15px] font-medium w-fit">
              Bamma Specials
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F5EFEB] font-dMSans text-[15px] font-medium w-fit">
              About Bamma
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F5EFEB] font-dMSans text-[15px] font-medium w-fit">
              Offers
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-fit">
            <p className="text-[#F5EFEB] font-dMSans text-[15px] font-medium w-fit">
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
                <g clipPath="url(#clip0_271_1189)">
                  <path
                    d="M1.53906 1.53711H3.03906L5.03406 10.8526C5.10725 11.1937 5.29707 11.4987 5.57085 11.715C5.84463 11.9313 6.18524 12.0454 6.53406 12.0376H13.8691C14.2104 12.0371 14.5414 11.9201 14.8073 11.706C15.0732 11.4919 15.2582 11.1935 15.3316 10.8601L16.5691 5.2873H3.84156M6.75171 15.7505C6.75171 16.1647 6.41592 16.5005 6.00171 16.5005C5.5875 16.5005 5.25171 16.1647 5.25171 15.7505C5.25171 15.3362 5.5875 15.0004 6.00171 15.0004C6.41592 15.0004 6.75171 15.3362 6.75171 15.7505ZM15.0017 15.7505C15.0017 16.1647 14.6659 16.5005 14.2517 16.5005C13.8375 16.5005 13.5017 16.1647 13.5017 15.7505C13.5017 15.3362 13.8375 15.0004 14.2517 15.0004C14.6659 15.0004 15.0017 15.3362 15.0017 15.7505Z"
                    stroke="#FAF3E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_271_1189">
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
      <div className="flex pt-14 pr-20 pb-10 pl-20 flex-col items-center gap-4 w-full">
        <button className="cursor-pointer text-nowrap flex justify-center items-center gap-6 w-full">
          <div className="bg-[#E5A93C] w-20"></div>
          <p className="text-[#E5A93C] font-instrumentSerif text-[40px] w-fit">
            Checkout
          </p>
          <div className="bg-[#E5A93C] w-20"></div>
        </button>
        <div className="flex flex-col items-center gap-2 w-fit">
          <p className="text-[#C2B9B3] font-cormorantGaramond text-lg w-fit">
            Almost there! Review your order before payment.
          </p>
        </div>
      </div>
      <div className="flex pt-0 pr-20 pb-20 pl-20 items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="text-[#E5A93C] font-cormorantGaramond text-[22px] font-bold w-fit">
                Delivery Address
              </p>
            </div>
            <div className="flex p-6 flex-col items-start gap-4 rounded-lg border-[1.5px] border-[#E5A93C] bg-[#1F1814] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 w-fit">
                  <div className="flex justify-center items-center w-[18px] h-[18px] overflow-hidden">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-4 h-4 overflow-hidden relative "
                    >
                      <path
                        d="M10 13.9997V8.66634C10 8.48953 9.92976 8.31996 9.80474 8.19494C9.67971 8.06991 9.51014 7.99967 9.33333 7.99967H6.66667C6.48986 7.99967 6.32029 8.06991 6.19526 8.19494C6.07024 8.31996 6 8.48953 6 8.66634V13.9997M2 6.66666C1.99995 6.47271 2.04222 6.28108 2.12386 6.10514C2.20549 5.9292 2.32453 5.77319 2.47267 5.64799L7.13933 1.64799C7.37999 1.4446 7.6849 1.33301 8 1.33301C8.3151 1.33301 8.62001 1.4446 8.86067 1.64799L13.5273 5.64799C13.6755 5.77319 13.7945 5.9292 13.8761 6.10514C13.9578 6.28108 14 6.47271 14 6.66666V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V6.66666Z"
                        stroke="#E5A93C"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#E5A93C] font-dMSans text-sm font-bold w-fit">
                    HOME
                  </p>
                </div>
                <p className="text-[#E5A93C] font-dMSans text-[13px] font-bold w-fit">
                  DELIVERING HERE
                </p>
              </div>
              <div className="flex flex-col items-start gap-1.5 w-full">
                <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                  Shravan Kumar
                </p>
                <p className="text-[#C2B9B3] font-dMSans text-[15px] leading-[1.4em] w-full">
                  Flat 402, Sai Teja Residency, Gachibowli, Hyderabad
                </p>
                <p className="text-[#C2B9B3] font-dMSans text-[15px] w-full">
                  Telangana — 500032
                </p>
                <p className="text-[#E5A93C] font-dMSans text-sm font-medium w-full">
                  📱 +91 98765 43210
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <p className="text-[#E5A93C] font-dMSans text-[13px] font-bold w-fit">
                  CHANGE ADDRESS
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="text-[#E5A93C] font-cormorantGaramond text-[22px] font-bold w-fit">
                Delivery Options
              </p>
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex p-5 flex-col items-start gap-3 rounded-lg border-[1.5px] border-[#E5A93C] bg-[#1F1814] w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="text-[#E5A93C] font-dMSans text-sm font-bold w-fit">
                    STANDARD DELIVERY
                  </p>
                  <div className="w-4 h-4"></div>
                </div>
                <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                  35 - 45 Mins
                </p>
                <p className="text-[#C2B9B3] font-dMSans text-sm w-full">
                  Fresh traditional food prepared with care, delivered on time.
                </p>
                <p className="text-[#E5A93C] font-dMSans text-[15px] font-bold w-full">
                  ₹40
                </p>
              </div>
              <div className="flex p-5 flex-col items-start gap-3 rounded-lg border border-[#332722] bg-[#1F1814] w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="text-[#C2B9B3] font-dMSans text-sm font-bold w-fit">
                    EXPRESS DELIVERY
                  </p>
                  <div className="w-4 h-4"></div>
                </div>
                <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                  20 - 30 Mins
                </p>
                <p className="text-[#C2B9B3] font-dMSans text-sm w-full">
                  Priority cooking and expedited route directly to your door.
                </p>
                <p className="text-[#F5EFEB] font-dMSans text-[15px] font-bold w-full">
                  ₹80
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="text-[#E5A93C] font-cormorantGaramond text-[22px] font-bold w-fit">
                Delivery Instructions
              </p>
              <p className="text-[#C2B9B3] font-dMSans text-sm font-medium w-fit">
                డెలివరీ సూచనలు
              </p>
              <div className="bg-[#E5A93C] w-10 h-0.5"></div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex p-4 items-start rounded-md border border-[#332722] bg-[#181310] w-full h-20">
                <p className="text-[#C2B9B3] font-dMSans text-[15px] w-full">
                  e.g. Leave with gate keeper, ring bell twice, near the
                  temple...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="text-[#E5A93C] font-cormorantGaramond text-[22px] font-bold w-fit">
                Coupon Code
              </p>
              <p className="text-[#C2B9B3] font-dMSans text-sm font-medium w-fit">
                కూపన్ కోడ్
              </p>
              <div className="bg-[#E5A93C] w-10 h-0.5"></div>
            </div>
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex items-center gap-4 w-full">
                <div className="flex py-0 px-4 items-center rounded-md border border-[#332722] bg-[#181310] w-full h-12">
                  <p className="text-[#E5A93C] font-dMSans text-[15px] font-bold w-full">
                    BAMMA50
                  </p>
                </div>
                <button className="cursor-pointer text-nowrap flex py-3 px-7 justify-center items-center rounded-md bg-[#E5A93C] w-fit h-12">
                  <p className="text-[#120E0B] font-dMSans text-[15px] font-bold w-fit">
                    APPLY
                  </p>
                </button>
              </div>
              <div className="flex items-center gap-1.5 w-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 overflow-hidden relative "
                >
                  <g clipPath="url(#clip0_271_1259)">
                    <path
                      d="M14.535 6.66666C14.8395 8.16086 14.6225 9.71428 13.9203 11.0679C13.218 12.4214 12.073 13.4934 10.6761 14.1049C9.27913 14.7164 7.71479 14.8305 6.24391 14.4282C4.77302 14.026 3.4845 13.1316 2.59323 11.8943C1.70195 10.657 1.26179 9.15148 1.34615 7.62892C1.43051 6.10635 2.0343 4.65872 3.05681 3.52744C4.07932 2.39616 5.45876 1.64961 6.96509 1.4123C8.47141 1.17498 10.0136 1.46123 11.3344 2.22333M6.0013 7.33301L8.0013 9.33301L14.668 2.66634"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_271_1259">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#22C55E] font-dMSans text-sm font-medium w-full">
                  Coupon applied — Rs.50 off!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 w-[500px]">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <p className="text-[#E5A93C] font-cormorantGaramond text-[22px] font-bold w-fit">
              Your Order
            </p>
          </div>
          <div className="flex p-8 flex-col items-start gap-6 rounded-lg border border-[rgba(229,169,60,0.20)] bg-[#1F1814] w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                    Gongura Mutton
                  </p>
                  <p className="text-[#C2B9B3] font-dMSans text-sm w-full">
                    Qty: 1
                  </p>
                </div>
                <p className="text-[#F5EFEB] font-dMSans text-base font-medium w-fit">
                  ₹399
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                    Ragi Sangati + Natu Kodi
                  </p>
                  <p className="text-[#C2B9B3] font-dMSans text-sm w-full">
                    Qty: 1
                  </p>
                </div>
                <p className="text-[#F5EFEB] font-dMSans text-base font-medium w-fit">
                  ₹349
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-full">
                    Potharekulu
                  </p>
                  <p className="text-[#C2B9B3] font-dMSans text-sm w-full">
                    Qty: 1
                  </p>
                </div>
                <p className="text-[#F5EFEB] font-dMSans text-base font-medium w-fit">
                  ₹199
                </p>
              </div>
            </div>
            <div className="bg-[#332722] w-full"></div>
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-start w-full">
                <p className="text-[#C2B9B3] font-dMSans text-sm w-fit">
                  Subtotal
                </p>
                <p className="text-[#F5EFEB] font-dMSans text-sm w-fit">₹947</p>
              </div>
              <div className="flex justify-between items-start w-full">
                <p className="text-[#C2B9B3] font-dMSans text-sm w-fit">
                  Delivery Fee
                </p>
                <p className="text-[#F5EFEB] font-dMSans text-sm w-fit">₹40</p>
              </div>
              <div className="flex justify-between items-start w-full">
                <p className="text-[#22C55E] font-dMSans text-sm w-fit">
                  Coupon Discount
                </p>
                <p className="text-[#22C55E] font-dMSans text-sm w-fit">-₹50</p>
              </div>
              <div className="flex justify-between items-start w-full">
                <p className="text-[#C2B9B3] font-dMSans text-sm w-fit">
                  Taxes &amp; Charges
                </p>
                <p className="text-[#F5EFEB] font-dMSans text-sm w-fit">₹48</p>
              </div>
              <div className="bg-[#332722] w-full"></div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#F5EFEB] font-dMSans text-base font-bold w-fit">
                  Total Payable
                </p>
                <p className="text-[#E5A93C] font-dMSans text-2xl font-bold w-fit">
                  ₹985
                </p>
              </div>
              <p className="text-[#C2B9B3] font-dMSans text-xs w-full">
                * Prices include applicable taxes.
              </p>
            </div>
<button
  type="button"
  onClick={() => navigate("/payment")}
  className="w-full rounded-md bg-[#E5A93C] py-4 font-dMSans text-base font-bold text-[#120E0B] transition-all duration-300 hover:bg-[#F0BB55]"
>
  CONTINUE TO PAYMENT →
</button>
            <button className="cursor-pointer text-nowrap flex justify-center items-center gap-1.5 w-full">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 overflow-hidden relative "
              >
                <g clipPath="url(#clip0_271_1304)">
                  <path
                    d="M4.08333 6.41644V4.08292C4.08333 3.30931 4.39062 2.56738 4.93761 2.02036C5.48459 1.47333 6.22645 1.16602 7 1.16602C7.77355 1.16602 8.51541 1.47333 9.06239 2.02036C9.60938 2.56738 9.91667 3.30931 9.91667 4.08292V6.41644M2.91667 6.41644H11.0833C11.7277 6.41644 12.25 6.93881 12.25 7.5832V11.6669C12.25 12.3112 11.7277 12.8336 11.0833 12.8336H2.91667C2.27233 12.8336 1.75 12.3112 1.75 11.6669V7.5832C1.75 6.93881 2.27233 6.41644 2.91667 6.41644Z"
                    stroke="#C2B9B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_271_1304">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[#C2B9B3] font-dMSans text-xs w-fit">
                Your payment information is securely processed.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}