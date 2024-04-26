import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../../assets/about-01.jpg'
import Img2 from '../../assets/about-02.jpg'
function About() {
    return (
        <div>
<Item img1={Img1} img2={Img2} alt="about img"/>
        </div>
    )
}

function Item(props) {
    return (
        <>
            <section className='container mx-5 my-10 '>
                <div className='flex flex-col xl:flex-row xl:justify-evenly xl:items-center gap-5 '>
                    <div className=' flex gap-4 py-4'>
                        <img src={props.img1} alt={props.alt} className='w-40 xl:w-80 img-round1 h-60  object-cover order-2 ' />
                        <img src={props.img2} alt={props.alt}  className='w-60 xl:w-96 img-round2 h-96 object-cover order-1 '/>
                    </div>
                    <div>
                        <article className='py-4 px-4 text-center capitalize'>
                            <h4 className='text-sm xl:text-xl'>about florist</h4>
                            <h2 className='text-xl py-4  xl:text-2xl '>blossoming your spcial moments with nature's finest </h2>
                            <p className='text-md mb-10'>Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
                            <Link to={'/'} className='button'>read more</Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
