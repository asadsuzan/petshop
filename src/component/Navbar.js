import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/image/logo.png'
import { getFromLocalStore } from '../helper/helper';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart.value)
    const [cartNumber, setCartNumber] = useState(0)

    useEffect(() => {
        const storedCart = getFromLocalStore()
        let shoppingCart = []
        const loadCartData = () => {
            if (storedCart) {
                for (const id in storedCart) {
                    shoppingCart.push(id)
                }
                setCartNumber(shoppingCart.length)
            }
        }
        loadCartData()
    }, [cart])

    let menuItems = <>

        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/shop'>SHOP</Link></li>
        <li><Link to='/blog'>BLOG</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
    </>

    return (
        <div>
            <div class="navbar  bg-primary">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-white text-xl"><img src={logo} alt="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white p-0">
                        {menuItems}
                    </ul>
                </div>


                {/* dropdown cart start here */}

                <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-secondary btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span class="badge badge-sm indicator-item">{cartNumber}</span>
                        </div>
                    </label>
                    <div tabIndex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div class="card-body">
                            <span class="font-bold text-lg"></span>
                            <button className='btn btn-secondary' onClick={() => navigate('/cart')}>View Cart</button>
                            <div class="card-actions">
                                {/* <Link className='btn bg-primary btn-block text-white font-bold' to={`/cartview/${id}`}>View Cart</Link> */}

                            </div>
                        </div>
                    </div>
                </div>



                {/* log out */}


                <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='img' />
                        </div>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>



                {/* search */}
                <div class="">
                    <button class="btn btn-secondary btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                </div>

            </div>




        </div>
    );
};

export default Navbar;