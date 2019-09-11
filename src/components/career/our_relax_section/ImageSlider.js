import React, { useState } from 'react';
import { UnselectedDot, SelectedDot } from './icons';

const ImageSlider = (props) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const changeSlide = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="image-slider">
            {props.images.map((image, index) => {
                if (index === selectedImage) {
                    return <img key={index} alt={`img-${index}`} src={image.imgSrc} />
                } else {
                    return undefined;
                }
            })}
            <div className="dots-placeholder">
                <div className="dots">
                    {props.images.map((image, index) => {
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
