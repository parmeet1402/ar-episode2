import React, { createContext, useReducer, useContext } from "react"

// Define the context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Global reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: localStorage.getItem("theme") || "dark",
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// Custom hooks to use dispatch and state
const useGlobalStateContext = () => useContext(GlobalStateContext)
const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)

export { GlobalProvider, useGlobalStateContext, useGlobalDispatchContext }
