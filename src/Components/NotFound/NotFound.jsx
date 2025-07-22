import React from 'react'
import Error from "../../assets/notFound.png"
export default function NotFound() {
  return (
    <div className='text-center'>
      <img className='w-100 ' src={Error} alt="" />
    </div>
  )
}
