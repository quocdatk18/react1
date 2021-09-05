import axios from 'axios';

const url = "http://localhost:3002/products";

export const getProducts = async () => {
    return await axios.get(url);
}