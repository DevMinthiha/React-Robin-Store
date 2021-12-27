import axios from "axios";

export const jeweleryRequest = async() => {
    const {data} = await axios.get("https://fakestoreapi.com/products/category/jewelery");
    return data;
}