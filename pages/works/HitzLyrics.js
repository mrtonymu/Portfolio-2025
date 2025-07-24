import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Button,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HitzLyrics">
    <Container maxW="container.lg" pt={20}>
      <Box mb={6} scrollMarginTop="80px">
        <Button as={NextLink} href="/" leftIcon={<ChevronLeftIcon />} variant="ghost" colorScheme="teal">
          Back to Home
        </Button>
      </Box>
      <Title>
      HitzLyrics <Badge>2022</Badge>
      </Title>
      <P>
      Spotify Clone
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hitzlyrics.netlify.app/">
          https://hitzlyrics.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser / Responsive (Buggy) </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Tailwind, Redux, RapidAPI.</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/HitzLyrics_01.png" alt="HitzLyrics" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/I1cpb0tYV74"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
