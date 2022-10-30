import { Box, SimpleGrid } from '@chakra-ui/react';
import { RoadmapItem } from './RoadmapItem';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Roadmap = () => {

  return (
    <Box mt={32}>
      <HomeSectionTitle title="Roadmap" />
      <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
      </SimpleGrid>
    </Box>
  );
};
