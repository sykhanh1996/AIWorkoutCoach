import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ThemeSwitchButton from 'src/components/ThemeSwitchButton'
import { Schema, getRules, schema } from 'src/utils/rules'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password' | 'terms'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password', 'terms'])

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password' | 'terms'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password' | 'terms'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password' | 'terms'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='w-full bg-white rounded-lg shadow lg:w-4/12 md:w-7/12 dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Create an account
          </h1>
          <ThemeSwitchButton />
        </div>
        <form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
          <Input
            name='email'
            register={register}
            type='email'
            errorMessage={errors.email?.message}
            placeholder='name@company.com'
            autoComplete='on'
            label={
              <label htmlFor='email' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white '>
                Your email
              </label>
            }
          />
          <Input
            name='password'
            register={register}
            type='password'
            errorMessage={errors.password?.message}
            placeholder='••••••••'
            autoComplete='on'
            label={
              <label htmlFor='email' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white '>
                Password
              </label>
            }
          />
          <Input
            name='confirm_password'
            register={register}
            type='password'
            errorMessage={errors.confirm_password?.message}
            placeholder='••••••••'
            autoComplete='on'
            label={
              <label htmlFor='email' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white '>
                Confirm password
              </label>
            }
          />
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                type='checkbox'
                className='form-checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                {...register('terms')}
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor='terms' className='text-gray-500 dark:text-gray-300'>
                I accept the{' '}
                <Link to='/login' className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>
          <Button
            className='w-full bg-blue-600 rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center hover:bg-blue-700 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
            isLoading={registerAccountMutation.isPending}
            disabled={registerAccountMutation.isPending}
          >
            Create an account
          </Button>
          <p className='text-sm font-light text-gray-400 dark:text-gray-400'>
            Already have an account?
            <Link className='font-medium text-blue-600 hover:underline pl-2 dark:text-blue-500' to='/login'>
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
