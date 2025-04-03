import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
    </div>
  );
};

export default HomePage;