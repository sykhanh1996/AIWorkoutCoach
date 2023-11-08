import logo from '../../assets/images/logo.jpg'
import { BsSun } from 'react-icons/bs'

export default function Login() {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='container m-auto px-4 sm:px-0'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <a href='#' className='flex items-center justify-center text-2xl mb-6 font-semibold text-gray-900'>
            <img src={logo} alt='Sport AI' className='w-8 h-8 mr-2 rounded-full' />
            AI Coach
          </a>

          <div className='w-full bg-white rounded-lg shadow sm:w-4/12'>
            <div className='p-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign in</h1>
                <button className='inline-block w-4'>
                  <BsSun style={{
                    innerHeight: '50px'
                  }} />
                </button>
              </div>

              <form className='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-900  mb-2'>
                    Your email
                  </label>
                  <input
                    type='text'
                    id='email'
                    placeholder='name@company.com'
                    name='email'
                    className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2'
                  ></input>
                </div>
                <div>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-900 mb-2'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='••••••••'
                    className='form-input bg-gray-50 w-full border border-gray-300 rounded-lg text-gray-900 text-sm p-2.5 block focus:ring-blue-600 focus:border-blue-500
                    focus:outline-none focus:border-2'
                  ></input>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        type='checkbox'
                        id='remember'
                        name='remember'
                        className='form-checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:outline-none focus:ring-blue-300'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='remember' className='text-gray-500'>
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
                  className='w-full bg-blue-600 rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
                >
                  Sign in to your account
                </button>
                <p className='text-sm font-light text-gray-400'>
                  Dont't have an account yet?
                  <a href='#' className='font-medium text-blue-600 hover:underline pl-2'>
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
