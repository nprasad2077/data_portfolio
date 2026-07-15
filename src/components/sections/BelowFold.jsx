import { LazyMotion, domAnimation } from 'framer-motion';
import { Work } from './Work';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';

function BelowFold() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Work />
      <About />
      <Skills />
      <Contact />
    </LazyMotion>
  );
}

export default BelowFold;
