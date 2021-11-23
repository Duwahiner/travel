import { Paper, Grow, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Text } from '../Text'
import { WrapperContainer, Image } from '../../util/template'
import IconSuccess from '../../assets/svg/success.svg'


import styles from './lightbox.module.scss'

export const Lightbox = ({ theme, show, message }) => {
  return (
    <Grow in={show} className={styles.container}>
      <Paper sx={{ borderRadius: '0px' }} elevation={4}>
        <WrapperContainer className={styles.wrapperContainer}>
          <Grid container alignItems='center' >
            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent='center'> 
              <Image src={IconSuccess} alt='Icon success' width={30} height={30} />
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: '20px'}}>
              <Text
                type='span'
                fontFamily='Roboto'
                title={message}
                fontSize='13px'
                textAlign='center'
                color={theme.colors.title}
              />
            </Grid>
          </Grid>
        </WrapperContainer>
      </Paper>
    </Grow>
  )
}

  

Lightbox.propTypes = {
  theme: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}
