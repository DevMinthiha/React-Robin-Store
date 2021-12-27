import React from 'react'
import { Link } from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {BiCategoryAlt} from 'react-icons/bi'
import {FaShoppingCart} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const toggle = (collapseId) =>{
        document.getElementById(collapseId).classList.toggle('hidden')
        document.getElementById(collapseId).classList.toggle('block')
    }

    const {cartItems} = useSelector(state => state.cart);

    return (
        <nav className="flex justify-around items-center bg-gray-900 p-4 flex-wrap text-white shadow-md fixed top-0 w-full z-10">
            <div className="">
                <h1 className="text-2xl font-extrabold tracking-widest">
                    <span className="">Robin</span>
                    <span className="text-red-400">Store</span>
                </h1>
            </div>
            <button onClick={()=>{toggle('navigation')}} className="inline-flex md:hidden ml-auto">
                <GiHamburgerMenu />
            </button>
            <div className="hidden md:flex-grow md:inline-flex w-full md:w-auto" id="navigation">
                <ul className="md:inline-flex md:flex-row md:ml-auto">
                    <li className="md:inline-flex md:w-auto px-0 py-2 md:px-10 group relative mt-5 md:mt-0">
                        <Link to="/" className="inline-flex items-center justify-center">
                            <ImHome className="h-8 w-8 mx-auto shadow-lg bg-gray-600 p-2 rounded-xl hover:bg-blue-300 transition duration-300 ease-linear transform hover:scale-110" />
                            <p className="opacity-0 group-hover:opacity-100 font-extrabold text-xs absolute top-10 transition duration-500 ease-linear text-white absolute top-10">Home</p>
                        </Link>
                    </li>
                    <li className="md:inline-flex md:w-auto px-0 py-2 md:px-10 group relative mt-5 md:mt-0">
                        <Link to="/products" className="inline-flex items-center justify-center">
                            <BiCategoryAlt className="h-8 w-8 mx-auto shadow-lg bg-gray-600 p-2 rounded-xl hover:bg-blue-300 transition duration-300 ease-linear transform hover:scale-110" />
                            <p className="opacity-0 group-hover:opacity-100 font-extrabold text-xs absolute top-10 transition duration-500 ease-linear text-white absolute top-10">Products</p>
                        </Link>
                    </li>
                    <li className="md:inline-flex md:w-auto px-0 py-2 md:px-10 mt-5 md:mt-0">
                        <Link to="/cart" className="inline-flex items-center justify-center">
                        <FaShoppingCart className="h-8 w-8 mx-auto shadow-lg bg-gray-600 p-2 rounded-xl hover:bg-blue-300 transition duration-300 ease-linear transform hover:scale-110" />
                        <p className="text-xs font-extrabold bg-green-500 mx-auto px-1 rounded text-center"><span>{cartItems?.length}</span></p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

