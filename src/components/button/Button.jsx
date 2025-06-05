import React, { Children } from 'react'

const Button = ({ children ,className =''}) => {
  return (
    <button className={`text-white  bg-[black] hover:bg-blue  text-[0.9rem] font-[500] w-[179px] h-[60px] flex items-center justify-center rounded-[30px]  ease-out duration-300  cursor-pointer ${className}`}>
    {children}
    </button>
  )
}

export default Button
