import { conn } from "../config/dbConnection";
import { CreateProduct } from "../types/product.types";



export const getAllProducts = async () => {
  try {
    const [results] = await (await conn).query(
      `SELECT p.product_id, p.name, pc.description AS category, p.notes, p.stocks, p.image_url FROM products AS p 
      INNER JOIN product_category AS pc ON p.category_id = pc.product_category_id`
    );
    return results
  } catch (err) {
    console.log(err);
  }

}

export const getProductById = async (id: string) => {
  try {
    const [results] = await (await conn).query(
      `SELECT p.product_id, p.name, pc.description AS category, p.notes, p.stocks, p.image_url FROM products AS p 
      INNER JOIN product_category AS pc ON p.category_id = pc.product_category_id WHERE p.product_id = ?`, [id]
    );
    return results
  } catch (err) {
    console.log(err);
  }
}


export const getProductCategories = async () => {
  try {
    const [results] = await (await conn).query(
      'SELECT * FROM product_category'
    );

    return results
  } catch (err) {
    console.log(err);
  }
}

export const createProduct = async (data: CreateProduct) => {
  const { stocks, category, image_url, name, notes } = data

  try {
    const [results] = await (await conn).query(
      'INSERT INTO products (name, stocks, category, notes, image_url) VALUES (?, ?, ?, ?, ?)', [name, stocks, category, notes, image_url]
    );

    return results
  } catch (err) {
    console.log(err);
  }
}

