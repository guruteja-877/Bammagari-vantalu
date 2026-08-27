export default function SignupRightAuthPanel() {
  return (
    <div className="w-full h-full bg-[#120D0B] py-[55px] px-[55px] flex flex-col">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex items-center gap-3">
          <div className="bg-[#D4AF37] w-5 h-[1px]"></div>

          <p className="text-[#D4AF37] font-instrumentSerif text-3xl">
            Create Account
          </p>

          <div className="bg-[#D4AF37] w-5 h-[1px]"></div>
        </div>

        <p className="text-[#A79C93] font-dMSans text-sm text-center">
          Join Bammagari Ruchulu for authentic flavours.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 w-full mt-6">

        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Full Name
          </p>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Mobile Number
          </p>

          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Email Address
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Password
          </p>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Confirm Password
          </p>

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

      </div>

      {/* Button */}
      <div className="flex flex-col items-center gap-4 w-full mt-6">

        <button className="w-full h-[52px] rounded-lg bg-[#D4AF37] cursor-pointer">
          <p className="text-[#120D0B] font-dMSans text-[15px] font-bold">
            CREATE ACCOUNT →
          </p>
        </button>

        <p className="text-[#A79C93] font-dMSans text-xs text-center">
          By creating an account, you agree to our Terms &amp; Privacy Policy.
        </p>

      </div>

      {/* Login */}
      <div className="flex justify-center items-center gap-2 mt-3">
        <p className="text-[#A79C93] font-dMSans text-sm">
          Already have an account?
        </p>

        <p className="text-[#D4AF37] font-dMSans text-sm font-bold cursor-pointer">
          LOGIN
        </p>
      </div>

    </div>
  );
}