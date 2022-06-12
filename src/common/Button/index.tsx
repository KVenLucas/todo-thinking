import classnames from './button.module.css'

type VariantsProps = '--btn--danger' | '--btn'

interface IconButtonProps {
  children: React.ReactNode
  variant?: VariantsProps
}

function IconButton({ children, variant }: IconButtonProps) {
  return <span className={variant && classnames[variant]}>{children}</span>
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string
  children: React.ReactNode
  variant?: '--btn'
}

function Button({ name, variant, children, ...rest }: ButtonProps) {
  return (
    <button className={variant && classnames[variant]} {...rest}>
      {name && <span>{name}</span>}
      {children}
    </button>
  )
}

export { Button, IconButton }
