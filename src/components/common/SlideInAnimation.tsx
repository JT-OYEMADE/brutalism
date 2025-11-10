import type { LayoutProps } from 'types';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SlideInAnimationProps = LayoutProps & {
  animationContainerClassName?: string;
  initialYPosition?: number;
  useOnMobile?: boolean;
  slideFromRight?: boolean;
  transition?: { [key: string]: any };
  containerVariants?: { [key: string]: any };
  rest?: { [key: string]: any };
};

export const SlideInAnimation: React.FC<SlideInAnimationProps> = ({
  children,
  animationContainerClassName,
  initialYPosition,
  transition,
  slideFromRight,
  useOnMobile = true,
  rest,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const defaultContainerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ...transition } },
    hidden: { opacity: 0, y: initialYPosition || -10 },
  };

  const slideFromRightContainerVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 20 },
  };

  //Handle leftSlideIN
  const newContainerVariants = slideFromRight
    ? slideFromRightContainerVariants
    : defaultContainerVariants;

  if (!useOnMobile)
    return (
      <>
        <div className='lg:hidden' {...rest}>
          {children}
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={newContainerVariants}
          className={'hidden lg:block'}
          {...rest}>
          {children}
        </motion.div>
      </>
    );

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={newContainerVariants}
      className={animationContainerClassName || ''}
      {...rest}>
      {children}
    </motion.div>
  );
};
