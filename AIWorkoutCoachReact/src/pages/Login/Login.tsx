import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { loginAccount } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import ThemeSwitchButton from 'src/components/ThemeSwitchButton'
import { AppContext } from 'src/contexts/app.context'
import { ErrorResponse } from 'src/types/utils.type'
import { schema, Schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'terms'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'terms'>, {
                message: formError[key as keyof Omit<FormData, 'terms'>],
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
          <h1 className='font-bold text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Sign in
          </h1>
          <ThemeSwitchButton />
        </div>

        <form className='space-y-4 md:space-y-6' onSubmit={onSubmit} noValidate>
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
          <div className='flex items-center justify-between'>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  type='checkbox'
                  id='remember'
                  name='remember'
                  className='form-checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>
                  Remember me
                </label>
              </div>
            </div>
            <a href='#' className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
              Forgot password?
            </a>
          </div>
          <Button
            className='w-full bg-blue-600 rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center hover:bg-blue-700 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
            isLoading={loginMutation.isPending}
            disabled={loginMutation.isPending}
          >
            Sign in to your account
          </Button>
          <p className='text-sm font-light text-gray-400 dark:text-gray-400'>
            Dont't have an account yet?
            <Link className='font-medium text-blue-600 hover:underline pl-2 dark:text-blue-500' to='/register'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
