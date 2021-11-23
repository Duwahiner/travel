import { useEffect, useState } from 'react'

const getRandomChar = (chars) =>
  chars[Math.floor(Math.random() * chars.length)]

const getChar = (
  item,
  index,
  maxLength,
  oldValue,
  newValue,
  chars,
) => {
  if (index > item) {
    return oldValue[index]
  }

  if (item >= maxLength && index < item - maxLength) {
    return newValue[index]
  }

  return getRandomChar(chars)
}

const defaultOptions = {
  chars: [
    "-",
    "1",
    "/",
    "3",
    "*",
    "5",
    "}",
    "7",
    "~",
    "9",
  ],

  interval: 50
}

export const useAnimateString = (config = {
  values: [''],
  time: 0
}) => {
  const [value, setValue] = useState(config.values[config.values.length - 1])
  const [result, setResult] = useState('')

  const { chars, interval } = { ...defaultOptions }

  // Transfromación de cada palabra por iteración
  // El estado inicial debe contener almenos un array con un elento de typo string
  // El Array debe ser de tipo string
  useEffect(() => {
    let item = 0

    const idInterval = setInterval(() => {
      setResult(oldValue => {
        if (oldValue === value) {
          clearInterval(idInterval)

          return value
        }

        const oldLength = oldValue ? oldValue.length : 0
        const newLength = value.length
        const maxLength = Math.max(oldLength, newLength)

        return [...new Array(maxLength)]
          .map((_, index) => getChar(item, index, maxLength, oldValue, value, chars))
          .join('')
      })

      item ++
    }, interval)

    return () => clearInterval(idInterval);
  }, [value, chars, interval]);

  // Inicia la animación si se le pasa la configuración.
  useEffect(() => {
    let items = 0

    const action = setInterval(() => {
      setValue(config.values[items])
      items = items === (config.values.length - 1) ? 0 : items + 1
    }, config.time)

    return () => {
      return clearInterval(action)
    }
  }, [setValue, config])

  return { animate: { text: result } }
}