import '@/styles/globals.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import {
  lightTheme, darkTheme
} from '../themes/index';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App
