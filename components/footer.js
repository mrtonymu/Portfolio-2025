import { Box, Text, Flex, Button, useColorModeValue, Badge, useToast } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoCopy } from 'react-icons/io5'

const Footer = () => {
  const toast = useToast()
  
  const copyEmail = () => {
    navigator.clipboard.writeText('tonyyam151@gmail.com')
    toast({
      title: '📧 Email copied!',
      description: 'tonyyam151@gmail.com copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'bottom'
    })
  }
  
  return (
    <Box 
      as="footer"
      id="contact"
      scrollMarginTop="80px"
      w="100vw"
      position="relative"
      left="50%"
      right="50%"
      ml="-50vw"
      mr="-50vw"
      pt={{ base: 16, md: 20 }} 
      pb={{ base: 12, md: 12 }} 
      textAlign="center"
      bg={useColorModeValue(
        'linear-gradient(180deg, rgba(247, 250, 252, 0.8) 0%, rgba(237, 242, 247, 0.95) 50%, #edf2f7 100%)',
        'linear-gradient(180deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.95) 50%, #2d3748 100%)'
      )}
      boxShadow={useColorModeValue(
        '0 -20px 60px rgba(0, 0, 0, 0.03)',
        '0 -20px 60px rgba(0, 0, 0, 0.2)'
      )}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        bg: useColorModeValue(
          'linear-gradient(180deg, transparent 0%, rgba(247, 250, 252, 0.3) 50%, rgba(237, 242, 247, 0.6) 100%)',
          'linear-gradient(180deg, transparent 0%, rgba(26, 32, 44, 0.3) 50%, rgba(45, 55, 72, 0.6) 100%)'
        ),
        zIndex: -1
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '2px',
        bg: useColorModeValue(
          'linear-gradient(90deg, transparent, rgba(56, 178, 172, 0.4), transparent)',
          'linear-gradient(90deg, transparent, rgba(56, 178, 172, 0.6), transparent)'
        )
      }}
    >
      {/* Content Container */}
      <Box maxW="6xl" mx="auto" px={{ base: 6, md: 8 }} textAlign={{ base: "center", md: "center" }}>
        {/* Desktop Status Badge & Social Links */}
        <Box display={{ base: 'none', lg: 'block' }} mb={10}>
          <Badge 
            fontSize="lg" 
            px={8}
            py={4}
            borderRadius="full"
            bg="linear-gradient(135deg, #38b2ac 0%, #4299e1 100%)"
            color="white"
            fontWeight="700"
            boxShadow="0 8px 25px rgba(56, 178, 172, 0.3)"
            animation="glow 2s ease-in-out infinite"
            transform="translateY(0)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 12px 35px rgba(56, 178, 172, 0.4)"
            }}
            transition="all 0.3s ease"
            sx={{
              '@keyframes glow': {
                '0%, 100%': { boxShadow: '0 8px 25px rgba(56, 178, 172, 0.3)' },
                '50%': { boxShadow: '0 12px 35px rgba(56, 178, 172, 0.5)' }
              }
            }}
          >
            🚀 Currently Available for New Projects
          </Badge>
        </Box>
      
        {/* Desktop Social Links */}
        <Flex 
          display={{ base: 'none', lg: 'flex' }}
          direction="row"
          gap={8} 
          justify="center" 
          align="center" 
          mb={8}
          flexWrap="wrap"
        >
          <Button 
            as="a"
            href="https://github.com/mrtonymu"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            px={4}
            leftIcon={<IoLogoGithub aria-hidden="true" />}
            borderColor="gray.600"
            color={useColorModeValue('gray.700', 'gray.300')}
            bg={useColorModeValue('white', 'gray.800')}
            aria-label="Visit my GitHub profile"
            _hover={{
              bg: '#24292e',
              color: 'white',
              borderColor: '#24292e',
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(36, 41, 46, 0.3)'
            }}
            transition="all 0.3s ease"
          >
            GitHub
          </Button>
          
          <Button 
            as="a"
            href="https://instagram.com/mrtonyyam"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            px={4}
            leftIcon={<IoLogoInstagram aria-hidden="true" />}
            borderColor="pink.400"
            color={useColorModeValue('pink.600', 'pink.300')}
            bg={useColorModeValue('white', 'gray.800')}
            aria-label="Follow me on Instagram"
            _hover={{
              bg: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              color: 'white',
              borderColor: 'transparent',
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(225, 48, 108, 0.4)'
            }}
            transition="all 0.3s ease"
          >
            Instagram
          </Button>
          
          <Button 
            onClick={copyEmail}
            variant="outline"
            size="md"
            px={4}
            leftIcon={<IoCopy aria-hidden="true" />}
            borderColor="teal.400"
            color={useColorModeValue('teal.600', 'teal.300')}
            bg={useColorModeValue('white', 'gray.800')}
            aria-label="Copy email address to clipboard"
            _hover={{
              bg: 'teal.500',
              color: 'white',
              borderColor: 'teal.500',
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(56, 178, 172, 0.4)'
            }}
            transition="all 0.3s ease"
          >
            Copy Email
          </Button>
        </Flex>
        
        {/* Mobile Optimized Section */}
        <Box display={{ base: 'block', lg: 'none' }} maxW="sm" mx="auto">
          {/* Mobile Status Badge - Full Width */}
          <Button 
            w="full"
            size="lg"
            fontSize="md"
            px={6}
            py={4}
            mb={6}
            borderRadius="xl"
            bg="linear-gradient(135deg, #38b2ac 0%, #4299e1 100%)"
            color="white"
            fontWeight="600"
            boxShadow="0 8px 25px rgba(56, 178, 172, 0.3)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 12px 35px rgba(56, 178, 172, 0.4)"
            }}
            _active={{
              transform: "translateY(0)"
            }}
            transition="all 0.3s ease"
            textAlign="center"
            whiteSpace="normal"
            height="auto"
            minH="56px"
          >
            <Text as="span" verticalAlign="middle">🚀</Text>
            <Text as="span" ml={2}>Currently Available for New Projects</Text>
          </Button>
          
          {/* Mobile Social Links - Vertically Stacked */}
          <Flex 
            direction="column"
            gap={4}
            mb={8}
          >
            <Button 
              as="a"
              href="https://github.com/mrtonymu"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              w="full"
              minH="56px"
              px={6}
              leftIcon={<IoLogoGithub aria-hidden="true" />}
              borderColor="gray.600"
              color={useColorModeValue('gray.700', 'gray.300')}
              bg={useColorModeValue('white', 'gray.800')}
              aria-label="Visit my GitHub profile"
              borderRadius="xl"
              boxShadow="md"
              _hover={{
                bg: '#24292e',
                color: 'white',
                borderColor: '#24292e',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(36, 41, 46, 0.3)'
              }}
              _active={{
                transform: 'scale(0.98)'
              }}
              transition="all 0.3s ease"
            >
              GitHub
            </Button>
            
            <Button 
              as="a"
              href="https://instagram.com/mrtonyyam"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              w="full"
              minH="56px"
              px={6}
              leftIcon={<IoLogoInstagram aria-hidden="true" />}
              borderColor="pink.400"
              color={useColorModeValue('pink.600', 'pink.300')}
              bg={useColorModeValue('white', 'gray.800')}
              aria-label="Follow me on Instagram"
              borderRadius="xl"
              boxShadow="md"
              _hover={{
                bg: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                color: 'white',
                borderColor: 'transparent',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(225, 48, 108, 0.4)'
              }}
              _active={{
                transform: 'scale(0.98)'
              }}
              transition="all 0.3s ease"
            >
              Instagram
            </Button>
            
            <Button 
              onClick={copyEmail}
              variant="outline"
              size="lg"
              w="full"
              minH="56px"
              px={6}
              leftIcon={<IoCopy aria-hidden="true" />}
              borderColor="teal.400"
              color={useColorModeValue('teal.600', 'teal.300')}
              bg={useColorModeValue('white', 'gray.800')}
              aria-label="Copy email address to clipboard"
              borderRadius="xl"
              boxShadow="md"
              _hover={{
                bg: 'teal.500',
                color: 'white',
                borderColor: 'teal.500',
                transform: 'scale(1.02)',
                boxShadow: '0 8px 25px rgba(56, 178, 172, 0.4)'
              }}
              _active={{
                transform: 'scale(0.98)'
              }}
              transition="all 0.3s ease"
            >
              Copy Email
            </Button>
          </Flex>
        </Box>
      
        {/* Personality Text */}
        <Text 
          fontSize="sm" 
          color={useColorModeValue('gray.500', 'gray.500')}
          fontWeight="500"
          mb={4}
          fontStyle="italic"
          opacity={0.8}
        >
          Built with caffeine, curiosity and no templates.
        </Text>
        
        {/* Copyright */}
        <Text 
          fontSize="sm" 
          color={useColorModeValue('gray.400', 'gray.400')}
          fontWeight="400"
          opacity={0.7}
        >
          © {new Date().getFullYear()} TonyMuMu. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
