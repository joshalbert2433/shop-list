import axios from "axios";

const ShopAPI = axios.create({
    baseURL: import.meta.env.VITE_SHOP_URL + "/api",
})


export const getAllProducts = async () => {
    try {
        const res = await ShopAPI.get("/products")
        return res.data
    } catch (error) {
        console.log(error)
    }
}