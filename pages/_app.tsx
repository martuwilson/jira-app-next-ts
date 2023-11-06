import '@/styles/globals.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import {
  lightTheme, darkTheme
} from '../themes/index';
import { UIProvider } from '@/context/ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default App
