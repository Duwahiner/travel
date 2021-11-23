import { Text as Tex } from 'rebass'
import styled from '@emotion/styled'
import PropTypes  from 'prop-types'

const TitleText = styled(Tex)`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  margin: 0px;
  padding: 0px;
  font-weight: normal;
`

export const Text = ({
  type,
  title,
  fontFamily,
  fontSize,
  color,
  lineHeight,
  textAlign
}) => {
  return (
    <TitleText
      as={type}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      textAlign={textAlign}
    >
      {title}
    </TitleText>
  )
}

Text.defaultProps = {
  type: 'span',
  fontFamily: 'Roboto',
  color: '#000',
  fontSize: '16px'
}

Text.propTypes = {
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired,
  fontFamily: PropTypes.string,
  fontSize:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  color: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string,
}
