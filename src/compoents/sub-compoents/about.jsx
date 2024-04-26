import React from 'react'
import Layout from '../layout/layout'
import About from '../about/page'
import Footer from '../footer/page'
import { UseEx } from '../price/page'

export default function Subabout() {
  return (
    <div>
<section >
    <div className='bg-slate-900'>
<Layout/>
    </div>
<About/>

<hr  className=' ring-1 border-gray-400 '/>
<UseEx/>
<hr  className='ring-1  ring-slate-400'/>
<Footer/>
</section>

    </div>
  )
}

function Item()
{
    return(
        <>
        
        </>
    )
}
