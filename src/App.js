import { Box, Image, Spinner } from '@chakra-ui/react';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import MainNav from './components/MainNav';
import BackgroundBox from './components/BackgroundBox';
import Home from './pages/Home';
import Footer from './components/Footer';
import mobileBG from './assets/mobileBG.webp';
import desktopBG from './assets/desktopBG.webp';

// Lazy loading

const Projects = lazy(() => import('./pages/Projects'));
const AboutMe = lazy(() => import('./pages/AboutMe'));

function App() {
  const [initAnimation, setInitAnimation] = useState(false);
  const [windowSize, setWindowSize] = useState({
    height: `${window.innerHeight}px`,
    width: `${window.innerWidth}px`,
  });

  // Resizes window on user resize
  useEffect(() => {
    const resizeWindow = () => {
      setWindowSize({
        height: `${window.innerHeight}px`,
        width: `${window.innerWidth}px`,
      });
    };

    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  // Adds a delay to initial transitions (first load)
  useEffect(() => {
    const animationdelay = setTimeout(() => {
      setInitAnimation(true);
    }, 1000);

    return () => clearTimeout(animationdelay);
  }, []);

  return (
    <>
      <Box
        h={`${windowSize.height}`}
        display='flex'
        flexDirection='column'
        alignItems='center'
        px='4'
      >
        <BackgroundBox />
        <Image
          zIndex='-1'
          position='fixed'
          left='50%'
          top='50%'
          transform='translate(-50%, -50%)'
          w='full'
          h='full'
          objectFit={['cover', null, null, null, null, 'contain']}
          src={mobileBG}
          srcSet={`${mobileBG} 400w, ${desktopBG} 2000w`}
          alt='beautiful blue skies'
        />
        <MainNav />
        <Suspense
          fallback={
            <Spinner
              label='loading..'
              my='auto'
              color='orange.400'
              emptyColor='gray.300'
              size={['lg', null, 'xl']}
              speed='0.60s'
              thickness={['2px', null, '4px']}
            />
          }
        >
          <Routes>
            <Route path='/' element={<Home initAnimation={initAnimation} />} />
            <Route path='about' element={<AboutMe />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
        </Suspense>
        <Footer />
      </Box>
    </>
  );
}

export default App;
