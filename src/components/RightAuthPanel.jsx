export default function RightAuthPanel() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#120D0B] px-16">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <h1 className="font-instrumentSerif text-4xl text-[#D4AF37]">
              Welcome Back
            </h1>
            <div className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <p className="text-[#A79C93] text-sm">
            Login to continue your delicious journey.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#D4AF37]">
              Mobile Number / Email
            </label>

            <input
              type="text"
              placeholder="Enter your mobile number or email"
              className="h-12 w-full rounded-lg border border-[#3D2B23] bg-[#261D18] px-4 text-white placeholder:text-[#A79C93] outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#D4AF37]">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="h-12 w-full rounded-lg border border-[#3D2B23] bg-[#261D18] px-4 text-white placeholder:text-[#A79C93] outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-[#A79C93]">
              <input
                type="checkbox"
                className="accent-[#D4AF37]"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm font-semibold text-[#D4AF37]"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#D4AF37] font-bold text-[#120D0B] transition hover:opacity-90"
          >
            LOGIN →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#3D2B23]" />
            <span className="text-xs text-[#A79C93]">OR</span>
            <div className="h-px flex-1 bg-[#3D2B23]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#3D2B23] text-white transition hover:border-[#D4AF37]"
          >
            Continue with Google
          </button>

          {/* Guest */}
          <button
            type="button"
            className="w-full text-center font-bold text-[#D4AF37]"
          >
            CONTINUE AS GUEST
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-[#A79C93]">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-bold text-[#D4AF37]"
            >
              CREATE ACCOUNT
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}