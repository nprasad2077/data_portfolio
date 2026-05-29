import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const d = directions[direction];

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, ...d }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : d.y, x: inView ? 0 : d.x }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </m.div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};
