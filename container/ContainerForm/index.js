import { useEffect, useContext } from 'react'
import { Grid } from '@mui/material'

import { ContextView } from '../../contexts'
import { useTheme } from '../../hooks/useTheme'

import { CurrentsTitles } from '../../components/CurrentsTitles'
import { ContentForms } from '../../components/ContentForms'
import { Container } from '../../util/template'
import Layout from '../../components/Layout'
import { Spinner } from '../../components/Spinner'
import Main from '../../components/Main'
import { Lightbox } from '../../components/Lightbox'

import { useAnimateString } from '../../hooks/useAnimeteString'
import { useForms } from '../../hooks/useForms'
import { useScreen } from '../../hooks/useScreen'

import {
  getDataMenu,
  getActiveItemMenu,
  getShowMenu,
  getEffectText,
  getValueInput,
  getShowSpinner,
  setResetForms,
  getNotifications
} from '../../reducers'

const ContainerForm = (props) => {
  const theme = useTheme()
  const [state, dispatch] = useContext(ContextView)
  const { width } = useScreen()
  const { animate } = useAnimateString({ values: state.effectText, time: 2000 })
  const {
    values,
    isValide,
    setInitValues,
    onChange,
    onBlur,
    valideError
  } = useForms({ dispatch, getValueInput, state })

  // Activa cada item del menú por cada click
  const handleActiveMenu = (values) => {
    dispatch(getActiveItemMenu({
      activeItem: values
    }))
  }

  // Muestra o oculta el menú en el estado movil
  const handleShowMenu = (show) => {
    dispatch(getShowMenu(show))
  }

  // Envia los datos al backend cuando superen las validaciones
  const handleOnSubmit = (event) => {
    event.preventDefault()
    dispatch(getShowSpinner(true))

    setTimeout(() => {
      dispatch(getShowSpinner(false))
      dispatch(setResetForms())
      notifications(5000)

      setInitValues((val) => {
        return ({ ...val, isValide: false })
      })

      console.log('======================================>>> Data Forms')
      console.log(values)
      console.log('Data Forms <<<=======================================')
    }, 2000)
  }

  // Notificación de éxito, una ves los dato hayan guardado con éxitos.
  const notifications = (time) => {
    dispatch(getNotifications(true))

    setTimeout(() => dispatch(getNotifications(false)), time)
  }

  // Inicializando la data del menú
  useEffect(() => {
    dispatch(getDataMenu([
      { id: '1', name: 'Vivair', },
      { id: '2', name: 'Avianca', }
    ]))

    dispatch(getEffectText(['Vivair', 'Avianca']))
  }, [])

  return (
    <Container width={1}>
      {state.showSpinner && (
        <Spinner theme={theme} />
      )}

      {state.showNotications && (
        <Lightbox
          theme={theme}
          show={state.showNotications}
          message='Tu información fue enviada con éxito, estaremos en contacto contigo'
        />
      )}

      <Layout
        data={state}
        theme={theme}
        screen={width}
        handleActiveMenu={handleActiveMenu}
        handleShowMenu={() => handleShowMenu(!state.showMenu)}
      >
        <Main theme={theme}>
          <Grid container sx={{ height: 'uato' }}>
            <Grid container item xs={12} sm={12} md={6} lg={6}>
              <CurrentsTitles theme={theme} valuesText={animate.text} />
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ 
                justifyContent: {
                  sx: 'center',
                  sm: 'center',
                  md: 'flex-end',
                  lg: 'flex-end'
                }
              }}
            >
              <ContentForms
                theme={theme}
                data={state}
                isValide={isValide}
                valideError={valideError}
                handleOnchange={onChange}
                handleOnBlur={onBlur}
                handleOnSubmit={handleOnSubmit}
              />
            </Grid>
          </Grid>
        </Main>
      </Layout>
    </Container>
  )
}

export default ContainerForm
