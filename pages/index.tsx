import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HeroImage } from '../components/HeroImage';
import { Faq } from '../components/Faq';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import { MintHero } from '../components/MintHero';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <MintHero />
      </Box>
    </MainLayout>
  );
};

export default Home;
