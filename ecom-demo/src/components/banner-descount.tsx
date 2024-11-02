import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const BannerDescount= () => {
  return (
    <section className='p-5 sm:p-20 text-center'>
          <h3 className='uppercase font-black text-2xl text-primary'>Get up to a 20% off</h3>
          <h4 className='mt-3 font-semibold'>Up to 20% off on sales over 1500usd</h4>
          <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5'>
               <Link href="#" className={buttonVariants()}>Buy Now</Link>
               <Link href="#" className={buttonVariants({variant: "outline"})}>More Info</Link>

          </div>
    </section>
  )
}

export default BannerDescount