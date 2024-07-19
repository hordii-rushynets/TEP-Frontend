import { Color, Material, ProductVariant, Size } from "app/goods/[category]/page";
import { DynamicFilterField } from "components/Filters/ProductsFilters";

export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    id: number;
    cart: number;
    color: Color;
    filter_field: DynamicFilterField[];
    material: Material;
    product_variants: ProductVariant;
    quantity: number;
    size: Size;
}