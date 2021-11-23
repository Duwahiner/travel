import PropTypes from 'prop-types'

import { Container,  WrapperContainer } from '../../util/template'
import { Text } from '../Text'

import styles from './footer.module.scss'

export const Footer = ({ theme }) => {
  return (
    <Container width={[1]} className={styles.container}>
      <WrapperContainer width={[1]}>
        <Text
          type='span'
          fontFamily='RobotoBold'
          title=''
          fontSize='11px'
          textAlign='center'
          color={theme.colors.colorTex}
        />
      </WrapperContainer>
    </Container>
  )
}

Footer.propTypes = {
  theme: PropTypes.object,
}
