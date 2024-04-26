import React from 'react'
import { Banner } from '../price/page'
import CutmoresIMg1 from '../../assets/person1.jpg'
import CutmoresIMg2 from '../../assets/person2.jpg'
import CutmoresIMg3 from '../../assets/person3.jpg'
import cardimg from '../../assets/cta.jpg'

export default function Contact() {
  return (
    <div>
      <div className='xl:grid grid-cols-3'>

        <Customers
          img={CutmoresIMg1}
          content="I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch."
          alt="santh"
          name="stave smith"
          workName="wedding planner"
        />
        <Customers
          content="I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch."
          img={CutmoresIMg2}
          alt="santh"
          name="stave smith"
          workName="wedding planner"
        />
        <Customers
          content="I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch."
          img={CutmoresIMg3}
          alt="santh"
          name="stave smith"
          workName="wedding planner"
        />
      </div>
      <div className='bg-red-950 w-screen h-auto text-center px-2 xl:pr-10 '>
        <Banner img={cardimg}
          alt=""
          head="call to action "
          content="Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms"

        />
      </div>
    </div>
  )
}

function Customers(props) {
  return (
    <>
      <section className='mx-5 my-6   text-center xl:shadow-2xl'>
        <div>
          <div className=''>star</div>
          <p className='text-justify py-2 text-sm'>{props.content}</p>

        </div>
        <div className='flex gap-2 items-center my-5  w-60 h-auto py-1 mx-auto '>
          <img src={props.img} alt={props.alt} />
          <h6 className=' capitalize'>{props.name} <br /> <small>{props.workName}</small></h6>
        </div>
      </section>
    </>
  )
}
