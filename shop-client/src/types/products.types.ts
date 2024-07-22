export interface Product {
    category: string
    items: Item[]
}

export interface Item {
    product_id?: number
    name?: string
    notes?: string
    stocks?: number
    image_url?: string
    category?: string
}
export interface Category {
    product_category_id?: number
    description?: string
    created_at?: Date
    updated_at?: Date

}
