
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Counters from "../components/home/Counters";
import TrustSection from "../components/home/TrustSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <Counters />
      <TrustSection />
    </div>
  );
};

export default Home;
