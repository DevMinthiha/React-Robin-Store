import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/ProductCard';
import { addToCart } from '../../redux/actions/cartActions';
import { getRelatedProducts, getSingleProduct } from '../../redux/actions/productActions';


const DetailPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {loading, product, error} = useSelector(state => state.product);
    const {products} = useSelector(state => state.relatedProducts);

    useEffect(()=>{
        // if(!product.category) {
        //     dispatch(getSingleProduct(id));
        //     window.scrollTo(0, 0);
        // }

        if(product.category) {
            dispatch(getRelatedProducts(product.category));
        }

    },[product.category]);
    
    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [])

    const addToCartHandler = () => {
        dispatch(addToCart(product.id, product, product.price, 1));
        navigate("/cart");
    }

    return (
        <div className="detail-wrapper min-h-screen flex flex-col justify-center items-center my-20 lg:my-0">
            {loading? (<Loading />) : (
            <div className="detail-card w-7/12 h-50 bg-white lg:flex lg:flex-wrap rounded-xl shadow-xl lg:pt-10 mt-20 lg:mt-40">
                <div className="left flex justify-center items-center md:flex-1">
                    <img src={product.image} className="h-80 w-auto" alt="" />
                </div>
                <div className="right mx-10 md:flex-1">
                    <h1 className="text-2xl font-extrabold mt-10">{product.title}</h1>
                    <p className="text-gray-500 font-semibold">Category - {product.category}</p>
                    <hr className="bg-gray-500 w-full line my-10" />
                    <p className="description tracking-wider text-gray-500">{product.description}</p>
                    <hr className="bg-gray-500 w-full line my-10" />
                    <p className="text-2xl font-bold text-yellow-500">${product.price}</p>
                    <div className="my-10 flex items-center justify-center gap-10 flex-wrap">
                        <button onClick={addToCartHandler} className="btn w-52 bg-gray-300 py-2 text-lg font-bold text-gray-700 rounded-xl shadow-lg">Add To Cart</button>
                        <button className="btn w-52 bg-gray-700 py-2 text-lg font-bold text-gray-300 rounded-xl shadow-lg">Buy Now</button>
                    </div>
                </div>
            </div>
            )}

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl mt-20 font-extrabold tracking-widest description text-gray-500">Related Products</h1>
                <div className="card-wrapper flex flex-wrap justify-center items-center gap-10 mt-5 mb-20">
                {products?.map((product) => (
                    <ProductCard id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} key={product.id}  />
                ))}
                </div>
            </div>

        </div>
    )
}

export default DetailPage
