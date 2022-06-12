import classnames from './checkbox.module.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  variant: '--checkbox--rounded'
  controlId: string
}

function Checkbox({
  name,
  label,
  variant,
  type,
  controlId,
  ...rest
}: CheckboxProps) {
  return (
    <div className={classnames[variant]}>
      <input type="checkbox" name={name} id={controlId} {...rest} />
      <label htmlFor={name}></label>
    </div>
  )
}

export { Checkbox }
