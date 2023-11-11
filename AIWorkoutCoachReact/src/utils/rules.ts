import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    validate:
      typeof getValues === 'function'
        ? (values) => values === getValues('password') || 'Please re-enter password'
        : undefined
  }
})
