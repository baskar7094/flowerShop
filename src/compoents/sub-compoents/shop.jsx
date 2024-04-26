import React from 'react'
import Layout from '../layout/layout'
import Price, { UseEx } from '../price/page'
import Footer from '../footer/page'

export default function Subshop() {
  return (
    <div>
      <section>
        <div className='bg-slate-900'>
            <Layout/>
        </div>
        <Price/>
        <UseEx/>
        <Footer/>
      </section>
    </div>
  )
}
