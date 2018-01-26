export const SHOW_MENU = 'menu/SHOW_MENU'
export const HIDE_MENU = 'menu/HIDE_MENU'

const initialState = {
  show: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        show: true
      }

    case HIDE_MENU:
      return {
        ...state,
        show: false
      }

    default:
      return state
  }
}

export const showMenu = () => {
  return dispatch => {
    dispatch({
      type: SHOW_MENU
    })
  }
}

export const hideMenu = () => {
  return dispatch => {
    dispatch({
      type: HIDE_MENU
    })
  }
}