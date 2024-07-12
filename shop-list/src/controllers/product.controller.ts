import { Request, Response } from "express";
import { createProduct, getAllProducts, getProductById, getProductCategories } from "../models/products.model";
import { HTTP_STATUS_CODES } from "../constants/statusCodes";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        //filter items to each category
        const groupedProducts = (products as any[]).reduce((acc, product) => {
            const { category, ...rest } = product;
            if (!acc[category]) {
                acc[category] = {
                    category: category,
                    items: []
                };
            }
            acc[category].items.push(rest);
            return acc;
        }, {});
        // convert object to array
        const result = Object.values(groupedProducts);

        res.status(HTTP_STATUS_CODES.OK).json(result);
    } catch (error: any) {
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send(error.toString());
    }
};

export const getProductCategory = async (req: Request, res: Response) => {
    try {
        const categories = await getProductCategories();
        res.status(HTTP_STATUS_CODES.OK).json(categories);
    } catch (error: any) {
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send(error.toString());
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await getProductById(id);
        res.status(HTTP_STATUS_CODES.CREATED).json(product);
    } catch (error: any) {
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send(error.toString());
    }
};

export const postProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = await createProduct(req.body)
        res.status(HTTP_STATUS_CODES.CREATED).json("Product Created")
    } catch (error: any) {
        res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send(error.toString());
    }

} 