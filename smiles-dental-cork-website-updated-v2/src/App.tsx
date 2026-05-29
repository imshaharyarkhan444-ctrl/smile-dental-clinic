import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cork from "./pages/Cork";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./pages/TreatmentDetail";
import ForDentists from "./pages/ForDentists";
import JoinOurTeam from "./pages/JoinOurTeam";
import Referrals from "./pages/Referrals";
import MeetTheTeam from "./pages/MeetTheTeam";
import WaysToPay from "./pages/WaysToPay";
import PriceList from "./pages/PriceList";
import SmilesDentalPlan from "./pages/SmilesDentalPlan";
import DentalFinance from "./pages/DentalFinance";
import DentalBenefits from "./pages/DentalBenefits";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cork" element={<Cork />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="treatments/:slug" element={<TreatmentDetail />} />
          <Route path="for-dentists" element={<ForDentists />} />
          <Route path="for-dentists/join-our-team" element={<JoinOurTeam />} />
          <Route path="for-dentists/referrals" element={<Referrals />} />
          <Route path="meet-the-team" element={<MeetTheTeam />} />
          <Route path="ways-to-pay" element={<WaysToPay />} />
          <Route path="price-list" element={<PriceList />} />
          <Route path="smiles-dental-plan" element={<SmilesDentalPlan />} />
          <Route path="dental-finance" element={<DentalFinance />} />
          <Route path="dental-benefits" element={<DentalBenefits />} />
          <Route path="community" element={<Community />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
