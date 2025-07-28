import React, { forwardRef } from 'react';
import {
  Box,
  Spinner,
  Skeleton,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const DogSpinner = () => (
  <Spinner
    size='xl'
    position='absolute'
    left='50%'
    top='50%'
    ml='calc(0px - var(--spinner-size) / 2)'
    mt='calc(0px - var(--spinner-size))'
  />
);

interface DogContainerProps extends BoxProps {
  children?: React.ReactNode;
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      className='voxel-dog'
      m='auto'
      mt={['-10px', '-40px', '-80px', '-120px']}
      mb={['-20px', '-80px', '-120px', '-200px']}
      w={['200px', '280px', '480px', '640px']}
      h={['200px', '280px', '480px', '640px']}
      maxW='90vw'
      maxH='50vh'
      position='relative'
      transition='all 0.3s ease'
      {...props}
    >
      {children}
    </Box>
  )
);

export const DogSkeleton = () => {
  const skeletonStartColor = useColorModeValue('gray.100', 'gray.700');
  const skeletonEndColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <DogContainer>
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        w='80%'
        h='80%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gap={2}
      >
        {/* Main body skeleton */}
        <MotionBox
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Skeleton
            height='120px'
            width='100px'
            borderRadius='20px'
            startColor={skeletonStartColor}
            endColor={skeletonEndColor}
          />
        </MotionBox>

        {/* Head skeleton */}
        <MotionBox
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          mt='-20px'
        >
          <Skeleton
            height='60px'
            width='60px'
            borderRadius='full'
            startColor={skeletonStartColor}
            endColor={skeletonEndColor}
          />
        </MotionBox>

        {/* Legs skeleton */}
        <Box display='flex' gap={2} mt='-10px'>
          {[...Array(4)].map((_, i) => (
            <MotionBox
              key={i}
              animate={{
                scaleY: [1, 0.8, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            >
              <Skeleton
                height='30px'
                width='12px'
                borderRadius='6px'
                startColor={skeletonStartColor}
                endColor={skeletonEndColor}
              />
            </MotionBox>
          ))}
        </Box>
      </Box>
    </DogContainer>
  );
};

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
