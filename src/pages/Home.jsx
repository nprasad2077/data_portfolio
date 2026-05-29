import { LazyMotion, domAnimation } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Work } from '../components/sections/Work';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';

function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </LazyMotion>
  );
}

export default Home;
