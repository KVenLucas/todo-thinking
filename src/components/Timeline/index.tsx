import classnames from './timeline.module.css'
import { Loader, LoaderContent } from '../../common'
import { useTodos } from '../../context/todos.context'
import { CardTodo } from '../CardTodo'
import { Fragment } from 'react'

function Timeline() {
  const { state } = useTodos()

  return (
    <div className={classnames['--timeline--container']}>
      {state.todos.length == 0 ? (
        <Loader>
          <LoaderContent
            message={'Você ainda não tem tarefas cadastradas'}
            tip={
              'Parece que temos que criar um todo para resolver esse problema'
            }
          />
        </Loader>
      ) : (
        <Fragment>
          {state.todos.map(todo => (
            <CardTodo key={todo.id} todo={todo} />
          ))}
        </Fragment>
      )}
    </div>
  )
}

export { Timeline }
