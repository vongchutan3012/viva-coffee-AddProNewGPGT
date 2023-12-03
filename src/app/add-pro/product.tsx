export default function Product() {
    return (
        <main className="container">
            <div className="signup-container">
                <h2>Thêm sản phẩm</h2>

                {/* Product ID */}
                <input className="proID inp" type="text" placeholder="Mã sản phẩm" required /><br />

                {/* Product Name */}
                <input className="namePro inp" type="text" placeholder="Tên sản phẩm" required /><br />

                {/* Price */}
                <input className="price inp" type="number" placeholder="Giá sản phẩm" required /><br />

                {/* Product Type */}
                <select name="productItem" className="proCom">
                    <option value="no">Loại sản phẩm</option>
                    <option value="tea">Trà</option>
                    <option value="coffee">Cà phê</option>
                    <option value="smoothy">Đá xay</option>
                </select><br />

                {/* Amount */}
                <input className="amount inp" type="number" placeholder="Số lượng" required /><br />


                <textarea className="productDescription" placeholder="Mô tả" required></textarea>

                {/* Choose File */}
                <input type="file" className="imageUpload inp" name="imageUpload" accept="image/*" /><br />

                <button className="button">Thêm sản phẩm</button><br />
            </div>
        </main>
    )
}