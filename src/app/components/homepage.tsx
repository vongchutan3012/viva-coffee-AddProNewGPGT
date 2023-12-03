
import Image from 'next/image';

function HomePage(){
    return(
    <div>
        <div className='content'>
            <h1>Hãy chọn loại cà phê bạn muốn</h1>
        </div>
        <div className='container'>
            {/* box1 */}
            <div className="box">
                <h4 className="name"> Cappuccino</h4>
                <p className="price">
                    54.000
                </p>
                <div className="img">
                    <Image
                        src="/capuchino.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box2 */}
            <div className="box">
                <h4 className="name"> Espresso</h4>
                <p className="price">
                    49.000
                </p>
                <div className="img">
                    <Image
                        src="/espresso.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box3 */}
            <div className="box">
                <h4 className="name"> Ristretto</h4>
                <p className="price">
                    54.000
                </p>
                <div className="img">
                    <Image
                        src="/ristretto.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box4 */}
            <div className="box">
                <h4 className="name"> Affogato</h4>
                <p className="price">
                    54.000
                </p>
                <div className="img">
                    <Image
                        src="/affogato.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box5 */}
            <div className="box">
                <h4 className="name"> Piccolo Latte</h4>
                <p className="price">
                    98.000
                </p>
                <div className="img">
                    <Image
                        src="/piccolo.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box6 */}
            <div className="box">
                <h4 className="name"> Macchiato</h4>
                <p className="price">
                    $54
                </p>
                <div className="img">
                    <Image
                        src="/macchiato.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box7 */}
            <div className="box">
                <h4 className="name"> Mocha</h4>
                <p className="price">
                    $54
                </p>
                <div className="img">
                    <Image
                        src="/mocha.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>

            {/* box8 */}
            <div className="box">
                <h4 className="name">Coffee Latte</h4>
                <p className="price">
                    $54
                </p>
                <div className="img">
                    <Image
                        src="/mocha.png"
                        alt="Description of the image"
                        width={200} // Độ rộng của hình ảnh
                        height={200} // Chiều cao của hình ảnh
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default HomePage;