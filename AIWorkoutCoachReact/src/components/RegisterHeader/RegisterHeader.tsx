import logo from '../../assets/images/logo.jpg'

export default function RegisterHeader() {
  return (
    <a href='#' className='flex items-center justify-center text-2xl mb-6 font-semibold text-gray-900 dark:text-white'>
      <img src={logo} alt='Sport AI' className='w-8 h-8 mr-2 rounded-full' />
      AI Coach
    </a>
  )
}
