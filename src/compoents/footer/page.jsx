import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <Item />
        </div>
    )
}


function Item() {
    return (
        <>
            <section>
                <footer className='container my-10 '>
                    <div className='grid grid-cols-1 gap-5 xl:grid-cols-3 xl:justify-evenly   '>
                        <article className='text-center'>

                            <h2 className='text-xl capitalize py-2'>flower shop</h2>
                            <p>Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.</p>

                        </article>
                        <div >

                            <h2 className='text-xl capitalize text-center'>links </h2>
                        <article className=' text-center flex justify-center list-none gap-6  my-5'>
                            <li><Link to={'/'}>home</Link></li>
                            <li><Link to={'/'}>about</Link></li>
                            <li><Link to={'/'}>shop</Link></li>
                            <li><Link to={'/'}>contact</Link></li>
                        </article>
                        </div>
                        <article className='text-center'>
                            <h2 className='text-xl capitalize py-3'>contact us</h2>
                            <address className=''>
                                Address 13 Firth Avenue, New <br />
                                York 101660 <br />
                                Email: contact@info.come <br />
                                Phone: +91 9485938262
                            </address>
                        </article>
                    </div>
                    <div>
                        <p className='text-center mt-10'>

                            copyright &copy; 2024 Flower Shop
                        </p>

                    </div>
                </footer>
            </section>
        </>
    )
}