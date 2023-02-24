import React from 'react'
import { AppProps } from 'next/app'
import { Heebo, Roboto } from '@next/font/google'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

// const heebo = Coming_Soon({ subsets: ['latin'] })
// const heebo = Heebo({ subsets: ['latin'] })
const heebo = Heebo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});
// const heebo = Roboto({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900']
// });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${heebo.style.fontFamily};
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  ) 
}

export default MyApp