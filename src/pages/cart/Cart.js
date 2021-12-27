import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdDelete} from 'react-icons/md'
import { addToCart, cartEmpty, removeFromCart } from '../../redux/actions/cartActions';
import {AiFillDollarCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';

const Cart = () => {
    const {cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const removeFromCartHandler = (id) => dispatch(removeFromCart(id));
    const decrease = (item) => {
        if(item.qty > 1) {
            dispatch(addToCart(item.productId, item.product, item.price, item.qty - 1));
        }
    }
    const increase = (item) => {
        dispatch(addToCart(item.productId, item.product, item.price, item.qty + 1));
    }

    const itemsPrice = cartItems.reduce((a, c) => {
        return a + c.price * c.qty;
    }, 0);

    const discountPrice = itemsPrice > 500 ? itemsPrice * (10/100) : 0;

    const taxPrice = itemsPrice * (5 / 100);

    const totalPrice = itemsPrice - discountPrice + taxPrice + 10;

    const cartClearHandler = () => {
        dispatch(cartEmpty());
    }

    const alert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order Success',
            text: 'Thanks for shopping with us :)',
            confirmButtonText: 'Go Shopping',
            // showConfirmButton: 'Go Shopping',
            // timer: 1500
          }).then( result => {
            dispatch(cartEmpty());
            navigate("/products");
            window.scrollTo(0, 0);
          })  
    };

    return (
        <div className="cart-wrapper mt-30 min-h-screen flex justify-center items-center flex-col py-40">
            {cartItems.map((item, index) => (
            <div key={index} className="carts flex flex-wrap items-center bg-white w-7/12 justify-center lg:justify-between items-center p-20 h-50 rounded-3xl my-5 shadow-xl text-left">
                <div className="">
                    <img src={item.product.image} className="w-auto h-40" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-sm font-extrabold text-gray-600 my-5 lg:my-2">{item.product.title}</h1>
                    <h2 className="text-right text-lg text-gray-700 font-bold"><span className="text-yellow-500">Total Price</span> <AiFillDollarCircle className="inline text-2xl text-yellow-500"/> {item.price * item.qty}</h2>
                </div>
                <div className="flex justify-center items-center mt-10 xl:mt-0">
                    <div className="flex justify-center items-center">
                        <button onClick={()=>decrease(item)} className="bg-blue-500 px-2 text-white rounded-full">-</button>
                        <p className="mx-5 font-extrabold text-yellow-500">{item.qty}</p>
                        <button onClick={()=>increase(item)} className="bg-green-500 px-2 text-white rounded-full">+</button>       
                    </div>
                    <button onClick={() => removeFromCartHandler(item.product.id)} className="ml-6 text-3xl text-red-500"><MdDelete /></button>
                </div>
            </div>
            ))}
            {cartItems.length === 0 && <h1 className="text-xl text-center text-gray-500 font-extrabold tracking-wider">Your Cart is Empty! <Link to="/products" className="text-info">Go Shopping</Link> </h1>}
            <div className="bg-white flex flex-col justify-center items-center py-5 px-10 lg:px-20 my-10 rounded-2xl shadow-xl">
                <h1 className="text-md text-secondary">Thanks for shopping with us. Here's your cart!</h1>
                <button onClick={() => cartClearHandler()} className="text-sm pt-3 text-red-400">Clear Your Cart</button>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 bg-white p-10 rounded-3xl">
                <h1 className="text-3xl font-extrabold description tracking-widest text-yellow-500 uppercase">Order Summary</h1>
                <div className="mt-5 text-gray-600 font-semibold">
                    <div className="flex w-80 justify-between items-center text-xl py-5">
                        <h2>Items Price</h2>
                        <p>${itemsPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex w-80 justify-between items-center text-xl py-5">
                        <h2>Discount Price</h2>
                        <p>${discountPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex w-80 justify-between items-center text-xl py-5">
                        <h2>Tax Price</h2>
                        <p>${taxPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex w-80 justify-between items-center text-xl py-5">
                        <h2>Delivery Price</h2>
                        <p>$10</p>
                    </div>
                    <hr className="bg-gray-500 w-full line my-10" />
                    <div className="flex w-80 justify-between items-center text-xl">
                        <h2 className="text-2xl font-bold text-yellow-500">Total Price</h2>
                        <p className="flex items-center"><AiFillDollarCircle className="inline text-3xl text-yellow-500"/>{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <button disabled={cartItems.length <= 0} onClick={() => alert()} className="bg-yellow-500 text-white font-extrabold rounded-lg shadow-xl mt-10 w-full py-1 text-xl">Checkout Now</button>
            </div>
        </div>
    )
}

export default Cart
