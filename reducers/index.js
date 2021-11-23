const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'
const GET_SHOW_SPINNER = 'GET_SHOW_SPINNER'
const GET_DATA_MENU = 'GET_DATA_MENU'
const GET_SHOW_MENU = 'GET_SHOW_MENU'
const GET_ACTIVE_ITEM_MENU = 'GET_ACTIVE_ITEM_MENU'
const GET_EFFECT_TEXT = 'GET_EFFECT_TEXT'
const GET_VALUE_INPUT = 'GET_VALUE_INPUT'
const SET_RESET_FORMS = 'SET_RESET_FORMS'

export const getNotifications = (action = false) => {
  return {
    type: GET_NOTIFICATIONS,
    payload: { action }
  }
}

export const getShowSpinner = (action = false) => {
  return {
    type: GET_SHOW_SPINNER,
    payload: { action }
  }
}

export const getDataMenu = (data = []) => {
  return {
    type: GET_DATA_MENU,
    payload: { data }
  }
}

export const getShowMenu = (action = false) => {
  return {
    type: GET_SHOW_MENU,
    payload: { action }
  }
}

export const getActiveItemMenu = (data = {
  activeItem: ''
}) => {
  return {
    type: GET_ACTIVE_ITEM_MENU,
    payload: { data }
  }
}

export const getEffectText = (data = []) => {
  return {
    type: GET_EFFECT_TEXT,
    payload: { data }
  }
}

export const getValueInput = (values = {
  value: '',
  type: ''
}) => {
  return {
    type: GET_VALUE_INPUT,
    payload: { value: values.value,  type: values.type }
  }
}

export const setResetForms = () => {
  return {
    type: SET_RESET_FORMS
  }
}

export const initialState = {
  showNotications: false,
  showSpinner: false,
  showMenu: false,
  dataMenu: [],
  effectText: [''],

  activeItemMenu: {
    activeItem: ''
  },

  dataFroms: {
    fullName: '', 
    email: '',
    phone: '',
    rangeAge: ''
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_NOTIFICATIONS:
      return Object.assign({},
        state, {
          showNotications:  payload.action
        })

    case GET_SHOW_SPINNER:
      return Object.assign({},
        state, { 
          showSpinner:  payload.action
        })
      
    case GET_SHOW_MENU:
      return Object.assign({},
        state, { 
          showMenu:  payload.action
        })

    case GET_DATA_MENU:
      return Object.assign({},
        state, { 
          dataMenu:  payload.data
        })

    case GET_ACTIVE_ITEM_MENU:
      return Object.assign({},
        state, { 
          activeItemMenu:  payload.data
        })

    case GET_EFFECT_TEXT:
      return Object.assign({},
        state, { 
          effectText:  payload.data
        })
    
    case GET_VALUE_INPUT:
      return Object.assign({},
        state, { 
          dataFroms:  {
            ...state.dataFroms,
            [payload.type] : payload.value
          }
        })
      
    case SET_RESET_FORMS:
      return Object.assign({},
        state, { 
          dataFroms:  initialState.dataFroms
        })

    default:
      return state
  }
}

