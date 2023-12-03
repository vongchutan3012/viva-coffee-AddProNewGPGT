import Product from "./Product";

export interface ProductTableProps {
    productList: Product[];
}

function ProductTable({ productList }: ProductTableProps) {
    return (
        <div>
            <table cellSpacing={10} border={1}>
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>

                <tbody>
                    {productList.map((product: Product, index: number) => (
                        <ProductRow key={index} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

interface ProductRowProps {
    product: Product;
}

function ProductRow({ product }: ProductRowProps) {
    return (
        <tr>
            <td>{product.productCode}</td>
            <td>{product.productName}</td>
            <td>{product.productPrice}</td>
            <td>{product.productType}</td>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
        </tr>
    );
}

export default ProductTable;
