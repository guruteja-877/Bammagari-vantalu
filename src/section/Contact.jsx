import Header from "../components/Header";
import Footer from '../pages/Footer'

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#0C0806] overflow-hidden">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <Header />

      <main className="relative z-10 pt-[104px]">

        {/* =====================================================
            PAGE TITLE
        ===================================================== */}
        <section className="flex pt-20 pr-20 pb-[60px] pl-20 flex-col items-center gap-4 bg-[#0C0806] w-full">

          <p className="text-[#D4AF37] font-instrumentSerif text-3xl w-fit">
            — CONTACT US —
          </p>

          <p className="text-[#CBBFB7] font-manrope text-lg leading-[1.6em] w-[720px] text-center">
            We'd love to hear from you — reach out anytime.
          </p>

        </section>


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}
        <section className="flex pt-0 pr-20 pb-[100px] pl-20 items-start gap-16 w-full">

          {/* ===================================================
              SEND MESSAGE
          =================================================== */}
          <div className="flex p-12 flex-col items-start gap-8 rounded-2xl border border-[rgba(200,169,96,0.25)] bg-[#17100D] w-full">

            <p className="text-[#D59D3F] font-cormorantGaramond text-4xl font-bold w-fit">
              Send Us a Message
            </p>

            <div className="flex flex-col items-start gap-6 w-full">

              {/* Full Name */}
              <div className="flex flex-col items-start gap-2 w-full">

                <p className="text-[#FAF6F0] font-manrope text-sm font-semibold">
                  Full Name
                </p>

                <div className="flex p-4 items-start rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#1F1714] w-full">

                  <p className="text-[#CBBFB7] font-manrope text-[15px]">
                    Enter your name
                  </p>

                </div>

              </div>


              {/* Email */}
              <div className="flex flex-col items-start gap-2 w-full">

                <p className="text-[#FAF6F0] font-manrope text-sm font-semibold">
                  Email Address
                </p>

                <div className="flex p-4 items-start rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#1F1714] w-full">

                  <p className="text-[#CBBFB7] font-manrope text-[15px]">
                    Enter your email
                  </p>

                </div>

              </div>


              {/* Phone */}
              <div className="flex flex-col items-start gap-2 w-full">

                <p className="text-[#FAF6F0] font-manrope text-sm font-semibold">
                  Phone Number
                </p>

                <div className="flex p-4 items-start rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#1F1714] w-full">

                  <p className="text-[#CBBFB7] font-manrope text-[15px]">
                    Enter your phone number
                  </p>

                </div>

              </div>


              {/* Subject */}
              <div className="flex flex-col items-start gap-2 w-full">

                <p className="text-[#FAF6F0] font-manrope text-sm font-semibold">
                  Subject
                </p>

                <div className="flex p-4 justify-between items-center rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#1F1714] w-full">

                  <p className="text-[#CBBFB7] font-manrope text-[15px]">
                    Select a subject
                  </p>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#C8A960"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

              </div>


              {/* Message */}
              <div className="flex flex-col items-start gap-2 w-full">

                <p className="text-[#FAF6F0] font-manrope text-sm font-semibold">
                  Message
                </p>

                <div className="flex p-4 items-start rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#1F1714] w-full h-[120px]">

                  <p className="text-[#CBBFB7] font-manrope text-[15px]">
                    Write your message here...
                  </p>

                </div>

              </div>

            </div>


            {/* Send Message Button */}
            <button
              type="button"
              className="cursor-pointer flex py-4 px-0 justify-center items-center rounded-lg bg-[#C8A960] w-full"
            >

              <p className="text-[#0C0806] font-manrope text-base font-bold">
                Send Message
              </p>

            </button>

          </div>


          {/* ===================================================
              CONTACT INFORMATION
          =================================================== */}
          <div className="flex flex-col items-start gap-10 w-[480px]">

            <div className="flex p-10 flex-col items-start gap-8 rounded-2xl border border-[rgba(200,169,96,0.25)] bg-[#17100D] w-full">

              <p className="text-[#D59D3F] font-cormorantGaramond text-[32px] font-bold">
                Contact Information
              </p>


              <div className="flex flex-col items-start gap-6 w-full">

                {/* Phone */}
                <div className="flex items-start gap-4 w-full">

                  <div className="flex justify-center items-center rounded-[20px] border border-[#C8A960] bg-[rgba(200,169,96,0.13)] w-10 h-10 shrink-0">

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33301 1H3.33398C3.42227 1.0001 3.5069 1.03523 3.56934 1.09766C3.63177 1.16009 3.66688 1.24473 3.66699 1.33301V3.33398C3.66693 3.38553 3.65485 3.4363 3.63184 3.48242C3.60869 3.52872 3.57462 3.56953 3.5332 3.60059L3.22168 3.83398C2.9472 4.04423 2.74846 4.32393 2.64355 4.6416C2.51579 5.016 2.55982 5.40962 2.72852 5.89453C3.73831 7.94739 5.39802 9.60412 7.44824 10.6104C7.81587 10.7791 8.20386 10.8154 8.57129 10.7236C8.93857 10.6318 9.26382 10.4175 9.49316 10.1162L9.72852 9.80762C9.76542 9.75943 9.8053 9.72528 9.85156 9.70215C9.89784 9.67902 9.94924 9.66699 10.001 9.66699H12.001C12.0892 9.667 12.1738 9.70237 12.2363 9.76465C12.2989 9.82718 12.334 9.91254 12.334 10.001V12.001C12.334 12.0894 12.2989 12.1738 12.2363 12.2363C12.1738 12.2989 12.0894 12.334 12.001 12.334C9.08334 12.334 6.28476 11.1754 4.22168 9.1123C2.15873 7.04924 1 4.25055 1 1.33301C1.00011 1.24473 1.03523 1.16009 1.09766 1.09766C1.16009 1.03523 1.24473 1.00011 1.33301 1Z"
                        stroke="#C8A960"
                        strokeWidth="2"
                      />
                    </svg>

                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">

                    <p className="text-[#CBBFB7] font-manrope text-[13px]">
                      Phone Number
                    </p>

                    <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                      +91 98765 43210
                    </p>

                  </div>

                </div>


                {/* Email */}
                <div className="flex items-start gap-4 w-full">

                  <div className="flex justify-center items-center rounded-[20px] border border-[#C8A960] bg-[rgba(200,169,96,0.13)] w-10 h-10 shrink-0">

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33301 1H12.001C12.1852 1.00001 12.3339 1.14925 12.334 1.33301V9.33203C12.334 9.51588 12.1853 9.66601 12.001 9.66602H1.33301C1.14888 9.66578 1 9.51574 1 9.33203V1.33301C1.00011 1.14925 1.14888 1.00001 1.33301 1Z"
                        stroke="#C8A960"
                        strokeWidth="2"
                      />
                    </svg>

                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">

                    <p className="text-[#CBBFB7] font-manrope text-[13px]">
                      Email Address
                    </p>

                    <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                      orders@bammagariruchulu.com
                    </p>

                  </div>

                </div>


                {/* Restaurant */}
                <div className="flex items-start gap-4 w-full">

                  <div className="flex justify-center items-center rounded-[20px] border border-[#C8A960] bg-[rgba(200,169,96,0.13)] w-10 h-10 shrink-0">

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33301 1C6.482 1.00006 7.58396 1.45685 8.39648 2.26953C9.20898 3.08225 9.66602 4.18458 9.66602 5.33398C9.66596 6.66131 8.91096 8.13969 7.86914 9.50879C6.98056 10.6765 5.96971 11.6464 5.33203 12.2168C4.69434 11.6463 3.68503 10.6759 2.79688 9.50879C1.75505 8.13969 1.00006 6.66131 1 5.33398C1 4.18452 1.45695 3.08227 2.26953 2.26953C3.0821 1.45685 4.18398 1 5.33301 1Z"
                        stroke="#C8A960"
                        strokeWidth="2"
                      />
                    </svg>

                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">

                    <p className="text-[#CBBFB7] font-manrope text-[13px]">
                      Our Restaurant
                    </p>

                    <p className="text-[#FAF6F0] font-manrope text-base font-semibold leading-[1.4em] w-full">
                      Plot 42, Jubilee Hills, Road No. 10, Hyderabad, Telangana
                      — 500033
                    </p>

                  </div>

                </div>


                {/* Kitchen Hours */}
                <div className="flex items-start gap-4 w-full">

                  <div className="flex justify-center items-center rounded-[20px] border border-[#C8A960] bg-[rgba(200,169,96,0.13)] w-10 h-10 shrink-0">

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9998 5.99953V12L16.0001 14.0002M22.0006 12C22.0006 17.5233 17.5231 22.0008 11.9998 22.0008C6.47653 22.0008 1.99902 17.5233 1.99902 12C1.99902 6.47672 6.47653 1.99921 11.9998 1.99921C17.5231 1.99921 22.0006 6.47672 22.0006 12Z"
                        stroke="#C8A960"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">

                    <p className="text-[#CBBFB7] font-manrope text-[13px]">
                      Kitchen Hours
                    </p>

                    <p className="text-[#FAF6F0] font-manrope text-base font-semibold">
                      Mon–Sun: 11:00 AM – 11:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        {/* =================================================
                MAP
            ================================================= */}
            <div className="flex flex-col items-start gap-4 w-full">

              <p className="text-[#C8A960] font-cormorantGaramond text-2xl font-bold">
                Find Us on Map
              </p>

              <img
                src="/Mapplaceholder.png"
                className="flex items-start rounded-2xl border-2 border-[#C8A960] w-full h-[260px] object-cover overflow-hidden"
                alt="Map-Placeholder"
              />

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
          Footer.jsx from your uploaded code
      ===================================================== */}
      <Footer />

    </div>
  );
}