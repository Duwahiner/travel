import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import {  Container, WrapperContainer } from '../../util/template'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { MenuButton } from '../MenuButton';

import styles from './header.module.scss'

export const Header = ({ 
  theme,
  screen,
  data,
  handleActiveMenu, 
  handleShowMenu
}) => {
  return (
    <Container className={styles.container} width={1}>
      <WrapperContainer className={styles.wrapperContainer} width={1}>
        <Grid container justifyContent='space-between'>
          <Grid container item xs={4} sm={2} md='auto' lg='auto'>
            <Logo />
          </Grid>

          <Grid container item xs='auto' sm={8} md={8} lg={8} justifyContent='flex-end'>
            <Menu
              theme={theme}
              showMenu={data.showMenu}
              itemsMenu={data.dataMenu}
              active={data.activeItemMenu}
              handleActiveMenu={handleActiveMenu}
              handleShowMenu={handleShowMenu} 
              screen={screen}
            />
          </Grid>

          <Grid
            container
            item
            xs='auto'
            sm='auto'
            md='auto'
            lg='auto'
            alignItems='center'
            className={styles.contentMenuButton}
          >
            <MenuButton theme={theme} handleShowMenu={handleShowMenu} />
          </Grid>
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

Header.propTypes = {
  theme: PropTypes.object.isRequired,
  handleActiveMenu: PropTypes.func.isRequired,
  handleShowMenu: PropTypes.func.isRequired,
  screen: PropTypes.number
}
