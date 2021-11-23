import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {  Container, WrapperContainer } from '../../util/template'
import { Text } from '../Text'
import { Input } from '../Input'

import styles from './label-input-forms.module.scss'


const ContentLabel = styled.label`
  width: 100%;
  height: auto;
`

const ContentWarning = styled(Grid)`
  padding: 4px;
`

export const LabelInputForms = ({
  theme,
  type,
  id,
  name,
  disabled,
  value,
  handleOnchange,
  handleOnBlur,
  titleLabel,
  placeholder,
  messageError
}) => {
  return (
    <Container width={1} className={styles.container}> 
      <WrapperContainer width={1} className={styles.wrapperContainer}>
        <Grid container>
          <ContentLabel>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid container item xs={12} sm={12} md={12} lg={12} className={styles.marginBottom}>
                <Text
                  type='span'
                  fontFamily='RobotoMedium'
                  title={titleLabel}
                  fontSize='13px'
                  color={theme.colors.colorText}
                />
              </Grid>

              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Input
                  id={id}
                  name={name}
                  type={type}
                  disabled={disabled}
                  placeholder={placeholder}
                  value={value}
                  theme={theme}
                  handleOnchange={handleOnchange}
                  handleOnBlur={handleOnBlur}
                  messageError={messageError}
                />
              </Grid>

              <ContentWarning container item xs={12} sm={12} md={12} lg={12} sx={{ height: '15px'}}>
                <Text
                  type='span'
                  fontFamily='RobotoMediumItalic'
                  title={messageError}
                  fontSize='11px'
                  lineHeight='9px'
                  color='red'
                />
              </ContentWarning>
            </Grid>
          </ContentLabel>
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

LabelInputForms.propTypes = {
  theme: PropTypes.object.isRequired,
  titleLabel: PropTypes.string.isRequired,
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