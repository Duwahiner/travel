import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Box } from '../../util/template'

const Container = styled(Box)`
`

const Main = ({ theme, children }) => {
  return (
    <Container width={1}>
      {children}
    </Container>
  )
}

export default Main

Main.propTypes = {
  theme: PropTypes.object,
}
