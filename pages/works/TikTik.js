import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Button,
  Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title='TikTik'>
    <Container maxW='container.lg' pt={20}>
      <Box mb={6} scrollMarginTop='80px'>
        <Button
          as={NextLink}
          href='/'
          leftIcon={<ChevronLeftIcon />}
          variant='ghost'
          colorScheme='teal'
        >
          Back to Home
        </Button>
      </Box>
      <Title>
        TikTik <Badge>2022-</Badge>
      </Title>
      <P>
        Our TikTok Clone Application includes Google Auth, the ability to
        upload, publish, share, comment on, and like the videos; filtering by
        categories and advanced search functionalities, profile pages, suggested
        accounts, custom responsive design, and much more.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://short-sense.vercel.app/'>
            https://short-sense.vercel.app/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser Not Responsive</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Nextjs, React Native</span>
        </ListItem>
      </List>

      <WorkImage src='/images/works/tiktik_01.png' alt='Inkdrop' />
      <AspectRatio maxW='640px' ratio={1.7} my={4}>
        <iframe
          src='https://www.youtube.com/embed/CcBHZ0t2Qwc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
