import { useCallback, useEffect, useState } from 'react'
import { schema, configReg} from './configForms'

export const useForms = ({dispatch, getValueInput, state }) => {
  const [initValues, setInitValues] = useState(schema)
  
  // Observa los cambios en los campos
  const onChange = (event, { input }) => {
    const value = event.target.value

    dispatch(getValueInput({ value, type: input }))
  }

  // Observa los cambios en los campos
  const onBlur = (event, { input, type }) => {
    const value = event.target.value

    valideForms(value, input, type)
  }

  // Observa cada cambio que ocurre en los campo para aplicar la validación
  const valideForms = (text, input, type) => {
    if (!text) {
     __setValideForms('Este campo es obligatorio', input)

     return false
    }
    else if (!configReg.reg[input].test(text)) {
      __setValideForms(configReg.message[input], input)

      return false
    }
    else {
      __setValideForms('', input)
      return true
    }
  }

  // Captura los mensajes de error por cada campo
  const __setValideForms = (message, input) => {
    return setInitValues((val) => (
      Object.assign({}, {
        ...val,
        valideError: {
          ...val.valideError,
          [input] : { ...val.valideError[input], message }
        }
      })
    ))
  }

  // Controla el estado de cada validación (true) ==> indica que paso toda las validaciones
  const __done = (value) => {
    return setInitValues((val) => (
      Object.assign({}, { ...val, isValide: value })
    ))
  }

  // Inicializando el estado local
  useEffect(() => {
    setInitValues((val) => {
      return Object.assign({}, {...val, values: { ...state.dataFroms }})
    })
  }, [state, setInitValues])


   // Activando el boton del formulario
  useEffect(() => {
    const { fullName, email, phone, rangeAge } = state.dataFroms

      if (fullName && email && phone && rangeAge) {
        const key = Object.keys(state.dataFroms)
        const values = Object.values(state.dataFroms)
  
        const result = key.filter((__key, index) => {
          return configReg.reg[__key].test(values[index])
        })

        if (result.length >= 4 ) __done(true)
        else __done(false)
      }
  }, [setInitValues, state])

  return {
    onChange,
    onBlur,
    setInitValues,
    ...initValues
  }
}