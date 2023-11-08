import ThemeSwitchButton from 'src/components/ThemeSwitchButton'

export default function Login() {
  return (
    <div className='w-full bg-white rounded-lg shadow lg:w-4/12 md:w-7/12 dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Sign in
          </h1>
          <ThemeSwitchButton />
        </div>

        <form className='space-y-4 md:space-y-6' action='#'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white'>
              Your email
            </label>
            <input
              type='text'
              id='email'
              placeholder='name@company.com'
              name='email'
              className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            ></input>
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-900 mb-2 dark:text-white'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='••••••••'
              className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            ></input>
          </div>
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
          <button
            type='submit'
            className='w-full bg-blue-600 rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center hover:bg-blue-700 
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            Sign in to your account
          </button>
          <p className='text-sm font-light text-gray-400 dark:text-gray-400'>
            Dont't have an account yet?
            <a href='#' className='font-medium text-blue-600 hover:underline pl-2 dark:text-blue-500'>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
