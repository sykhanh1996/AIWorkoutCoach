import { InputHTMLAttributes } from 'react'
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
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  label,
  autoComplete,
  classNameInput = 'form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500 focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  classNameError = 'mt-1 px-2 text-red-600 text-sm min-h-[1rem]'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}

  return (
    <div className={className}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className={classNameInput}
        autoComplete={autoComplete}
        {...registerResult}
      ></input>
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
