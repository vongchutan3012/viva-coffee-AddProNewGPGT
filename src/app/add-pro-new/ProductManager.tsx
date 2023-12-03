'use client'
import { useState } from "react";
import Product from "./Product";
import ProductForm, { OnSubmitProductHandler } from "./ProductForm";
import ProductTable from "./ProductTable";

function ProductManager() {
    const [productList, setProductList] = useState<Product[]>([]);

    const onSubmit: OnSubmitProductHandler = function (fields: any): void {
        const product: Product = {
            productCode: fields.productCode,
            productName: fields.productName,
            productPrice: fields.productPrice,
            productType: fields.productType,
            quantity: fields.quantity,
            description: fields.description
        };


        setProductList([...productList, product]);
        
    }

    

    return (
        <div>
            <ProductForm onSubmit={onSubmit} />
            <ProductTable productList={productList} />
        </div>
    )
}

export default ProductManager;
