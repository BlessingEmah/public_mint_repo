import React from 'react'
import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ConnectButton } from '@rainbow-me/rainbowkit';



function Navigation() {
  return (
    <div>
        <Flex direction="row" mt={5}>
          <Image
            src="/fc-logo.svg"
            alt="Bankless fight club logo"
            width={112.5}
            height={75}
          />
          <Spacer />
          {/* <Box py={9}>
              <Link href="https://www.fightclub.vc/" isExternal>
                Fight Club <ExternalLinkIcon mx='2px' />
              </Link>
          </Box> */}
          {/* <Spacer /> */}
          <Box py={9}>
            <ConnectButton />
          </Box>
        </Flex>
    </div>
  )
}

export default Navigation