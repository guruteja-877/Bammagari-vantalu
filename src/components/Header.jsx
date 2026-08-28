// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(250,243,224,0.10)] bg-[#080706]/80 backdrop-blur-md">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-12">

//         {/* Logo */}
//         <Link
//           to="/"
//           className="font-instrumentSerif text-[32px] tracking-[-0.016em] text-[#DF9F28]"
//         >
//           Bammagari Ruchulu
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden lg:flex items-center gap-8">

//           <Link
//             to="/"
//             className="flex flex-col items-center gap-1"
//           >
//             <span className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28]">
//               Home
//             </span>

//             <div className="h-[2px] w-4 rounded bg-[#DF9F28]" />
//           </Link>

//           <Link
//             to="/menu"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
//           >
//             Our Menu
//           </Link>

//           <Link
//             to="/specials"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
//           >
//             Bamma Specials
//           </Link>

//           <Link
//             to="/about"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
//           >
//             About Bamma
//           </Link>

//           <Link
//             to="/offers"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
//           >
//             Offers
//           </Link>

//           <Link
//             to="/contact"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
//           >
//             Contact
//           </Link>

//         </nav>

//         {/* Right Side */}
//         <div className="flex items-center gap-5">

//           {/* Cart */}
//           <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(250,243,224,0.70)] transition hover:border-[#DF9F28]">

//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//             >
//               <path
//                 d="M1.5 1.5H3L5 10.8C5.1 11.2 5.3 11.5 5.6 11.7C5.9 11.9 6.2 12 6.5 12H13.8C14.2 12 14.5 11.9 14.8 11.7C15.1 11.5 15.2 11.2 15.3 10.9L16.5 5.3H3.8"
//                 stroke="#FAF3E0"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />

//               <circle
//                 cx="6"
//                 cy="15.5"
//                 r="1"
//                 fill="#FAF3E0"
//               />

//               <circle
//                 cx="14.2"
//                 cy="15.5"
//                 r="1"
//                 fill="#FAF3E0"
//               />

//             </svg>

//           </button>

//           {/* User */}

//           <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DF9F28] transition hover:bg-[#DF9F28] group">

//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 14 14"
//               fill="none"
//             >
//               <path
//                 d="M11 12V11C11 9.8 10.1 8.8 8.8 8.8H5.2C3.9 8.8 3 9.8 3 11V12M9.3 4.1C9.3 5.4 8.3 6.4 7 6.4C5.7 6.4 4.7 5.4 4.7 4.1C4.7 2.8 5.7 1.8 7 1.8C8.3 1.8 9.3 2.8 9.3 4.1Z"
//                 stroke="#DF9F28"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 className="group-hover:stroke-black"
//               />
//             </svg>

//           </button>

//           <Link
//             to="/login"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28] transition hover:text-white"
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28] transition hover:text-white"
//           >
//             Sign In
//           </Link>

//         </div>

//       </div>
//     </header>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(250,243,224,0.10)] bg-[#080706]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          className="font-instrumentSerif text-[32px] tracking-[-0.016em] text-[#DF9F28]"
        >
          Bammagari Ruchulu
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          <Link
            to="/"
            className="flex flex-col items-center gap-1"
          >
            <span className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28]">
              Home
            </span>

            <div className="h-[2px] w-4 rounded bg-[#DF9F28]" />
          </Link>

          <Link
            to="/menu"
            className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
          >
            Our Menu
          </Link>

          <Link
            to="/specials"
            className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
          >
            Bamma Specials
          </Link>

          <Link
            to="/about"
            className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
          >
            About Bamma
          </Link>

          <Link
            to="/offers"
            className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
          >
            Offers
          </Link>

          <Link
            to="/contact"
            className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#FAF3E0] transition hover:text-[#DF9F28]"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(250,243,224,0.70)] transition hover:border-[#DF9F28]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.5 1.5H3L5 10.8C5.1 11.2 5.3 11.5 5.6 11.7C5.9 11.9 6.2 12 6.5 12H13.8C14.2 12 14.5 11.9 14.8 11.7C15.1 11.5 15.2 11.2 15.3 10.9L16.5 5.3H3.8"
                stroke="#FAF3E0"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                cx="6"
                cy="15.5"
                r="1"
                fill="#FAF3E0"
              />

              <circle
                cx="14.2"
                cy="15.5"
                r="1"
                fill="#FAF3E0"
              />
            </svg>
          </button>

          {/* User Icon */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DF9F28] transition hover:bg-[#DF9F28] group"
            title={isAuthenticated ? user?.name : "Login"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M11 12V11C11 9.8 10.1 8.8 8.8 8.8H5.2C3.9 8.8 3 9.8 3 11V12M9.3 4.1C9.3 5.4 8.3 6.4 7 6.4C5.7 6.4 4.7 5.4 4.7 4.1C4.7 2.8 5.7 1.8 7 1.8C8.3 1.8 9.3 2.8 9.3 4.1Z"
                stroke="#DF9F28"
                strokeWidth="2"
                strokeLinecap="round"
                className="group-hover:stroke-black"
              />
            </svg>
          </button>

          {/* Authentication */}
          {isAuthenticated ? (
            <>
              <span className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28]">
                Hi, {user?.name || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28] transition hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28] transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="font-dMSans text-[13px] font-semibold uppercase tracking-[0.115em] text-[#DF9F28] transition hover:text-white"
              >
                Sign In
              </Link>
            </>
          )}

        </div>

      </div>
    </header>
  );
}

