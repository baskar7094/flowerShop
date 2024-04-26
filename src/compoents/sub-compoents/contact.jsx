import React from 'react'
import Layout from '../layout/layout'
import Contact from '../contact/page'
import Footer from '../footer/page'

export default function Subconact() {
  return (
    <div>
      <section className=''>
        <div className='bg-slate-500'>
            <Layout/>
        </div>
        <div className='mt-20'>

        <Contact/>

        <Footer/>
        </div>
      </section>
    </div>
  )
}
