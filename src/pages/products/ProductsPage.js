import { useQuery } from 'react-query';
import { getAllProductsRequest } from '../../apis/getAllProducts';
import ProductCard from '../../components/ProductCard';
import Skeleton from '../../components/Skeleton';

const ProductsPage = () => {

    const {isLoading, error, data} =useQuery("getAllProducts", getAllProductsRequest, {staleTime: 60000});

    return (
        <div className="card-wrapper flex flex-wrap justify-center items-center gap-10 my-10 mt-40">
            {isLoading && [0,1,2,3,4,5,6,7,8,9].map((index)=>(<Skeleton key={index} />))}
            {data?.map((product) => (
                <ProductCard id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} product={product} key={product.id}  />
            ))}
        </div>
    )
}

export default ProductsPage
