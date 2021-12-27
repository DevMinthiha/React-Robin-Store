import React from 'react'
import ReactPlayer from 'react-player'
import men from '../../image/men.jpg'
import women from '../../image/women.jpg'
import laptop from '../../image/laptop.jpeg'
import shopping from '../../image/shopping.mp4'
import { useQuery } from 'react-query'
import { peopleChoices } from '../../apis/peopleChoices'
import HomePageProdcutCard from '../../components/HomePageProdcutCard'
import { jeweleryRequest } from '../../apis/jeweleryRequest'
import { useNavigate } from 'react-router'
import Loading from '../../components/Loading/Loading'
import './homepage.css'

const HomePage = () => {
    // window.scrollTo(0, 0);

    const navigate = useNavigate();

    const {isLoading,data} =useQuery("peopleChoices", peopleChoices, {staleTime: 600000});
    const {isLoading : isJLoading,data : jData} =useQuery("jewelery", jeweleryRequest, {staleTime: 600000});

    const clickHandler = () => {
        navigate("/products");
    }


    return (
        <div className="mt-40 w-full min-h-screen flex justify-center">
            {isLoading && isJLoading && <Loading />}
            {data && jData && (
            <div className="w-9/12 flex flex-col justify-center">
            <div className="intro flex gap-11 flex-wrap items-center mb-20">
                <div className="right flex-1">
                <h1 className="text-3xl font-extrabold tracking-widest mb-5 text-blue-400">Welcome from <span className="text-gray-600 text-4xl ml-3">Robin</span><span className="text-red-400 text-4xl">Store</span> </h1>
                <p className="leading-8 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet, doloribus odio incidunt totam ipsa eius. Soluta ab beatae velit voluptatem porro praesentium quia. Praesentium magnam natus odiodelect vel magni accusamus, tempore aspernatur nesciunt, ut dolore. Voluptate accusamus accusantium inventoreet aliquid a tempore enim. Ab quam iure unde laboriosam, quae similique voluptatum quibusdam veniam.
                </p>
                <div className="flex gap-5 my-5">
                    <button onClick={() => clickHandler()} className="bg-gray-500 text-white px-8 rounded-lg py-2 shadow-lg font-bold">Shop Now</button>
                    <button className="bg-white text-gray-500 px-8 rounded-lg py-2 shadow-lg font-bold">Contact Us</button>
                </div>
                </div>
                <div className="left flex-1 hidden md:block">
                    <ReactPlayer url={shopping} muted={true} loop={true} playing={true}/> 
                </div>
            </div>

            <div className="top-category flex justify-center items-center flex-col my-20">
                <h1 className="text-3xl my-10 font-bold tracking-wider text-yellow-500">Top Categories</h1>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    <img src={men} className="w-96 h-auto" alt="" />
                    <img src={women} className="w-96 h-auto" alt="" />
                    <img src={laptop} className="w-96 h-auto" alt="" />
                </div>
            </div>

            <div className="people-choices flex flex-col justify-center items-center my-20">
                <h1 className="text-3xl my-10 font-bold tracking-wider text-indigo-500">People Choices</h1>
                <div className="flex gap-3 flex-wrap justify-center items-center">
                {data?.map(product => (
                    <HomePageProdcutCard id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} product={product} key={product.id} />
                ))}
                </div>
            </div>

            <div className="jwelery flex flex-col justify-center items-center my-20">
                <h1 className="text-3xl my-10 font-bold tracking-wider text-indigo-500">Jewels You Can Get</h1>
                <div className="flex gap-3 flex-wrap justify-center items-center">
                {jData?.map(product => (
                    <HomePageProdcutCard id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} product={product} key={product.id} />
                ))}
                </div>
            </div>

            <div className="contact my-20 flex flex-col justify-center items-center" id="contact">
                <h1 className="mb-10 text-3xl font-bold tracking-wider text-gray-700">Contact</h1>
                <div className="contact-form bg-gray-800 p-10 rounded-2xl bg-black w-full flex flex-wrap items-center justify-center gap-24">
                    <img className="w-auto h-96 rounded-xl" src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=" alt="" />
                    <form action="" className="w-96">
                        <div className="mb-8">
                            <label className="text-lg font-bold text-white" htmlFor="name">Name</label> <br />
                            <input type="text" name="" id="" className="w-full py-2 rounded-xl px-5" />
                        </div>
                        <div className="mb-8">
                            <label className="text-lg font-bold text-white" htmlFor="email">Email</label> <br />
                            <input type="email" name="" id="" className="w-full py-2 rounded-xl px-5" />
                        </div>
                        <div className="mb-8">
                            <label className="text-lg font-bold text-white" htmlFor="phone">Phone Number</label> <br />
                            <input type="number" name="" id="" className="w-full py-2 rounded-xl px-5" />
                        </div>
                        <div className="mb-8">
                            <label className="text-lg font-bold text-white" htmlFor="name">Message</label> <br />
                            <textarea name="" id="" cols="30" rows="5" className="w-full px-5"></textarea>
                        </div>
                        <div className="mb-8">
                            <button className="w-full bg-info text-white py-2 rounded-xl font-extrabold tracking-widest">SEND</button>
                        </div>
                    </form>
                </div>
            </div>

            </div>
            )}

        </div>
    )
}

export default HomePage
