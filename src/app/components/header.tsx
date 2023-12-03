import Navigation from "./header";
import Link from 'next/link';

function Header() {


    return (
        <div className="header">
            <div className="header-main">
                {/* Name  */}
                <label className="viva"> Viva Coffee</label>

                {/* Search Input */}
                <div id="search">
                    <input type="text" className="search-inp" />
                    <button className="search-btn">Search</button>
                </div>

                {/* Navigation */}
                <ul className="ul">
                    <li className="li"><a className="nav-link" href="">Về chúng tôi</a></li>
                    <li className="li"><a className="nav-link" href="">Thực đơn</a></li>
                    <li className="li"><a className="nav-link" href="">Các món</a></li>
                    <li className="li"><a className="nav-link" href="">Liên hệ</a></li>
                    <li className="li"><a className="nav-link" href="/login">Đăng Nhập</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Header;