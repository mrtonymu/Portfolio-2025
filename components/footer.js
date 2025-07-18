import { Box, Text, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box 
      pt={10} 
      pb={10} 
      textAlign="center"
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      {/* Currently Available Text with Pulse */}
      <Box mb={6}>
        <Text 
          fontSize="md" 
          color={useColorModeValue('teal.600', 'teal.300')}
          fontWeight="600"
          animation="pulse 2s infinite"
          sx={{
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.7 }
            }
          }}
        >
          💡 Currently available for new projects
        </Text>
      </Box>
      
      {/* Social Links */}
      <Flex 
        direction={{ base: "column", sm: "row" }} 
        gap={{ base: 3, sm: 6 }} 
        justify="center" 
        align="center" 
        mb={6}
        flexWrap="wrap"
      >
        <Button 
          as="a"
          href="https://github.com/mrtonymu"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          size="sm"
          leftIcon={<IoLogoGithub />}
          color={useColorModeValue('gray.600', 'gray.400')}
          _hover={{
            color: useColorModeValue('gray.800', 'gray.200'),
            transform: 'translateY(-2px)'
          }}
          transition="all 0.3s ease"
        >
          🐙 GitHub
        </Button>
        
        <Button 
          as="a"
          href="https://instagram.com/mrtonyyam"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          size="sm"
          leftIcon={<IoLogoInstagram />}
          color={useColorModeValue('gray.600', 'gray.400')}
          _hover={{
            color: useColorModeValue('gray.800', 'gray.200'),
            transform: 'translateY(-2px)'
          }}
          transition="all 0.3s ease"
        >
          📸 Instagram
        </Button>
      </Flex>
      
      {/* Personality Text */}
      <Text 
        fontSize="sm" 
        color={useColorModeValue('gray.500', 'gray.500')}
        fontWeight="500"
        mb={3}
        fontStyle="italic"
      >
        Built with caffeine, curiosity and no templates.
      </Text>
      
      {/* Copyright */}
      <Text 
        fontSize="sm" 
        color={useColorModeValue('gray.400', 'gray.400')}
        fontWeight="400"
      >
        © {new Date().getFullYear()} TonyMuMu. All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
