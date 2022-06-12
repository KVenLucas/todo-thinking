import { createContext, useContext, useEffect, useReducer } from 'react'
import { Todo } from '../interfaces'
import {
  Actions,
  ActionTypes,
  State,
  TodosReducer
} from '../reducers/todos.reducer'
import { instance } from '../services/instance'

interface TodosContextProps {
  state: State
  dispatch: React.Dispatch<Actions>
}

const TodosContext = createContext({} as TodosContextProps)

interface TodosProviderProps {
  children: React.ReactNode
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [state, dispatch] = useReducer(TodosReducer, {
    todos: [],
    loading: false,
    error: null
  })

  async function getTodos() {
    // const response = await instance.get<Todo[]>('todos')

    // if (response.status !== 200)
    //   dispatch({ type: ActionTypes.ERROR, error: true })

    // const { data } = response

    dispatch({ type: ActionTypes.LOAD, payload: [], loading: false })
  }

  useEffect(() => {
    dispatch({ type: ActionTypes.CALL })
    getTodos()
  }, [])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => useContext(TodosContext)
