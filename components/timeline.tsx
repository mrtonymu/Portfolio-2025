import React, { memo, useMemo } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface TimelineItemProps {
  year: string;
  title: string;
  company?: string;
  description: string;
  icon: string;
  isLast: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = memo(
  ({ year, title, company, description, icon, isLast, index }) => {
    const lineColor = useColorModeValue('gray.200', 'gray.600');
    const dotColor = useColorModeValue('teal.500', 'teal.300');
    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const titleColor = useColorModeValue('gray.800', 'white');

    return (
      <MotionBox
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        position='relative'
        w='full'
      >
        <HStack align='start' spacing={6}>
          {/* Timeline line and dot */}
          <Box
            position='relative'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Box
              w='12px'
              h='12px'
              borderRadius='full'
              bg={dotColor}
              border='3px solid'
              borderColor={cardBg}
              boxShadow='0 0 0 3px'
              sx={{ boxShadowColor: lineColor }}
              zIndex={2}
            />
            {!isLast && (
              <Box w='2px' h='100px' bg={lineColor} mt={2} zIndex={1} />
            )}
          </Box>

          {/* Content card */}
          <Box
            flex={1}
            bg={cardBg}
            p={6}
            borderRadius='xl'
            boxShadow='lg'
            border='1px solid'
            borderColor={lineColor}
            position='relative'
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'xl',
            }}
            transition='all 0.3s ease'
          >
            <HStack justify='space-between' align='start' mb={3}>
              <VStack align='start' spacing={1}>
                <Text fontSize='sm' color={textColor} fontWeight='600'>
                  {year}
                </Text>
                <Heading as='h3' size='md' color={titleColor}>
                  {title}
                </Heading>
                {company && (
                  <Text fontSize='sm' color='teal.500' fontWeight='600'>
                    {company}
                  </Text>
                )}
              </VStack>
              <Text fontSize='2xl'>{icon}</Text>
            </HStack>
            <Text fontSize='sm' color={textColor} lineHeight='relaxed'>
              {description}
            </Text>
          </Box>
        </HStack>
      </MotionBox>
    );
  }
);

interface TimelineData {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: string;
}

const Timeline: React.FC = memo(() => {
  const timelineData: TimelineData[] = useMemo(
    () => [
      {
        year: '2024',
        title: 'Freelance Web Developer',
        company: 'Independent',
        description:
          'Building custom websites and digital solutions for solo creators and business owners. Focusing on fast, functional sites without agency overhead or template limitations.',
        icon: '🚀',
      },
      {
        year: '2023',
        title: 'AI & Web3 Explorer',
        company: 'Self-directed Learning',
        description:
          "Diving deep into GPT integrations, prompt engineering, and blockchain applications. Experimenting with tomorrow's tools to solve real problems.",
        icon: '🤖',
      },
      {
        year: '2022',
        title: 'Dropshipping Operations',
        company: 'Self-employed',
        description:
          'Ran my own dropshipping business, built internal tools for tracking profits, managing suppliers, and automating workflows. Learned efficiency with my own money on the line.',
        icon: '🚚',
      },
      {
        year: '2021',
        title: 'Customer Service Specialist',
        company: 'Fintech Industry',
        description:
          'Handled customer escalations in fintech. Learned that behind every "bug report" is a frustrated human who just wants things to work. This shaped my empathy-driven approach to development.',
        icon: '💳',
      },
    ],
    []
  );

  const memoizedItems = useMemo(
    () =>
      timelineData.map((item, index) => (
        <TimelineItem
          key={`${item.year}-${index}`}
          {...item}
          index={index}
          isLast={index === timelineData.length - 1}
        />
      )),
    [timelineData]
  );

  return (
    <VStack spacing={0} align='stretch' maxW='2xl' mx='auto'>
      {memoizedItems}
    </VStack>
  );
});

export default Timeline;
