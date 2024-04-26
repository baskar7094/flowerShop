import React from 'react'
import Layout from '../layout/layout'
import { Link } from 'react-router-dom'
import About from '../about/page'
import Price from '../price/page'
import Contact from '../contact/page'
import Footer from '../footer/page'

function Home() {
    return (
        <div>
            <section className='bg-img'>

            <Layout />
            <Item />
                </section>
            <div className='grid grid-cols-1  xl:grid-cols-2 xl:my-20 xl:mx-auto '>
                <Card
                    count={'01'}
                    title="order online"
                    describtion="Share some details here. This is Flexible section where you can share anything you want."
                    />
                <Card
                    count={'02'}
                    title="free shipping"
                    describtion="Share some details here. This is Flexible section where you can share anything you want."
                    />
                <Card
                    count={'03'}
                    title="more freshness"
                    describtion="Share some details here. This is Flexible section where you can share anything you want."
                    />
                <Card
                    count={'04'}
                    title="safe payment"
                    describtion="Share some details here. This is Flexible section where you can share anything you want."
                />
            </div>
            <About/>
            <Price/>
            <Contact/>
            <Footer/>
        </div>
    )
}

function Item() {
    return (
        <>
            <section className='container px-4 py-10 xl:py-14 text-center text-white capitalize '>
                <h4 className='text-sm xl:text-lg'>welcome to florist</h4>
                <h1 className='text-2xl xl:text-3xl  py-3 font-bold '>let's make beautiful flowers a part of your life.</h1>
                <p className='pb-10 xl:text-xl'>Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.

                </p>

                <Link to={'/'} className='button'>shop now</Link>
            </section>

        </>
    )
}

function Card(props) {
    return (
        <>
            <section className='mx-5 my-10  '>
                <div className=' capitalize border-l-2 pl-4 border-red-500'>
                    <p className='text-sm text-red-500 py-2'>{props.count}</p>
                    <h3 className='text-md py-3'>{props.title}</h3>
                    <p className='text-sm'>{props.describtion}</p>
                </div>
            </section>
        </>
    )
}


export default Home
