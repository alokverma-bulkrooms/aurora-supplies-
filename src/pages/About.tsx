
import CompanyStory from "../components/about/CompanyStory";
import Mission from "../components/about/Mission";
import WorldMap from "../components/about/WorldMap";
import Offices from "../components/about/Offices";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <CompanyStory />
      <Mission />
      <WorldMap />
      <Offices />
    </div>
  );
};

export default About;
