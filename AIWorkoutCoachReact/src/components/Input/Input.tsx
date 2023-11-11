import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  label?: React.ReactNode
  autoComplete?: string
}

export default function Input({ type, errorMessage, placeholder, name, register, rules, label, autoComplete }: Props) {
  return (
    <div>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        autoComplete={autoComplete}
        {...register(name, rules)}
      ></input>
      <div className='mt-1 px-2 text-red-600 text-sm min-h-[1rem]'>{errorMessage}</div>
    </div>
  )
}
