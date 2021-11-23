import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Flex,  Container, WrapperContainer } from '../../util/template'
import { Text } from '../Text'

export const ContentMenu = styled(Flex)``
export const ItemsMenu = styled(Flex)``

import styles from './menu.module.scss'

export const LinkA = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-bottom:
    ${({theme, colorBorder}) =>
      colorBorder
        ? `solid 2px ${theme.colors.bgMenu}`
        : `solid 2px transparent`
    };

  &:hover{
    border-bottom: ${({theme}) =>
      `solid 2px ${theme.colors.bgMenu}`
    };
    &:hover span {
      color: ${({theme}) =>
        theme.colors.placeholder
      };
    }
  }

  @media (max-width: 920px) {
    border-bottom:
      ${({theme, colorBorder}) =>
        colorBorder
          ? `solid 2px ${theme.colors.bgMenu}`
          : `solid 2px ${theme.colors.bgAlerts}`
      };
  }
`

export const Menu = ({ 
  theme,
  showMenu,
  itemsMenu,
  screen,
  active,
  handleActiveMenu,
  handleShowMenu
}) => {
  return (
    <Container className={showMenu ? styles.fadeLeft : styles.container }>
      <WrapperContainer className={styles.wrapperContainer}>
        <Grid container item xs={12} sm={12} md={12} lg={12}>
          <ContentMenu as='ul' className={styles.contentMenu}>
            {
              itemsMenu.length > 0 && (
                itemsMenu.map((item, index) => {
                  return (
                    <ItemsMenu as='li' key={index} width={1}>
                      <LinkA
                        as='a'
                        className={styles.linkA}
                        theme={theme}
                        colorBorder={
                          active.activeItem.toLowerCase() === item.name.toLowerCase()
                        }
                        onClick={() => {
                          handleActiveMenu(item.name)

                          if (screen <= 920) handleShowMenu(false)
                        }}
                      >
                        <Text
                          type='span'
                          fontFamily='RobotoBold'
                          title={item.name}
                          fontSize='13px'
                          textAlign='center'
                          color={theme.colors.title}
                        />
                      </LinkA>
                    </ItemsMenu>
                  )
                })
              )
            }
          </ContentMenu>
        </Grid>
      </WrapperContainer>
    </Container>
  )
}

Menu.propTypes = {
  theme: PropTypes.object.isRequired,
  showMenu: PropTypes.bool.isRequired,
  itemsMenu: PropTypes.array.isRequired,
  active: PropTypes.object.isRequired,
  handleActiveMenu: PropTypes.func.isRequired,
  handleShowMenu: PropTypes.func.isRequired,
  screen: PropTypes.number
}
