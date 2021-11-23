import PropTypes from 'prop-types'

import { Button } from '../../util/template'

import styles from './button-primary.module.scss'

export const ButtonPrimary = ({
  theme,
  color,
  disabled,
  title,
  fontFamily,
  fontSize,
  width,
  height,
  handleOnClick
}) => {

  return (
    <Button
      width={width}
      height={height}
      className={
        !disabled 
          ? styles.buttonPrimaryDisabled
          : styles.buttonPrimary
      }
      onClick={handleOnClick}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      disabled={!disabled}
    >
      {title}
    </Button>
  )
}


ButtonPrimary.defaultProps = {
  type: 'span',
  fontFamily: 'Roboto',
  color: '#FFF',
  fontSize: '16px'
}

ButtonPrimary.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool,
  handleOnClick: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.string,
}
