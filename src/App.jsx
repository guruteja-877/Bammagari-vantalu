import { Routes, Route } from "react-router-dom";
import GonguraMutton from "./Andhra/GonguraMutton";
import AndhraCusine from './Andhra/AndhraCusine'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MenuPage from "./pages/MenuPage";
import AllRegionsPage from "./pages/AllRegionsPage";
import Header from "./components/Header";
import AddCart from "./Andhra/AddCart";
import Address from  './Address/Address'
import Checkoutpage from './Address/Checkoutpage'
import OrderConfirmationPage  from "./Address/OrderConfirmationPage";
import Trackingmaincontent from "./Address/Trackingmaincontent";
import Rayalaseema from "./Rayalaseema/Rayalaseema";
import RayalaseemaCard from "./Rayalaseema/rayalaseemaCard";
import Konaseema from "./Konaseema/Konaseema";
import PaymentPage from "./Address/PaymentPage";
import CoastalAndhra from "./CoastalAndhra/CoastalAndhra";
import KonaseemaCard from "./Konaseema/KonaseemaCard";
import CoastalAndhraCard from "./CoastalAndhra/CoastalAndhraCard";
import Guntur from "./Guntur/Guntur";
import GunturCard from "./Guntur/GunturCard";
import Nellore from "./Nellore/Nellore";
import NelloreCard from "./Nellore/NelloreCard";
import BammaSpecial from "./section/BammaSpecial";
import AboutBamma from "./section/AboutBamma";
import Offers from "./section/Offers";
import Contact from "./section/Contact";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="relative min-h-screen overflow-hidden bg-[#110D0B]">
            {/* Background */}
            <img
              src="/Bammagariruchuluhomepage.png"
              alt="Background"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Header - ONLY ON HOME */}
            <Header />

            {/* Home Content */}
            <main className="relative z-10">
              <HomePage />
            </main>
          </div>
        }
      />

      {/* Menu Page - NO HEADER */}
      <Route
        path="/menu"
        element={
          <div className="min-h-screen bg-[#110D0B]">
            <main>
              <MenuPage />
            </main>
          </div>
        }
      />
            <Route
        path="/menu/all-regions"
        element={
          <div className="min-h-screen bg-[#130E0C]">
            <AllRegionsPage />
          </div>
        }
      />

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Signup */}
      <Route path="/signup" element={<SignupPage />} />
      <Route
       path="/menu/all-regions/andhra-cuisine"
  element={<AndhraCusine />}
  
/>
<Route
  path="/menu/all-regions/andhra-cuisine/gongura-mutton"
  element={<GonguraMutton />}
/>

<Route
  path="/cart"
  element={<AddCart />}
/>
      <Route
        path="/address"
        element={<Address />}
      />
      <Route
  path="/checkout"
  element={<Checkoutpage />}
/>
<Route
  path="/payment"
  element={<PaymentPage />}
/>
<Route
  path="/order-confirmation"
  element={<OrderConfirmationPage />}
/>
<Route
  path="/tracking"
  element={<Trackingmaincontent />}
/>
<Route
  path="/menu/all-regions/rayalaseema"
  element={<Rayalaseema />}
/>
<Route
  path="/menu/all-regions/rayalaseema-cuisine/rayalaseema-card"
  element={<RayalaseemaCard />}
/>
<Route
  path="/menu/all-regions/konaseema"
  element={<Konaseema/>}
/>
<Route
  path="/menu/all-regions/konaseema-cuisine/konaseema-card"
  element={<KonaseemaCard />}/>
<Route
  path="/menu/all-regions/coastal-andhra"
  element={<CoastalAndhra />}
/>
<Route
  path="/menu/all-regions/coastal-andhra-cuisine/coastal-andhra-card"
  element={<CoastalAndhraCard />}
/>
<Route
  path="/menu/all-regions/guntur"
  element={<Guntur />}
/>
<Route
  path="/menu/all-regions/guntur-cuisine/guntur-card/*"
  element={<GunturCard />}
/>
      <Route
        path="/menu/all-regions/nellore"
        element={<Nellore />}
      />

      <Route
        path="/menu/all-regions/nellore-cuisine/nellore-card"
        element={<NelloreCard />}
      />
      <Route
  path="/specials"
  element={<BammaSpecial />}
/>
<Route
  path="/about"
  element={<AboutBamma />}
/>
<Route
  path="/offers"
  element={<Offers />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
    </Routes>
 </AuthProvider>
  );
}

export default App;