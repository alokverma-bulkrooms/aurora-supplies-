
import QRSection from "../components/home/QRSection";
import Counters from "../components/home/Counters";
import TrustSection from "../components/home/TrustSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <QRSection />
      <Counters />
      <TrustSection />
      <Testimonials />
    </div>
  );
};

export default Home;
