import React, { useState } from 'react';
import { LeftArrow, RightArrow } from './icons';

const ImageSlider = () => {

    const [images, setImages] = useState([
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
        'https://sun9-47.userapi.com/c851224/v851224398/16bd55/IqK_411bd5g.jpg',
    ]);

    const [selectedItem, setItem] = useState(Math.round(images.length / 2));

    const clickLeftArrow = () => {
        setItem(selectedItem - 1);
    };

    const clickRightArrow = () => {
        setItem(selectedItem + 1);
    };

    return (
        <div className="slider">
            <div className="content" style={
                {
                    width: 240 * images.length
                }
            }>
                <div className="slides">
                    <div onClick={clickLeftArrow} className="leftArrow"><LeftArrow /></div>
                    <div onClick={clickRightArrow} className="rightArrow"><RightArrow /></div>
                    <div className="slides-content" style={{
                        left: (-240 * (selectedItem - 1)) - 120
                    }}>
                        {images.map((image, index) => {
                            return <img key={index} alt={`img-${index}`} src={image} className={index + 1 !== selectedItem ? 'gray-img' : ''} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ImageSlider;
