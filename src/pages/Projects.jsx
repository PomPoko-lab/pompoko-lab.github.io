import { Container, Box, Heading, SlideFade } from '@chakra-ui/react';
import projects from '../projects';
import Carousel from '../components/Carousel';

const Projects = () => {
  return (
    <Container
      as='main'
      textAlign='center'
      maxW='container.lg'
      p={['0', null, 'auto']}
    >
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5 } }}
        unmountOnExit
      >
        <Box
          as='section'
          py='1'
          borderBottom='1px solid white'
          mb='6'
          mt={['1em', null, '3em']}
        >
          <Heading
            as='h2'
            letterSpacing='wide'
            color='gray.700'
            fontSize={['3xl', null, null, '4xl']}
          >
            Featured Projects
          </Heading>
        </Box>
        <SlideFade
          in
          offsetY='-15px'
          transition={{ enter: { duration: 0.5, delay: 0.4 } }}
          unmountOnExit
        >
          <Carousel slides={projects} />
        </SlideFade>
      </SlideFade>
    </Container>
  );
};

export default Projects;
