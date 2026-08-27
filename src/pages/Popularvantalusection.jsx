import Foodimage from "../assets/popularvantalu/Foodimage.png";
import Foodimage1 from "../assets/popularvantalu/Foodimage(1).png";
import Foodimage2 from "../assets/popularvantalu/Foodimage(2).png";
import Foodimage3 from "../assets/popularvantalu/Foodimage(3).png";
import Foodimage4 from "../assets/popularvantalu/Foodimage(4).png";
import Foodimage5 from "../assets/popularvantalu/Foodimage(5).png";

export default function Popularvantalusection() {
  return (
    <div className="flex p-20 flex-col items-center gap-10 bg-[#1A1411] min-w-screen min-h-screen absolute left-0 top-[2120px]">
      <div className="flex flex-col items-center gap-3 w-fit">
        <div className="flex items-center gap-3 w-fit">
          <div className="flex items-center gap-1 w-fit">
            <div className="bg-[#D4A359] w-4 h-px"></div>
            <div className="rounded-sm bg-[#D4A359] w-1 h-1"></div>
            <div className="bg-[#D4A359] w-4 h-px"></div>
          </div>
          <p className="text-[#D4A359] font-dMSans text-3xl font-bold w-fit">
            POPULAR VANTALU
          </p>
          <div className="flex items-center gap-1 w-fit">
            <div className="bg-[#D4A359] w-4 h-px"></div>
            <div className="rounded-sm bg-[#D4A359] w-1 h-1"></div>
            <div className="bg-[#D4A359] w-4 h-px"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex items-start gap-6 w-full">
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src={Foodimage}
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#C62828] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#C62828"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#C62828" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Andhra
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_443)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_443">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.8
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Gongura Mutton
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹380
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_452)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_452">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_454)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_454">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_456)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_456">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_458)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_458">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src="/Foodimage(1).png"
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#C62828] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#C62828"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#C62828" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Telangana
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_471)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_471">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.7
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Ragi Sangati + Natu Kodi
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹350
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_480)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_480">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_482)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_482">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_484)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_484">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_486)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_486">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src="/Foodimage(2).png"
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#C62828] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#C62828"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#C62828" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Konaseema
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_499)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_499">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.9
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Konaseema Fish Curry
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹320
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_508)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_508">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_510)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_510">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_512)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_512">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_514)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_514">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-6 w-full">
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src={Foodimage3}
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#C62828] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#C62828"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#C62828" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Hyderabad
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_528)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_528">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.9
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Hyderabadi Biryani
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹290
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_537)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_537">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_539)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_539">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_541)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_541">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_543)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_543">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src={Foodimage4}
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#2E7D32] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#2E7D32" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Andhra
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_556)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_556">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.6
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Andhra Meals
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹250
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_565)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_565">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_567)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_567">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_569)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_569">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_571)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_571">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-[#332520] bg-[#1A1411] w-full overflow-hidden">
            <div className="flex items-start w-full h-[200px] overflow-hidden relative">
<img
  src={Foodimage5}
  className="w-full h-full max-w-none"
  alt="food-image"
/>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-1 justify-center items-center absolute right-3 top-3 rounded-md border-[1.5px] border-[#C62828] bg-[rgba(0,0,0,0.70)] w-[18px] h-[18px] "
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  fill="black"
                  fillOpacity="0.701961"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="16.5"
                  height="16.5"
                  rx="5.25"
                  stroke="#C62828"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="4" fill="#C62828" />
              </svg>
            </div>
            <div className="flex p-[18px] flex-col items-start gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-[#D4A359] font-dMSans text-xs font-semibold w-fit">
                  Coastal Andhra
                </p>
                <div className="flex items-center gap-1 w-fit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 overflow-hidden relative "
                  >
                    <g clipPath="url(#clip0_45_584)">
                      <path
                        d="M5.86064 1.03937C5.81867 1.06542 5.78482 1.10269 5.76291 1.14696L4.60841 3.48646C4.53226 3.64059 4.4198 3.77392 4.2807 3.87495C4.14161 3.97599 3.98004 4.04171 3.80991 4.06646L1.22741 4.44396C1.17826 4.45091 1.13205 4.47152 1.09405 4.50345C1.05605 4.53538 1.02777 4.57734 1.01245 4.62455C0.99713 4.67177 0.995377 4.72233 1.00739 4.7705C1.01941 4.81866 1.04471 4.86247 1.08041 4.89696L2.94841 6.71546C3.07172 6.83554 3.16396 6.98381 3.21718 7.14748C3.2704 7.31116 3.28301 7.48532 3.25391 7.65496L2.81341 10.2245C2.80484 10.2733 2.81015 10.3236 2.82874 10.3696C2.84733 10.4156 2.87845 10.4554 2.91856 10.4846C2.95867 10.5137 3.00616 10.5311 3.05564 10.5346C3.10511 10.5381 3.15458 10.5277 3.19841 10.5045L5.50691 9.29046C5.65905 9.21057 5.82832 9.16883 6.00016 9.16883C6.172 9.16883 6.34127 9.21057 6.49341 9.29046L8.80241 10.5045C8.84626 10.5278 8.89579 10.5384 8.94534 10.5349C8.9949 10.5315 9.04249 10.5141 9.08268 10.485C9.12288 10.4558 9.15405 10.4159 9.17266 10.3698C9.19127 10.3237 9.19655 10.2734 9.18791 10.2245L8.74691 7.65446C8.71794 7.4849 8.73061 7.31085 8.78383 7.14727C8.83705 6.9837 8.92922 6.83551 9.05241 6.71546L10.9204 4.89646C10.9558 4.86193 10.9809 4.81819 10.9927 4.77018C11.0045 4.72216 11.0027 4.67179 10.9874 4.62476C10.9721 4.57773 10.944 4.53592 10.9062 4.50406C10.8683 4.47219 10.8224 4.45155 10.7734 4.44446L8.19041 4.06646C8.02047 4.04152 7.85913 3.97571 7.72022 3.87469C7.58132 3.77366 7.469 3.64044 7.39291 3.48646L6.23791 1.14696C6.216 1.10269 6.18215 1.06542 6.14019 1.03937C6.09822 1.01332 6.04981 0.999512 6.00041 0.999512C5.95102 0.999512 5.9026 1.01332 5.86064 1.03937Z"
                        stroke="#D4A359"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_584">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#F5ECE3] font-dMSans text-[13px] font-semibold w-fit">
                    4.7
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="line-clamp-1 overflow-hidden text-[#F5ECE3] text-ellipsis font-cormorantGaramond text-xl font-bold w-full">
                  Royyala Iguru
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
                  <p className="text-[#D4A359] font-dMSans text-lg font-bold w-fit">
                    ₹360
                  </p>
                  <div className="flex items-center gap-0.5 w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_593)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_593">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_595)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_595">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_597)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#C62828"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_597">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 overflow-hidden relative "
                    >
                      <g clipPath="url(#clip0_45_599)">
                        <path
                          d="M7.50003 4.49979L4.49979 7.50003M4.49979 4.49979L7.50003 7.50003M11.0003 5.99991C11.0003 8.76156 8.76156 11.0003 5.99991 11.0003C3.23827 11.0003 0.999512 8.76156 0.999512 5.99991C0.999512 3.23827 3.23827 0.999512 5.99991 0.999512C8.76156 0.999512 11.0003 3.23827 11.0003 5.99991Z"
                          stroke="#332520"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_45_599">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex py-2 px-4 items-center gap-1 rounded-lg border border-[#D4A359] bg-[#261D1A] w-fit">
                  <p className="text-[#D4A359] font-dMSans text-[13px] font-bold w-fit">
                    + ADD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}