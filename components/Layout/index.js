import PropTypes from 'prop-types'

import { Container, WrapperContainer } from '../../util/template'

import { Footer } from '../Footer'
import { Header } from '../header'

import styles from './layout.module.scss'

const Layout = ({
  children,
  theme,
  data,
  handleActiveMenu,
  handleShowMenu,
  screen
}) => {
  return (
    <Container className={styles.container} bg='red'>
      <WrapperContainer className={styles.wrapperContainer}>
        <header className={styles.layoutHeader}>
          <Header
            theme={theme}
            data={data}
            handleActiveMenu={handleActiveMenu}
            handleShowMenu={handleShowMenu}
            screen={screen}
          />
        </header>

        <main className={styles.layoutMain}>
          {children}
        </main>

        <footer>
          <Footer theme={theme} />
        </footer>

      </WrapperContainer>
    </Container>
  )
}

export default Layout

Layout.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleActiveMenu: PropTypes.func.isRequired,
  handleShowMenu: PropTypes.func.isRequired,
  screen: PropTypes.number
}
