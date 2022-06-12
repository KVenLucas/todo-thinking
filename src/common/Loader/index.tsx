import { Clipboard } from '../../icons'

import classnames from './loader.module.css'

interface LoaderContentProps {
  message: string
  tip: string
}

function LoaderContent({ message, tip }: LoaderContentProps) {
  return (
    <div className={classnames['--loader--container']}>
      <span className={classnames['--loader--message']}>{message}</span>
      <span className={classnames['--loader--tip']}>{tip}</span>
    </div>
  )
}

interface LoaderProps {
  children?: React.ReactNode
}

function Loader({ children }: LoaderProps) {
  return (
    <div className={classnames['--loader--wrapper']}>
      <div>
        <Clipboard />
      </div>
      {children}
    </div>
  )
}

export { Loader, LoaderContent }
