import NextLink from 'next/link';
import { Box, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >

        <Text
          as="span"
          cursor="pointer"
          mb={0}
          fontSize="4xl"
          fontWeight="black"
          color="elvenTools.white"
        >
          <img src="/logo_words.png" style={{width:"auto", height:"70px"}}></img>
        </Text>
      </Box>
    </NextLink>
  );
};
