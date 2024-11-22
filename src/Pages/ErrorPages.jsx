import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPages() {
  return (
    <div className='flex items-center justify-center flex-col space-y-4 '>
            <h1 className='font-bold text-4xl'>Oops!</h1>
            <Link to='/' className='btn btn-neutral'> Home back </Link>
    </div>
  )
}
