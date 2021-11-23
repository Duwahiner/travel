import PropTypes from 'prop-types'

import BeatLoader from 'react-spinners/BeatLoader'
import { css } from '@emotion/react'
import { Flex, Container, WrapperContainer } from '../../util/template'

import styles from './spinner.module.scss'

const override = css`
  display: block;
  margin: 0 auto;
`

export const Spinner = ({ theme }) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapperContainer}>
        <Flex width={1} flexDirection='column' alignItems='center'>
          <BeatLoader
            color={theme.colors.bgMenu}
            loading
            css={override} size={22}
            speedMultiplier={2.2}
          />
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

Spinner.propTypes = {
  theme: PropTypes.object.isRequired,
}
