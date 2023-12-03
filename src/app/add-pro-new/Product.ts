interface Product {
    productCode: string;
    productName: string;
    productPrice: number;
    productType: "Trà" | "Cà Phê" | "Đá Xay";
    //productType: string;
    quantity: number;
    description: string;
}

export default Product;
