import { useState } from "react";

export type OnSubmitProductHandler = (fields: any) => void;

export interface ProductFormProps {
    onSubmit?: OnSubmitProductHandler;
}

function ProductForm({ onSubmit }: ProductFormProps) {
    const [fields, setFields] = useState<any>({});

    function onFieldChanged({ target }: any) {
        const name: string = target.name;
        const value: any = target.value;
        setFields({ ...fields, [name]: value });
    }

    function lower_onSubmit(event: any) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(fields);
        }
        setFields({});
    }

    return (
        <div>
            <form onSubmit={lower_onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Mã sản phẩm:</label>
                            </td>
                            <td>
                                <input type="text" name="productCode" value={(fields.productCode ? fields.productCode : "")} onChange={onFieldChanged} required={true} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Tên sản phẩm: </label>
                            </td>
                            <td>
                                <input type="text" name="productName" value={(fields.productName ? fields.productName : "")} onChange={onFieldChanged} required={true} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Giá sản phẩm: </label>
                            </td>
                            <td>
                                <input type="number" name="productPrice" value={(fields.productPrice ? fields.productPrice : "")} onChange={onFieldChanged} required={true} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Loại sản phẩm: </label>
                            </td>
                            <td>
                                <select name="productType" value={(fields.productType ? fields.productType : "")} onChange={onFieldChanged} required={true}>
                                    <option value="none"></option>
                                    <option value="Trà">Trà</option>
                                    <option value="Cà Phê">Cà Phê</option>
                                    <option value="Đá Xay">Đá Xay</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Số lượng: </label>
                            </td>
                            <td>
                                <input type="number" name="quantity" value={(fields.quantity ? fields.quantity : "")} onChange={onFieldChanged} required={true} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Mô tả: </label>
                            </td>
                            <td>
                                <textarea name="description" value={(fields.description ? fields.description : "")} onChange={onFieldChanged} required={true} />
                            </td>
                        </tr> 

                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <input type="submit" value="Thêm" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default ProductForm;
