import Menuhero from "../pages/Menuhero";
import Searchbarsection from "../pages/Searchbarsection";
import Categorytabssection from "../pages/Categorytabssection";
import Regionsection from '../pages/Regionsection'
import Mainmenusection from "../pages/Mainmenusection";
import Popularvantalusection from "./Popularvantalusection";
import Footer from "./Footer";

export default function AllRegionsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#130E0C]">
      <Menuhero />

      <Searchbarsection />

      <Categorytabssection />

      <Regionsection />

      <Mainmenusection/>

      <Popularvantalusection/>
      <Footer/>
    </main>
  );
}