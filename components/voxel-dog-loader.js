import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-10px', '-40px', '-80px', '-120px']}
    mb={['-20px', '-80px', '-120px', '-200px']}
    w={['200px', '280px', '480px', '640px']}
    h={['200px', '280px', '480px', '640px']}
    maxW="90vw"
    maxH="50vh"
    position="relative"
    transition="all 0.3s ease"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
