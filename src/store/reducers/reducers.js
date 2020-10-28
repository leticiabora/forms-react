// reducers

const initialState = {
  username: null,
  email: null,
  preferencia: null,
  isOk: false
}

export const forms = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        ...action.payload
      }
    case 'RESET_FORMS':
      return initialState
    default:
      return state;
  }
}