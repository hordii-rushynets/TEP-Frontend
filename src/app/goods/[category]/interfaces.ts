import { DynamicFilterField } from "components/Filters/ProductsFilters";
import { Color, Material, Size } from "./page";

export interface FilterFields {
    colors: Color[];
    materials: Material[];
    sizes: Size[];
    filter_fields: DynamicFilterField[];
}