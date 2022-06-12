import classnames from './badge.module.css'

interface BadgeProps {
  label: string
  content: string | number
  variant: '--badge--created' | '--badge--complete'
}

function Badge({ label, content, variant }: BadgeProps) {
  return (
    <div className={classnames['--badge--wrapper']}>
      <span className={(classnames['--badge--label'], classnames[variant])}>
        {label}
      </span>
      <span className={classnames['--badge--content']}>{content}</span>
    </div>
  )
}

export { Badge }
