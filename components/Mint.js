import React, { useEffect, useState } from 'react'
import { Center, Box, Button, VStack, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from "wagmi";
import blackGloveABI from "../utils/black-glove.json"

function Mint() {

  const { isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  });

  const { config, error } = usePrepareContractWrite({
    addressOrName: "0x90A55BfFe9f5E3785CE27FDEBd554F501ed53E1C",
    contractInterface: blackGloveABI,
    functionName: "mint",
  });

  const { data } = useContractRead({
    addressOrName: "0x90A55BfFe9f5E3785CE27FDEBd554F501ed53E1C",
    contractInterface: blackGloveABI,
    functionName: 'maxSupply',
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  const { data: mintData, isLoading, isSuccess, write: mint } = useContractWrite(config)

  return (
    <div>
      <Box align="center">
        {isConnected && (
          <Button colorScheme='red' size='md' onClick={() => mint?.()}>
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