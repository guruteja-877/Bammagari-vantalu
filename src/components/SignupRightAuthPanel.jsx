// export default function SignupRightAuthPanel() {
//   return (
//     <div className="w-full h-full bg-[#120D0B] py-[55px] px-[55px] flex flex-col">

//       {/* Header */}
//       <div className="flex flex-col items-center gap-2 w-full">
//         <div className="flex items-center gap-3">
//           <div className="bg-[#D4AF37] w-5 h-[1px]"></div>

//           <p className="text-[#D4AF37] font-instrumentSerif text-3xl">
//             Create Account
//           </p>

//           <div className="bg-[#D4AF37] w-5 h-[1px]"></div>
//         </div>

//         <p className="text-[#A79C93] font-dMSans text-sm text-center">
//           Join Bammagari Ruchulu for authentic flavours.
//         </p>
//       </div>

//       {/* Form */}
//       <div className="flex flex-col gap-4 w-full mt-6">

//         <div className="flex flex-col gap-2 w-full">
//           <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
//             Full Name
//           </p>

//           <input
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
//           />
//         </div>

//         <div className="flex flex-col gap-2 w-full">
//           <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
//             Mobile Number
//           </p>

//           <input
//             type="text"
//             placeholder="Enter your mobile number"
//             className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
//           />
//         </div>

//         <div className="flex flex-col gap-2 w-full">
//           <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
//             Email Address
//           </p>

//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
//           />
//         </div>

//         <div className="flex flex-col gap-2 w-full">
//           <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
//             Password
//           </p>

//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
//           />
//         </div>

//         <div className="flex flex-col gap-2 w-full">
//           <p className="text-[#D4AF37] font-dMSans text-xs font-semibold">
//             Confirm Password
//           </p>

//           <input
//             type="password"
//             placeholder="Confirm your password"
//             className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
//           />
//         </div>

//       </div>

//       {/* Button */}
//       <div className="flex flex-col items-center gap-4 w-full mt-6">

//         <button className="w-full h-[52px] rounded-lg bg-[#D4AF37] cursor-pointer">
//           <p className="text-[#120D0B] font-dMSans text-[15px] font-bold">
//             CREATE ACCOUNT →
//           </p>
//         </button>

//         <p className="text-[#A79C93] font-dMSans text-xs text-center">
//           By creating an account, you agree to our Terms &amp; Privacy Policy.
//         </p>

//       </div>

//       {/* Login */}
//       <div className="flex justify-center items-center gap-2 mt-3">
//         <p className="text-[#A79C93] font-dMSans text-sm">
//           Already have an account?
//         </p>

//         <p className="text-[#D4AF37] font-dMSans text-sm font-bold cursor-pointer">
//           LOGIN
//         </p>
//       </div>

//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupRightAuthPanel() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      setMessage("Account created successfully!");

      // Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Go to login after 1.5 seconds
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError("Unable to connect to the server.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full mt-6"
      >

        {/* Full Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Mobile Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#D4AF37] font-dMSans text-xs font-semibold">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            className="w-full h-[46px] px-4 rounded-lg border border-[#3D2B23] bg-[#261D18] text-[#A79C93] placeholder-[#A79C93] outline-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        {/* Success */}
        {message && (
          <p className="text-green-400 text-sm text-center">
            {message}
          </p>
        )}

        {/* Button */}
        <div className="flex flex-col items-center gap-4 w-full mt-2">

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[52px] rounded-lg bg-[#D4AF37] cursor-pointer disabled:opacity-50"
          >
            <p className="text-[#120D0B] font-dMSans text-[15px] font-bold">
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT →"}
            </p>
          </button>

          <p className="text-[#A79C93] font-dMSans text-xs text-center">
            By creating an account, you agree to our Terms &amp; Privacy Policy.
          </p>

        </div>
      </form>

      {/* Login */}
      <div className="flex justify-center items-center gap-2 mt-3">
        <p className="text-[#A79C93] font-dMSans text-sm">
          Already have an account?
        </p>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-[#D4AF37] font-dMSans text-sm font-bold cursor-pointer"
        >
          LOGIN
        </button>
      </div>

    </div>
  );
}
