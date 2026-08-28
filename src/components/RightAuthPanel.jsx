import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RightAuthPanel() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      login(data.user, data.token, rememberMe);

      setMessage("Login successful!");

      // Redirect to home page
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#D4AF37]">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="h-12 w-full rounded-lg border border-[#3D2B23] bg-[#261D18] px-4 text-white placeholder:text-[#A79C93] outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-[#A79C93]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
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

          {/* Error */}
          {error && (
            <p className="text-center text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Success */}
          {message && (
            <p className="text-center text-sm text-green-400">
              {message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-lg bg-[#D4AF37] font-bold text-[#120D0B] transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "LOGGING IN..." : "LOGIN →"}
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
            onClick={() => navigate("/")}
          >
            CONTINUE AS GUEST
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-[#A79C93]">
            Don't have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/signup")}
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

