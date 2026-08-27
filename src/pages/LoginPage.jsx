import LeftHeroPanel from "../components/LeftHeroPanel";
import RightAuthPanel from "../components/RightAuthPanel";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#120D0B]">
      <div className="w-1/2">
        <LeftHeroPanel />
      </div>

      <div className="w-1/2">
        <RightAuthPanel />
      </div>
    </div>
  );
}