import classnames from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

function InputText({ name, label, placeholder, ...rest }: InputProps) {
  return (
    <div className={classnames['--wrapper']}>
      <input {...rest} type="text" placeholder={placeholder} />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  )
}

export { InputText }
