import { Global, css } from '@emotion/react'

import { Container, WrapperContainer } from '../util/template'
import theme from '../theme'

import styles from '../assets/styles/_app.module.scss'
import { StoreProvider } from '../contexts/StoreProvider'

import 'normalize.css'
import '../assets/styles/fonts.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container width={1} justifyContent='center'>
      <StoreProvider>
        <WrapperContainer className={styles.wrapperContainer} width={1}>
          <Component {...pageProps} />
        </WrapperContainer>
      </StoreProvider>

      <Global
        styles={
          css`
            html {
              scroll-behavior: smooth;
            }

            body {
              background-color: ${theme.colors.bgInput};
              overflow: hidden;
            }
            
            body::-webkit-scrollbar {
              display: block;
              background: #F6F6F6;
              width: 5px
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 0px;
            }

            body::-webkit-scrollbar-thumb:hover{
              background: #aabbf2;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          `
        }
      />
    </Container>
  )
}

export default MyApp
