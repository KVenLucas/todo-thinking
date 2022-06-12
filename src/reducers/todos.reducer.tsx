import { Todo } from '../interfaces'

export enum ActionTypes {
  'ADD' = 'ADD',
  'DELETE' = 'DELETE',
  'COMPLETE' = 'COMPLETE',
  'LOAD' = 'LOAD',
  'ERROR' = 'ERROR',
  'CALL' = 'CALL'
}

export interface State {
  todos: Todo[]
  loading: boolean
  error: null | boolean
}

export type Actions =
  | {
      type: ActionTypes.ADD
      payload: Todo
    }
  | { type: ActionTypes.DELETE; payload: Todo }
  | {
      type: ActionTypes.ERROR
      error: boolean
    }
  | { type: ActionTypes.COMPLETE; payload: Todo }
  | { type: ActionTypes.LOAD; payload: Todo[]; loading: boolean }
  | { type: ActionTypes.CALL }

function TodosReducer(state: State, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        todos: [{ ...action.payload }, ...state.todos]
      }

    case ActionTypes.DELETE:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id)
      }

    case ActionTypes.COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          if (todo.id === action.payload.id) {
            return action.payload
          }

          return todo
        })
      }

    case ActionTypes.LOAD:
      return { ...state, todos: action.payload, loading: false, error: null }

    case ActionTypes.ERROR:
      return { ...state, todos: [], error: action.error, loading: false }

    case ActionTypes.CALL:
      return { ...state, loading: true, error: null }

    default:
      return state
  }
}

export { TodosReducer }
