import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src='/image.svg' alt='404' width={300} height={300} />
        <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
        <p className='text-lg'>The page you are looking for does not exist.</p>
        <Link href='/' className='text-blue-500'>Go to Home</Link>
    </div>
  )
}

export default CustomNotFound