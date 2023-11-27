import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
    </div>
  )
}
