import Head from "next/head";
import { Box, Text, Heading, Container, Center } from "@chakra-ui/react";
import Mint from "../components/Mint";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fight Club | Public Mint</title>
        <meta name="description" content="Public mint page for fight club." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Main Website */}
      <Container maxW="container.xl">
        <Navigation />
        <Box my={20}>
          <Center>
          <Heading as="h1" fontSize={{ base: '6xl', md: '6xl', lg: '8xl' }} mb={4}>FC <Text as="span" color="#dd403a">Black Glove</Text></Heading>
          </Center>
          <Center>
            <Text maxW='2xl' fontSize="lg">
              Fight Club is a sub-DAO under bDAO with a mission to democratize crypto investing through a platform of venture DAOs and educational programs that aim to elevate communities via web3.
            </Text>
          </Center>
        </Box>

        <Mint />

        <Text fontSize="xl" align="center">
          Public Mint: 650 MATIC
        </Text>
      </Container>
    </div>
  )
}
