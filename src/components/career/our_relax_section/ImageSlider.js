import React, { useState, useEffect } from 'react';
import { UnselectedDot, SelectedDot } from './icons';

const ImageSlider = (props) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const [images, loadImages] = useState([]);

    const changeSlide = (index) => {
        setSelectedImage(index);
    };

    useEffect(() => {
        let resultImages = [];
        props.images.forEach(image => {
            let newImg = new Image();
            newImg.src = image.imgSrc;
            resultImages.push(newImg);
        });
        loadImages(resultImages);
    }, [props.images]);

    return (
        <div className={`image-slider${props.mobile ? ' mobile' : ''}`}>
            {images.map((image, index) => {
                if (index === selectedImage) {
                    return <img key={index} alt={`img-${index}`} src={image.src} />
                } else {
                    return undefined;
                }
            })}
            <div className="dots-placeholder">
                <div className="dots">
                    {images.map((image, index) => {
                        if (index === selectedImage) {
                            return <div key={index} className="dot">
                                <SelectedDot />
                            </div>;
                        } else {
                            return <div key={index} className="dot" onClick={() => changeSlide(index)}>
                                <UnselectedDot />
                            </div>;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
