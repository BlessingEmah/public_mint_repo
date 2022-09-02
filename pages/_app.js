import '@fontsource/nunito/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.polygon, chain.rinkeby, chain.polygonMumbai ],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Fight Club Black Glove Mint",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
})

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-l, #141414, #000)",
        color: 'white',
      },
    },
  },
  // styles for the `fonts`
  fonts: {
    heading: `"Open Sans", sans-serif`,
    body: `"Nunito", sans-serif`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme({accentColor: '#dd403a'})} chains={chains} initialChain={chain.polygonMumbai}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
