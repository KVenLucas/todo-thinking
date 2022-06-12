import { useId, useState } from 'react'
import { Button, IconButton, InputText } from '../../common'
import { useTodos } from '../../context/todos.context'
import { PlusIcon } from '../../icons'
import { Todo } from '../../interfaces'
import { ActionTypes } from '../../reducers/todos.reducer'
import { PanelTodos } from '../PanelTodos'
import { Timeline } from '../Timeline'
import classnames from './hero.module.css'

function Todos() {
  const { state, dispatch } = useTodos()
  const [taskname, setTaskname] = useState<string>('')

  function createTodo() {
    if (taskname.trim() === '') return

    const idTodo = state.todos.length + 1

    dispatch({
      type: ActionTypes.ADD,
      payload: { id: idTodo, isComplete: false, name: taskname }
    })

    setTaskname('')
  }

  return (
    <section className={classnames['--section--hero']}>
      <div className={classnames['--section--call--action']}>
        <InputText
          value={taskname}
          onChange={event => setTaskname(event.target.value)}
          name={'create-todo'}
          id={'create-todo'}
          spellCheck={false}
          placeholder="Adicione uma nova tarefa..."
        />

        <Button name="Criar" variant="--btn" onClick={createTodo}>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </Button>
      </div>

      <PanelTodos />
      <Timeline />
    </section>
  )
}

export { Todos }
