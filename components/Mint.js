import React, { useEffect, useState } from 'react';
import { Center, Box, Button, VStack, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from "wagmi";
import blackGloveABI from "../utils/black-glove.json";
import { createWhitelist } from "../utils/createwhitelist.js";

function Mint() {

  const { isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  });

  const merkletree = createWhitelist()
  // console.log("My merkle tree ", merkletree)

  // const proof = merkletree.getHexProof(address)

  const { data, isError, isLoading } = useContractRead({
    addressOrName: "0x6DF19f2C0DA16b708F2Bd3600D053777B88e0e5f",
    contractInterface: blackGloveABI,
    functionName: 'totalSupply',
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  const { config, error } = usePrepareContractWrite({
    addressOrName: "0x6DF19f2C0DA16b708F2Bd3600D053777B88e0e5f",
    contractInterface: blackGloveABI,
    functionName: "mint",
  });

  const { data: mintData, isSuccess, write: mint } = useContractWrite(config)

  return (
    <div>
      <Box align="center">
        {isConnected && (
          <Button colorScheme='red' size='md' onClick={() => mintData?.({
            args: [
              address
            ]
          })}>
            Mint NFT
          </Button>
        )}
      </Box>
      <VStack>
            <Box>
              0 / 1000
            </Box>
            
            <Box>
              0xPolyscan
            </Box>
          </VStack>
      <Wrap align="center" justify="center" mt={-50}>
        <WrapItem>
          <Image
            boxSize="300px"
            objectFit='cover'
            src="/PixelCakes-04.png"
          />
        </WrapItem>
        <WrapItem>
          
        </WrapItem>
      </Wrap>
    </div>
  )
}

export default Mint