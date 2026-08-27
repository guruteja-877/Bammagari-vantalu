
import { useNavigate } from "react-router-dom";
export default function PaymentPage() {
   const navigate = useNavigate();

  return (
    <div className="flex min-h-[1500px] flex-col items-start bg-[#120D0B] min-w-screen min-h-screen">
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
                <g clipPath="url(#clip0_271_1328)">
                  <path
                    d="M1.53906 1.53711H3.03906L5.03406 10.8526C5.10725 11.1937 5.29707 11.4987 5.57085 11.715C5.84463 11.9313 6.18524 12.0454 6.53406 12.0376H13.8691C14.2104 12.0371 14.5414 11.9201 14.8073 11.706C15.0732 11.4919 15.2582 11.1935 15.3316 10.8601L16.5691 5.2873H3.84156M6.75171 15.7505C6.75171 16.1647 6.41592 16.5005 6.00171 16.5005C5.5875 16.5005 5.25171 16.1647 5.25171 15.7505C5.25171 15.3362 5.5875 15.0004 6.00171 15.0004C6.41592 15.0004 6.75171 15.3362 6.75171 15.7505ZM15.0017 15.7505C15.0017 16.1647 14.6659 16.5005 14.2517 16.5005C13.8375 16.5005 13.5017 16.1647 13.5017 15.7505C13.5017 15.3362 13.8375 15.0004 14.2517 15.0004C14.6659 15.0004 15.0017 15.3362 15.0017 15.7505Z"
                    stroke="#FAF3E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_271_1328">
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
      <div className="flex pt-14 pr-0 pb-10 pl-0 flex-col items-center gap-2 w-full">
        <p className="text-[#D4AF37] font-instrumentSerif text-[23px] w-fit">
          — Payment —
        </p>
        <p className="text-[#A79C93] font-dMSans text-sm w-fit">
          Choose your preferred payment method.
        </p>
      </div>
      <div className="flex pt-0 pr-20 pb-[100px] pl-20 items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-7 w-[780px]">
          <div className="flex items-center gap-2 w-fit">
            <div className="bg-[#D4AF37] w-1 h-[18px]"></div>
            <p className="text-[#D4AF37] font-eBGaramond text-xl font-semibold w-fit">
              SELECT PAYMENT METHOD
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex p-5 flex-col items-start rounded-xl border border-[#3D2B23] bg-[#1B1410] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex p-[3px] justify-center items-center rounded-[10px] border-2 border-[#3D2B23] w-5 h-5"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M1.66406 8.33316H18.3321M3.33086 4.16602H16.6653C17.5858 4.16602 18.3321 4.91229 18.3321 5.83287V14.1672C18.3321 15.0877 17.5858 15.834 16.6653 15.834H3.33086C2.41031 15.834 1.66406 15.0877 1.66406 14.1672V5.83287C1.66406 4.91229 2.41031 4.16602 3.33086 4.16602Z"
                      stroke="#F4EFEB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                    UPI &#40;Google Pay, PhonePe, Paytm&#41;
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-5 flex-col items-start gap-5 rounded-xl border-[1.5px] border-[#D4AF37] bg-[#1B1410] shadow-[008px0rgba(212,175,55,0.08)inset] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4 w-fit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex p-[3px] justify-center items-center rounded-[10px] border-2 border-[#D4AF37] w-5 h-5 "
                  >
                    <rect
                      x="1"
                      y="1"
                      width="18"
                      height="18"
                      rx="9"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />
                    <circle cx="10" cy="10" r="5" fill="#D4AF37" />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M1.66406 8.33316H18.3321M3.33086 4.16602H16.6653C17.5858 4.16602 18.3321 4.91229 18.3321 5.83287V14.1672C18.3321 15.0877 17.5858 15.834 16.6653 15.834H3.33086C2.41031 15.834 1.66406 15.0877 1.66406 14.1672V5.83287C1.66406 4.91229 2.41031 4.16602 3.33086 4.16602Z"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                    Credit &#x2F; Debit Card
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="bg-[#3D2B23] w-full"></div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <p className="text-[#D4AF37] font-dMSans text-xs font-semibold w-fit">
                      Card Number
                    </p>
                    <div className="flex py-0 px-4 items-center rounded-lg border border-[#3D2B23] bg-[#261D18] w-full h-[46px]">
                      <p className="text-[#F4EFEB] font-dMSans text-sm w-full">
                        4321 •••• •••• 9876
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 w-full">
                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="text-[#D4AF37] font-dMSans text-xs font-semibold w-fit">
                        Expiry Date
                      </p>
                      <div className="flex py-0 px-4 items-center rounded-lg border border-[#3D2B23] bg-[#261D18] w-full h-[46px]">
                        <p className="text-[#F4EFEB] font-dMSans text-sm w-full">
                          MM &#x2F; YY
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="text-[#D4AF37] font-dMSans text-xs font-semibold w-fit">
                        CVV
                      </p>
                      <div className="flex py-0 px-4 items-center rounded-lg border border-[#3D2B23] bg-[#261D18] w-full h-[46px]">
                        <p className="text-[#F4EFEB] font-dMSans text-sm w-full">
                          •••
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <p className="text-[#D4AF37] font-dMSans text-xs font-semibold w-fit">
                      Cardholder Name
                    </p>
                    <div className="flex py-0 px-4 items-center rounded-lg border border-[#3D2B23] bg-[#261D18] w-full h-[46px]">
                      <p className="text-[#F4EFEB] font-dMSans text-sm w-full">
                        Bamma Prasad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 w-fit">
                    <div className="flex justify-center items-center rounded bg-[#D4AF37] w-[18px] h-[18px]">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 w-2.5 h-2.5 overflow-hidden relative "
                      >
                        <path
                          d="M8.33006 2.5L3.74719 7.083L1.66406 4.99982"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[#A79C93] font-dMSans text-[13px] w-fit">
                      Save this card securely for future culinary journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-5 flex-col items-start rounded-xl border border-[#3D2B23] bg-[#1B1410] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex p-[3px] justify-center items-center rounded-[10px] border-2 border-[#3D2B23] w-5 h-5"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M1.66406 8.33316H18.3321M3.33086 4.16602H16.6653C17.5858 4.16602 18.3321 4.91229 18.3321 5.83287V14.1672C18.3321 15.0877 17.5858 15.834 16.6653 15.834H3.33086C2.41031 15.834 1.66406 15.0877 1.66406 14.1672V5.83287C1.66406 4.91229 2.41031 4.16602 3.33086 4.16602Z"
                      stroke="#F4EFEB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                    Net Banking
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-5 flex-col items-start rounded-xl border border-[#3D2B23] bg-[#1B1410] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex p-[3px] justify-center items-center rounded-[10px] border-2 border-[#3D2B23] w-5 h-5"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M1.66406 8.33316H18.3321M3.33086 4.16602H16.6653C17.5858 4.16602 18.3321 4.91229 18.3321 5.83287V14.1672C18.3321 15.0877 17.5858 15.834 16.6653 15.834H3.33086C2.41031 15.834 1.66406 15.0877 1.66406 14.1672V5.83287C1.66406 4.91229 2.41031 4.16602 3.33086 4.16602Z"
                      stroke="#F4EFEB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                    Other Wallets &#40;Paytm, Amazon Pay&#41;
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-5 flex-col items-start rounded-xl border border-[#3D2B23] bg-[#1B1410] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex p-[3px] justify-center items-center rounded-[10px] border-2 border-[#3D2B23] w-5 h-5"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 overflow-hidden relative "
                  >
                    <path
                      d="M1.66406 8.33316H18.3321M3.33086 4.16602H16.6653C17.5858 4.16602 18.3321 4.91229 18.3321 5.83287V14.1672C18.3321 15.0877 17.5858 15.834 16.6653 15.834H3.33086C2.41031 15.834 1.66406 15.0877 1.66406 14.1672V5.83287C1.66406 4.91229 2.41031 4.16602 3.33086 4.16602Z"
                      stroke="#F4EFEB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[#F4EFEB] font-dMSans text-[15px] font-semibold w-fit">
                    Cash On Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-2 items-center gap-2 w-fit">
            <p className="text-[#D4AF37] font-dMSans text-sm w-fit">
              🔒 Your payment is secure and encrypted.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-7 w-[440px]">
          <div className="flex items-center gap-2 w-fit">
            <div className="bg-[#D4AF37] w-1 h-[18px]"></div>
            <p className="text-[#D4AF37] font-eBGaramond text-xl font-semibold w-fit">
              ORDER SUMMARY
            </p>
          </div>
          <div className="flex p-6 flex-col items-start gap-6 rounded-2xl border border-[#3D2B23] bg-[#1B1410] w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <p className="text-[#F4EFEB] font-eBGaramond text-base font-semibold w-full">
                    Gongura Mutton
                  </p>
                  <p className="text-[#A79C93] font-dMSans text-xs w-fit">
                    Quantity: 1
                  </p>
                </div>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹399
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <p className="text-[#F4EFEB] font-eBGaramond text-base font-semibold w-full">
                    Ragi Sangati + Natu Kodi
                  </p>
                  <p className="text-[#A79C93] font-dMSans text-xs w-fit">
                    Quantity: 1
                  </p>
                </div>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹349
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <p className="text-[#F4EFEB] font-eBGaramond text-base font-semibold w-full">
                    Potharekulu
                  </p>
                  <p className="text-[#A79C93] font-dMSans text-xs w-fit">
                    Quantity: 1
                  </p>
                </div>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹199
                </p>
              </div>
            </div>
            <div className="bg-[#3D2B23] w-full"></div>
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-dMSans text-sm w-fit">
                  Subtotal
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹947
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-dMSans text-sm w-fit">
                  Delivery Partner Fee
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹40
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-dMSans text-sm w-fit">
                  Bamma Welcome Discount
                </p>
                <p className="text-[#2EA37F] font-dMSans text-sm font-semibold w-fit">
                  -₹50
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[#A79C93] font-dMSans text-sm w-fit">
                  Taxes &amp; Charges
                </p>
                <p className="text-[#F4EFEB] font-dMSans text-sm font-semibold w-fit">
                  ₹48
                </p>
              </div>
            </div>
            <div className="bg-[#3D2B23] w-full"></div>
            <div className="flex justify-between items-center w-full">
              <p className="text-[#D4AF37] font-dMSans text-sm w-fit">
                TOTAL PAYABLE
              </p>
              <p className="text-[#D4AF37] font-dMSans text-sm font-semibold w-fit">
                ₹985
              </p>
            </div>
            <div className="bg-[#3D2B23] w-full"></div>
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="text-[#A79C93] font-dMSans text-[11px] font-bold w-fit">
                Delivering To:
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F4EFEB] text-ellipsis font-dMSans text-sm font-semibold w-[220px]">
                  Gachibowli, Hyderabad
                </p>
                <p className="text-[#D4AF37] font-dMSans text-xs font-bold w-fit">
                  CHANGE ADDRESS
                </p>
              </div>
            </div>
<button
  type="button"
  onClick={() => navigate("/order-confirmation")}
  className="w-full rounded-xl bg-[#D4AF37] py-4 font-dMSans text-lg font-bold text-[#111111] transition-all duration-300 hover:bg-[#E5C65A]"
>
  PAY ₹985
</button>
          </div>
        </div>
      </div>
    </div>
  );
}