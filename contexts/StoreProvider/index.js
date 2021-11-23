import { useReducer } from 'react'

import { ContextView } from '../../contexts'
import { initialState, reducer } from "../../reducers"

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextView.Provider value={[
      state,
      dispatch
    ]}
    >
      {children}
    </ContextView.Provider>
  )
}