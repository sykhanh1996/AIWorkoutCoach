import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

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

export const schema = yup.object({
  email: yup.string().required('Email là bắt buộc'),
  password: yup.string().required('Password là bắt buộc'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  terms: yup.boolean().defined()
})
const loginSchema = schema.omit(['confirm_password'])

export type LoginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
