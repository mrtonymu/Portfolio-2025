import { Container, Heading, SimpleGrid, Box, Text, Icon } from '@chakra-ui/react'
import { FiEdit3, FiFileText, FiVideo, FiBookOpen } from 'react-icons/fi'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts & Content
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box
            w="100%"
            textAlign="center"
            borderRadius="lg"
            border="2px dashed"
            borderColor="blue.300"
            p={8}
            bg="blue.50"
            _dark={{ borderColor: 'blue.600', bg: 'blue.900' }}
            transition="all 0.2s"
            _hover={{
              borderColor: 'blue.400',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
          >
            <Icon as={FiVideo} boxSize={8} color="blue.400" mb={4} />
            <Text fontSize="lg" fontWeight="bold" color="blue.600" _dark={{ color: 'blue.300' }} mb={2}>
              Video Tutorials
            </Text>
            <Text fontSize="sm" color="blue.500" _dark={{ color: 'blue.400' }}>
              Coding tutorials and tech talks in development
            </Text>
          </Box>
          
          <Box
            w="100%"
            textAlign="center"
            borderRadius="lg"
            border="2px dashed"
            borderColor="green.300"
            p={8}
            bg="green.50"
            _dark={{ borderColor: 'green.600', bg: 'green.900' }}
            transition="all 0.2s"
            _hover={{
              borderColor: 'green.400',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
          >
            <Icon as={FiFileText} boxSize={8} color="green.400" mb={4} />
            <Text fontSize="lg" fontWeight="bold" color="green.600" _dark={{ color: 'green.300' }} mb={2}>
              Technical Articles
            </Text>
            <Text fontSize="sm" color="green.500" _dark={{ color: 'green.400' }}>
              In-depth technical posts and guides
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box
            w="100%"
            textAlign="center"
            borderRadius="lg"
            border="2px dashed"
            borderColor="purple.300"
            p={8}
            bg="purple.50"
            _dark={{ borderColor: 'purple.600', bg: 'purple.900' }}
            transition="all 0.2s"
            _hover={{
              borderColor: 'purple.400',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
          >
            <Icon as={FiEdit3} boxSize={8} color="purple.400" mb={4} />
            <Text fontSize="lg" fontWeight="bold" color="purple.600" _dark={{ color: 'purple.300' }} mb={2}>
              Personal Blog
            </Text>
            <Text fontSize="sm" color="purple.500" _dark={{ color: 'purple.400' }}>
              Personal thoughts and experiences
            </Text>
          </Box>
          
          <Box
            w="100%"
            textAlign="center"
            borderRadius="lg"
            border="2px dashed"
            borderColor="orange.300"
            p={8}
            bg="orange.50"
            _dark={{ borderColor: 'orange.600', bg: 'orange.900' }}
            transition="all 0.2s"
            _hover={{
              borderColor: 'orange.400',
              transform: 'translateY(-2px)',
              shadow: 'lg'
            }}
          >
            <Icon as={FiBookOpen} boxSize={8} color="orange.400" mb={4} />
            <Text fontSize="lg" fontWeight="bold" color="orange.600" _dark={{ color: 'orange.300' }} mb={2}>
              Learning Resources
            </Text>
            <Text fontSize="sm" color="orange.500" _dark={{ color: 'orange.400' }}>
              Curated learning materials and resources
            </Text>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
