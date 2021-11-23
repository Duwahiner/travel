import { Grid, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types'

import { Flex, Container} from '../../util/template'

import styles from './menu-button.module.scss'

export const MenuButton = ({ theme, handleShowMenu}) => {
  return (
    <Container className={styles.container}>
      <Grid container item xs='auto' sm='auto' md='auto' lg='auto' alignItems='center'>
          <Flex bg=''>
            <IconButton
              aria-label='search'
              onClick={handleShowMenu}
            >
              <MenuIcon style={{ fontSize: 25 }} />
            </IconButton>
          </Flex>
        </Grid>
    </Container>
  )
}

MenuButton.propTypes = {
  theme: PropTypes.object.isRequired,
  handleShowMenu: PropTypes.func.isRequired
}
