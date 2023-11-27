import { InputHTMLAttributes, ReactNode } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  label?: React.ReactNode
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  errorMessage,
  className,
  name,
  register,
  rules,
  label,
  classNameInput = 'form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500 focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: Props): JSX.Element {
  const registerResult = register && name ? register(name, rules) : null

  return (
    <div className={className}>
      {label}
      <input className={classNameInput} {...registerResult} {...rest}></input>
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
