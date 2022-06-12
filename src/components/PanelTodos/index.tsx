import { Badge } from '../../common'
import { useTodos } from '../../context/todos.context'
import classnames from './panel.todos.module.css'

function PanelTodos() {
  const { state } = useTodos()

  const todosCreated = state.todos.length
  const completedTodos = state.todos.filter(todo => todo.isComplete).length

  return (
    <section>
      <div className={classnames['--panel--wrapper']}>
        <div>
          <Badge
            label={'Tarefas criadas'}
            content={todosCreated}
            variant="--badge--created"
          />
        </div>

        <div>
          <Badge
            label={'Concluídas'}
            content={`${completedTodos} de ${todosCreated}`}
            variant="--badge--complete"
          />
        </div>
      </div>
    </section>
  )
}

export { PanelTodos }
