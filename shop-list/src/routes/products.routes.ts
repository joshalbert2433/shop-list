import { Request, Response, Router } from "express";
import { getProduct, getProductCategory, getProducts, postProduct } from "../controllers/product.controller";


const router = Router()

router.get("/", getProducts)
router.get("/categories", getProductCategory)
router.get("/:id", getProduct)

router.post("/", postProduct)



export { router };