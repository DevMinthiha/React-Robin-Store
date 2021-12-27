import React from 'react'
import {TiStarHalfOutline} from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router'
import { addToCart } from '../redux/actions/cartActions'
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Swal from 'sweetalert2'


const ProductCard = ({id, image, title, price, rating, product}) => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const addToCartHandler = () => {
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success!',
            showConfirmButton: false,
            timer: 1000
          }).then( result => {
            dispatch(addToCart(id, product, price, 1));
          })  
    }

    return (
        
        <div className="card w-72 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-xl p-3 flex flex-col justify-center items-center shadow-lg transform hover:scale-105 transition duration-500 ease-linear">
            <div className="card-img my-3  overflow-hidden">
            <Link to={`/product/${id}`}><LazyLoadImage effect="blur" src={image} alt="" className="w-auto h-52 rounded-xl" /></Link>
            </div>
            <div className="card-body">
                <div className="card-title font-extrabold text-white my-3">{title.slice(0, 19)} . . .</div>
                <div className="price font-bold text-white">
                    <span className="mr-3">price</span>
                    <span className="">$-{price}</span>
                </div>
                <div className="rating inline-flex items-center">
                    <TiStarHalfOutline className="text-xl text-yellow-300" />
                    <span className="text-white font-bold">{rating}</span>
                </div>
                <div className="card-btn flex justify-center items-center gap-5">
                    <Link to={`/product/${id}`}>
                    <button className="btn bg-white text-2xl px-8 py-2 rounded-lg text-blue-500 shadow-lg flex items-center justify-center">
                        <AiFillEye />
                    </button>
                    </Link>
                    <button onClick={() => addToCartHandler()} className="btn bg-white text-2xl px-8 py-2 rounded-lg my-4 font-extrabold text-gray-600 shadow-lg flex items-center justify-center">
                    <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default ProductCard

