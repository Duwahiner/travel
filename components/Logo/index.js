import PropTypes from 'prop-types'

import { Container, Image, Link } from '../../util/template'
import logotipo from '../../assets/svg/logo-travel.svg'

import styles from './logo.module.scss'

export const Logo = ({ theme }) => {
  return (
    <Container className={styles.containerImg}>
      <Link href='/'>
        <a>
          <Image src={logotipo} alt='Logo Travel' width={100} height={60} />
        </a>
      </Link>
    </Container>
  )
}

Logo.propTypes = {
  theme: PropTypes.object,
}

