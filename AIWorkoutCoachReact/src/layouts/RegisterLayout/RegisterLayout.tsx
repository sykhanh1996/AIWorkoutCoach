import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
function RegisterLayoutInner({ children }: Props) {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='container m-auto px-4 sm:px-0'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <RegisterHeader />
          {children}
          <Outlet />
          <Footer />
        </div>
      </div>
    </section>
  )
}
const RegisterLayout = memo(RegisterLayoutInner)

export default RegisterLayout
