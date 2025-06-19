
import Hero from "../components/home/Hero";
import QRSection from "../components/home/QRSection";
import Counters from "../components/home/Counters";
import TrustSection from "../components/home/TrustSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QRSection />
      <Counters />
      <TrustSection />
    </div>
  );
};

export default Home;
