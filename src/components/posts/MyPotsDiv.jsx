import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyPotsDiv.css'; // Подключение дополнительного файла стилей

const MyPotsDiv = () => {
    return (
        <div className="container d-flex justify-content-around align-items-center my-pots-container">
            <div className="text-center my-pots-item">
                <div className="rounded overflow-hidden shadow my-pots-image-container d-flex align-items-center justify-content-center">
                    <img src="https://big-i.ru/upload/iblock/471/8xe3vim9p8f8ori1o3ert3tgts25ira9.jpg" alt="Service 1" className="img-fluid my-pots-image" />
                </div>
                <h3>Билл Гейтс</h3>
                <p>Лидеры изменились. Раньше вы могли быть немного более замкнутым, но сейчас вам нужно быть гораздо более открытым и готовым к сотрудничеству.</p>
            </div>

            <div className="text-center my-pots-item">
                <div className="rounded overflow-hidden shadow my-pots-image-container d-flex align-items-center justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/150px-Steve_Jobs_Headshot_2010-CROP2.jpg" alt="Service 2" className="img-fluid my-pots-image" />
                </div>
                <h3>Стив Джобс</h3>
                <p>"Инновации — это единственное, что разделяет лидеров от последователей."</p>
            </div>

            <div className="text-center my-pots-item">
                <div className="rounded overflow-hidden shadow my-pots-image-container d-flex align-items-center justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/150px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Service 3" className="img-fluid my-pots-image" />
                </div>
                <h3>Марк Цукерберг</h3>
                <p>Люди здесь не для того, чтобы следовать за тобой. Они здесь для того, чтобы вместе с тобой.</p>
            </div>
        </div>
    );
};

export default MyPotsDiv;
