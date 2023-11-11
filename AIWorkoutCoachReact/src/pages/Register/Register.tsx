import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ThemeSwitchButton from 'src/components/ThemeSwitchButton'
import { getRules } from 'src/utils/rules'

// const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  interface FormData {
    email: string
    password: string
    confirm_password: string
    terms: boolean
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

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
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white '>
              Your email
            </label>
            <input
              type='email'
              placeholder='name@company.com'
              className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              autoComplete='on'
              {...register('email', rules.email)}
            ></input>
            <div className='mt-1 px-2 text-red-600 text-sm min-h-[1rem]'>{errors.email?.message}</div>
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white'>
              Password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              autoComplete='on'
              {...register('password', rules.password)}
            ></input>
            <div className='mt-1 px-2 text-red-600 text-sm min-h-[1rem]'>{errors.password?.message}</div>
          </div>
          <div>
            <label htmlFor='confirm_password' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white'>
              Confirm password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              autoComplete='on'
              {...register('confirm_password', rules.confirm_password)}
            ></input>
            <div className='mt-1 px-2 text-red-600 text-sm min-h-[1rem]'>{errors.confirm_password?.message}</div>
          </div>
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
          <button
            className='w-full bg-blue-600 rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center hover:bg-blue-700 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            Create an account
          </button>
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
