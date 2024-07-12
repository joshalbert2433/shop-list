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
}
