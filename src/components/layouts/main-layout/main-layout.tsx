import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode
}

export const MainLayout:React.FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
