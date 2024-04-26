import React from 'react'
import Img1 from '../../assets/product-1.jpg'
import Img2 from '../../assets/product-2.jpg'
import Img3 from '../../assets/product-3.jpg'
import Img4 from '../../assets/product-4.jpg'
import Img5 from '../../assets/product-5.jpg'
import Img6 from '../../assets/product-6.jpg'
import OfferImg from '../../assets/offer.jpg'
import { Link } from 'react-router-dom'
import Contact from '../contact/page'

function Price() {
    return (
        <section className='container text-center my-10 xl:my-16'>
            <article className='text-center mx-10 capitalize'>

                <h5>new arrival </h5>
                <h2 className='py-3 text-xl xl:text-2xl'>discover the ltest additions at your top choise flower shop</h2>
                <p className='text-sm'>share some details here. this flexible section where you can  share anything you want.</p>

            </article>
            <div className="grid grid-cols-2 gap-5 mx-5 my-10 xl:grid-cols-5">
                <Card img={Img1} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                <Card img={Img2} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                <Card img={Img3} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                <Card img={Img4} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                <Card img={Img5} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                <Card img={Img6} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
            </div>
            <section>
                <div className='bg-red-950 w-11/12   h-auto  my-10 mx-auto'>

            <Banner
                img={OfferImg}
                alt={'offer img'}
                head="special offer"
                content="Your Floral Journey Begins Here: Get 20% Off Your First Order!"
                />
                </div>
                </section>
            <Item2 />
        </section>
    )
}



export function Card(props) {
    return (
        <>
            <section>
                <div className='container capitalize'>
                    <div className=' relative'>
                        <p className='text-sm absolute left-4 top-2 ring-2 px-3  rounded-lg' >sale</p>
                        <img src={props.img} alt={props.alt} />
                        <h6 className='my-1'>{props.name}</h6>
                        <h3>{props.title}</h3>
                        <div></div>
                        <p><del>${props.sub}</del> <strong> ${props.add}</strong></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export function Banner(props) {
    return (
        <section className='text-white py-10 px-3     xl:flex xl:itema-center'>

            <div> 
                <img src={props.img} alt={props.alt}  className='w-68 xl:w-1/2 h-80 xl:h-fit rounded-lg mx-auto'/>
            </div>
            <div className='py-4'>
                <h2 className='py-3 text-green-500 xl:text-xl'>{props.head}</h2>
                <h2 className='mb-6 xl:text-2xl py-1'>{props.content}</h2>
                <Link to={'/'} className='button capitalize'>shop now</Link>
            </div>
        </section>
    )
}

function Item2() {
    return (
        <>
            <section className='container xl:my-10'>
                <article className='text-center capitalize'>
                    <h5 className='text-sm xl:text-lg'>best selling </h5>
                    <h2 className='text-xl py-3 xl:text-2xl'>blossom with the best our top-selling flowers</h2>
                    <p>share some details here. this is flexible section where you share anything you want.</p>
                </article>
                <div className='my-10 grid grid-cols-2 mx-5 gap-4 xl:grid-cols-5'>
                    <Card img={Img1} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                    <Card img={Img2} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                    <Card img={Img3} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                    <Card img={Img4} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                    <Card img={Img5} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />
                    <Card img={Img6} alt='...' name='flower' title='custom floral designs' sub={127.00} add={86.00} />

                </div>
            </section>

        </>
    )
}
export default Price
