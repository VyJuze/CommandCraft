import {createContext, useContext, useEffect, useReducer} from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';


const GameContext = createContext(null)

const initialState = {
  completedExercises: {
    comandos_basicos: [],
    entidades: [],
    movimiento: [],
    construccion:[]
  }

  
}

const reducer = (state, action) => {
  switch (action.type) {
    case "completeExercise":{
      const {category, exerciseId} = action.payload
      if (state.completedExercises[category].includes(exerciseId)) return state
      return {
        ...state, 
        completedExercises: {
          ...state.completedExercises,
          [category]: [...state.completedExercises[category], exerciseId],
        }
      }
    }
    case "resetProgress" : {
      return initialState 
    }
    default:
      return state
  }
}

export const GameProvider = ({children} ) => {
  const [persisted, setPersisted] = useLocalStorage('mc-logic-progress', initialState)
  const [state, dispatch] = useReducer(reducer, persisted)

  useEffect(() => {
    setPersisted(state)
  }, [state])

  return (
    <GameContext.Provider value={{state,dispatch}}>
      {children}
    </GameContext.Provider>
  )

}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context){
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}