// export default function Leftheropanel() {
//   return (
//     <img
//       src="/SignupLeftimage.png"
//       className="flex p-16 flex-col justify-between items-center shrink-0 border-r border-r-[#3D2B23] min-w-screen min-h-screen absolute left-0 top-0 max-w-none"
//       alt="Left-Hero-Panel"
//     />
//   );
// }

export default function Leftheropanel() {
  return (
    <div className="w-1/2 h-screen shrink-0 border-r border-[#3D2B23]">
      <img
        src="/signupleftimage.png"
        alt="Signup"
        className="w-full h-full object-cover"
        alt="Left-Hero-Panel"
      />
    </div>
  );
}