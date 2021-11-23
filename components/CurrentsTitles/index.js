import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import {  Container, WrapperContainer } from '../../util/template'
import { Text } from '../Text'

import styles from './content-forms.module.scss'

export const CurrentsTitles = ({ theme, valuesText }) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer>
        <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.contentTitle}>
          <Text
            type='h1'
            fontFamily='RobotoBlack'
            title={`Viaja por colombia con ${valuesText}`}
            fontSize={['60px', '80px', '100px']}
            textAlign=''
            color={theme.colors.bgInput}
          />
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

CurrentsTitles.propTypes = {
  theme: PropTypes.object.isRequired,
  valuesText: PropTypes.string.isRequired,
}
