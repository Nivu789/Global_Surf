import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-red-700'>
        {children}
    </div>
  )
}

export default Container