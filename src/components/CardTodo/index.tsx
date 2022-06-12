import { Button, Checkbox, IconButton } from '../../common'
import { useTodos } from '../../context/todos.context'
import { Trash } from '../../icons'
import { Todo } from '../../interfaces'
import { ActionTypes } from '../../reducers/todos.reducer'
import classnames from './card.todo.module.css'

interface CardTodoProps {
  todo: Todo
}

function CardTodo({ todo }: CardTodoProps) {
  const { state, dispatch } = useTodos()

  const status = todo.isComplete
    ? '--card--issue--complete'
    : '--card--issue--ongoing'

  function deleteTodo() {
    dispatch({ type: ActionTypes.DELETE, payload: todo })
  }

  function updateTodo() {
    const status = !todo.isComplete

    dispatch({
      type: ActionTypes.COMPLETE,
      payload: { ...todo, isComplete: status }
    })
  }

  return (
    <section className={classnames['--card--container']}>
      <div>
        <Checkbox
          checked={todo.isComplete}
          onChange={updateTodo}
          name={String(todo.id)}
          variant={'--checkbox--rounded'}
          controlId={String(todo.id)}
        />
      </div>

      <div className={classnames[status]}>{todo.name}</div>

      <div>
        <Button onClick={deleteTodo}>
          <IconButton variant="--btn--danger">
            <Trash />
          </IconButton>
        </Button>
      </div>
    </section>
  )
}

export { CardTodo }
