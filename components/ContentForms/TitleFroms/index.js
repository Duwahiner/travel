import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Container } from '../../../util/template'
import { Text } from '../../Text'

export const TitleFroms = ({ theme, title, subTitle }) => {
  return (
    <Container alignItems='center' justifyContent='center'>
      <Grid container spacing={1}>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Text
            type='h3'
            fontFamily='RobotoBlack'
            title={title}
            fontSize={['30px']}
            color={theme.colors.title}
          />
        </Grid>

        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <Text
            type='span'
            fontFamily='RobotoLight'
            title={subTitle}
            fontSize={['16px']}
            color={theme.colors.title}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

TitleFroms.propTypes = {
  theme: PropTypes.object.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
