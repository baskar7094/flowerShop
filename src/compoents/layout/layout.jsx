import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>

            <nav className='flex justify-between items-center px-5 py-5  '>
                <Link to={'/'} className='text-2xl xl:text-4xl px-1 py-2 uppercase text-white font-bold'>flower shop</Link>
                <button className={`p-1 lg:hidden`}><img className='w-8' src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" /></button>
                <div className='hidden xl:flex mr-40 '>
                    <ul className='flex flex-grow gap-10 items-center 2 text-white '>
                        <li className='px-2 py-2 ' ><Link className=" capitalize xl:text-2xl " to='/'>home</Link></li>
                        <li className='px-2 py-2 ' ><Link className=" capitalize xl:text-2xl " to={'/about'}>about</Link></li>
                        <li className='px-2 py-2 ' ><Link className=" capitalize xl:text-2xl " to={'/shop'}>shop</Link></li>
                        <li className='px-2 py-2 ' ><Link className=" capitalize xl:text-2xl " to={'/contact'}>contact</Link></li>

                    </ul>
                <Link to={'/cart'} className={`p-1 ml-10 bg-slate-200 py-1 px-1 rounded-xl`}><img className='w-8 h-auto ' src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" /></Link>

                    <Outlet />
                </div>
            </nav>
        </div>
    )
}

export default Layout
