import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {  Container, WrapperContainer } from '../../util/template'
import { TitleFroms } from './TitleFroms'
import { ButtonPrimary } from '../ButtonPrimary'
import { LabelInputForms } from '../LabelInputForms'

import styles from './content-forms.module.scss'

const ContainerForms = styled.form`
  width: auto;
  height: auto;
`

export const ContentForms = ({
  theme,
  data,
  isValide,
  handleOnchange,
  handleOnBlur,
  valideError,
  handleOnSubmit
}) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapperContainer}>
        <ContainerForms>
          <Grid container className={styles.contentGridItemsForm}>
            <Grid container item xs={12} sm={12} md={12} lg={12} >
              <TitleFroms 
                theme={theme}
                title='Hola, bienvenido'
                subTitle={
                  data.activeItemMenu.activeItem
                    ? `Sabemos que quieres viajar en un ${data.activeItemMenu.activeItem}`
                    : ''
                }
              />
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.marginTop}>
              <LabelInputForms
                theme={theme}
                type='text'
                id='fullName'
                name='fullName'
                disabled={false}
                value={data.dataFroms.fullName}
                handleOnchange={(event) => handleOnchange(event, { type: 'name', input: 'fullName' } )}
                handleOnBlur={(event) => handleOnBlur(event, { type: 'name', input: 'fullName' } )}
                titleLabel='Nombre completo'
                placeholder='Escribe tu ombre completo'
                messageError={valideError.fullName.message}
                />
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.marginTopGrid}>
              <LabelInputForms
                theme={theme}
                type='email'
                id='email'
                name='email'
                disabled={false}
                value={data.dataFroms.email}
                handleOnchange={(event) => handleOnchange(event, { type: 'email', input: 'email' } )}
                handleOnBlur={(event) => handleOnBlur(event, { type: 'emial', input: 'email' } )}
                titleLabel='Email'
                placeholder='Escribe tu email'
                messageError={valideError.email.message}
                />
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.marginTopGrid}>
              <LabelInputForms
                theme={theme}
                type='tel'
                id='phone'
                name='phone'
                disabled={false}
                value={data.dataFroms.phone}
                handleOnchange={(event) => handleOnchange(event, { type: 'tel', input: 'phone' } )}
                handleOnBlur={(event) => handleOnBlur(event, { type: 'phone', input: 'phone' } )}
                titleLabel='Celular'
                placeholder='Escribe tu celuar'
                messageError={valideError.phone.message}
                />
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.marginTopGrid}>
              <LabelInputForms
                theme={theme}
                type='text'
                id='rangeAge'
                name='rangeAge'
                disabled={false}
                value={data.dataFroms.rangeAge}
                handleOnchange={(event) => handleOnchange(event, { type: 'rangeAge', input: 'rangeAge' } )}
                handleOnBlur={(event) => handleOnBlur(event, { type: 'rangeAge', input: 'rangeAge' } )}
                titleLabel='Rango de edad'
                placeholder='Escribe tu edad, Desde los 18 hasta los 100 años'
                messageError={valideError.rangeAge.message}
                />
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={styles.marginTop}
              justifyContent='center'
            >
              <ButtonPrimary
                width={1}
                title='Enviar datos'
                fontFamily='RobotoBold'
                fontSize='16px'
                disabled={isValide}
                color={theme.colors.bgInput}
                handleOnClick={(event) => handleOnSubmit(event)}
              />
            </Grid>
          </Grid>
        </ContainerForms>
      </WrapperContainer>
    </Container>
  )
}

ContentForms.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  isValide: PropTypes.bool.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  valideError: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
}
