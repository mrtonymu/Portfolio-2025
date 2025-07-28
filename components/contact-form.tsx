import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const MotionBox = motion(Box);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out! I'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      maxW='500px'
      mx='auto'
      p={6}
      bg='whiteAlpha.50'
      backdropFilter='blur(10px)'
      borderRadius='xl'
      border='1px solid'
      borderColor='whiteAlpha.200'
      boxShadow='xl'
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <FormControl isRequired>
            <FormLabel>
              <Flex align='center' gap={2}>
                <Icon as={FiUser} />
                <Text>Name</Text>
              </Flex>
            </FormLabel>
            <Input
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
              bg='whiteAlpha.100'
              border='1px solid'
              borderColor='whiteAlpha.300'
              _hover={{ borderColor: 'teal.300' }}
              _focus={{
                borderColor: 'teal.400',
                boxShadow: '0 0 0 1px teal.400',
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              <Flex align='center' gap={2}>
                <Icon as={FiMail} />
                <Text>Email</Text>
              </Flex>
            </FormLabel>
            <Input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='your.email@example.com'
              bg='whiteAlpha.100'
              border='1px solid'
              borderColor='whiteAlpha.300'
              _hover={{ borderColor: 'teal.300' }}
              _focus={{
                borderColor: 'teal.400',
                boxShadow: '0 0 0 1px teal.400',
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              <Flex align='center' gap={2}>
                <Icon as={FiMessageSquare} />
                <Text>Message</Text>
              </Flex>
            </FormLabel>
            <Textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell me about your project...'
              rows={5}
              bg='whiteAlpha.100'
              border='1px solid'
              borderColor='whiteAlpha.300'
              _hover={{ borderColor: 'teal.300' }}
              _focus={{
                borderColor: 'teal.400',
                boxShadow: '0 0 0 1px teal.400',
              }}
              resize='vertical'
            />
          </FormControl>

          <Button
            type='submit'
            isLoading={isLoading}
            loadingText='Sending...'
            colorScheme='teal'
            size='lg'
            width='full'
            leftIcon={<Icon as={FiSend} />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition='all 0.2s'
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </MotionBox>
  );
};

export default ContactForm;
