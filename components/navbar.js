import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoInstagram } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.200')
  return (
    <NextLink href={href} scroll={false}>
      <Link
        p={{ base: 3, md: 2 }}
        minH={{ base: '44px', md: 'auto' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        transition="all 0.2s ease"
        _hover={{
          bg: active ? 'grassTeal' : hoverBg,
          transform: 'translateY(-1px)'
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={{ base: 3, md: 2 }}
        maxW={{ base: "100%", md: "container.md" }}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/#services" path={path}>
            Services
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/#contact" path={path}>
            Contact
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://www.instagram.com/mrtonyyam/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoInstagram />
            Let&apos;s Talk
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={{ base: 1, md: 2 }} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Navigation Menu"
                size="md"
                minH="44px"
                minW="44px"
                borderRadius="lg"
              />
              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/#services">
                  <MenuItem as={Link}>Services</MenuItem>
                </NextLink>
                <NextLink href="/works">
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/#contact">
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/mrtonymu/Portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
