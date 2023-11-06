import { memo } from 'react'

interface Props {
  children?: React.ReactNode
}
function RegisterLayoutInner({ children }: Props) {
  return <div>{children}</div>
}
const RegisterLayout = memo(RegisterLayoutInner)

export default RegisterLayout
