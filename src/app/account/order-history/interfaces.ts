import { Color, Material, ProductVariant, Size } from "app/goods/[category]/page";

export interface Order {
    id: number;
    number: string;
    post_type: string;
    date: string;
    order_item: OrderItem[];
    status: string;
}

export interface OrderItem {
    id: number;
    product_variant: ProductVariant;
    quantity: number;
    color: Color;
    material: Material;
    size: Size;
}