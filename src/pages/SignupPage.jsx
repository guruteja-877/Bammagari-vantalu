import LeftHeroPanel from "../components/LeftHeroPanel";

import SignupRightAuthPanel from "../components/SignupRightAuthPanel";


// export default function SignupPage() {
//   return (
//     <div className="flex min-h-screen w-full bg-[#120D0B]">
//       <div className="w-1/2">
//         <LeftHeroPanel />
//       </div>

//       <div className="w-1/2">
//         <SignupRightAuthPanel />
//       </div>
//     </div>
//   );
// }

export default function SignupPage() {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-[#120D0B]">
      <div className="w-1/2 h-full">
        <LeftHeroPanel />
      </div>

      <div className="w-1/2 h-full">
        <SignupRightAuthPanel />
      </div>
    </div>
  );
}