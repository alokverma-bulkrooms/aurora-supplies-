
import ServicesHero from "../components/services/ServicesHero";
import ServiceCards from "../components/services/ServiceCards";
import ProcessFlow from "../components/services/ProcessFlow";

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <ServiceCards />
      <ProcessFlow />
    </div>
  );
};

export default Services;
