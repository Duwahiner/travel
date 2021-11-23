import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { WrapperContainer as Container } from '../../util/template'

import styles from './input.module.scss'

const InputText = styled.input`
  border: ${({theme, error}) => 
    error
      ? 'solid 1px red'
      : `solid 1px ${theme.colors.bgExtent}`
  };
`

export const Input = ({
  type,
  id,
  name,
  value,
  disabled,
  theme,
  placeholder,
  handleOnchange,
  handleOnBlur,
  messageError
}) => {
  return (
    <Container width={1} height='40px'>
      <InputText
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={handleOnchange}
        onBlur={handleOnBlur}
        theme={theme}
        className={styles.inputText}
        error={messageError}
      />
    </Container>
  )
}

Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: 'Escribe algo que se te ocurra',
  disabled: false
}

Input.propTypes = {
  theme: PropTypes.object.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  messageError: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
}
