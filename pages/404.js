import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>Oops...</Heading>
      <Text>Looks like somebody got lost.....</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <Button as={NextLink} href='/' colorScheme='teal'>
          Return to home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
