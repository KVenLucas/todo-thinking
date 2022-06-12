import { Logo } from '../../icons'
import { Todos } from '../Todos'
import classnames from './header.module.css'

function Main() {
  return (
    <main className={classnames['--container--wrapper']}>
      <header className={classnames['--header']}>
        <section className={classnames['--container--logo']}>
          <Logo />
        </section>
      </header>
      <Todos />
    </main>
  )
}

export { Main }
