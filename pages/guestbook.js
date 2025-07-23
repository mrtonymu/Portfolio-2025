import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Divider,
  SimpleGrid,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Guestbook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual form service like Formspree)
    try {
      // For now, just show success message
      // In production, integrate with Formspree, Netlify Forms, or similar service
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I\'ll get back to you soon!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Sample messages for demonstration
  const sampleMessages = [
    {
      id: 1,
      name: 'Anonymous',
      message: 'Love your portfolio! The 3D dog is amazing 🐕',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Developer',
      message: 'How did you implement the smooth scroll animations?',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Designer',
      message: 'The color scheme and typography choices are perfect!',
      date: '2 weeks ago'
    }
  ]

  return (
    <Layout title="Guestbook">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Guestbook 💬
        </Heading>
        
        <Text mb={6} color="gray.600" _dark={{ color: 'gray.400' }}>
          Leave a message, ask a question, or just say hi! All messages are welcome.
        </Text>

        <Section delay={0.1}>
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            shadow="sm"
            mb={8}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={{ base: 6, md: 5 }}>
                <SimpleGrid columns={[1, 2]} gap={{ base: 6, md: 5 }} w="100%">
                  <FormControl>
                    <FormLabel mb={2}>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name (optional)"
                      p={{ base: 6, md: 4 }}
                      size="lg"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mb={2}>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com (optional)"
                      p={{ base: 6, md: 4 }}
                      size="lg"
                    />
                  </FormControl>
                </SimpleGrid>
                
                <FormControl isRequired>
                  <FormLabel mb={2}>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message, question, or feedback..."
                    rows={4}
                    resize="vertical"
                    p={{ base: 6, md: 4 }}
                    size="lg"
                  />
                </FormControl>
                
                <Button
                  type="submit"
                  colorScheme="purple"
                  size="lg"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  w={['100%', 'auto']}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h4" fontSize={16} mb={4}>
            Recent Messages
          </Heading>
          
          <VStack spacing={{ base: 6, md: 5 }} align="stretch">
            {sampleMessages.map((msg) => (
              <Box
                key={msg.id}
                bg={bgColor}
                p={{ base: 6, md: 5 }}
                borderRadius="lg"
                border="1px"
                borderColor={borderColor}
                shadow="sm"
              >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    {msg.name}
                  </Text>
                  <Badge colorScheme="gray" fontSize="xs">
                    {msg.date}
                  </Badge>
                </Box>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }}>
                  {msg.message}
                </Text>
              </Box>
            ))}
          </VStack>
        </Section>

        <Section delay={0.5}>
          <Divider my={8} />
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }} textAlign="center">
            💡 <strong>Note:</strong> To enable live message submission, integrate with{' '}
            <Text as="span" color="purple.500">
              Formspree
            </Text>,{' '}
            <Text as="span" color="purple.500">
              Netlify Forms
            </Text>, or{' '}
            <Text as="span" color="purple.500">
              Typeform
            </Text>{' '}
            for backend handling.
          </Text>
        </Section>
      </Container>
    </Layout>
  )
}

export default Guestbook
export { getServerSideProps } from '../components/chakra'