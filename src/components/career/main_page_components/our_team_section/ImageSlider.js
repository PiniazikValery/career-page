import React, { useState, useEffect } from 'react';
import { LeftArrow, RightArrow } from './icons';

const ImageSlider = (props) => {

    const [overflow, setOverFlow] = useState([3, 3]);

    const [activeName, setName] = useState(undefined);

    const [activePosition, setPosition] = useState(undefined);

    const [selectedItem, setItem] = useState(Math.round(props.items.length / 2));

    useEffect(() => {
        let result = undefined;
        const divLeft = selectedItem % props.items.length;
        if (divLeft === 0) {
            result = props.items.length;
        } else {
            result = selectedItem % props.items.length;
        }
        if (divLeft < 0) {
            result = props.items.length + divLeft;
        }
        if (result > props.items.length) {
            result = props.items.length;
        }
        setName(props.items[result - 1].name);
        setPosition(props.items[result - 1].position)
    }, [props.items, selectedItem]);

    const clickLeftArrow = () => {
        let _overflow = overflow;
        _overflow[0] = Math.abs(Math.round(selectedItem / props.items.length) - props.items.length - 2);
        setOverFlow(_overflow);
        setItem(selectedItem - 1);
    };

    const clickRightArrow = () => {
        let _overflow = overflow;
        _overflow[1] = Math.round(selectedItem / props.items.length) + 2;
        setOverFlow(_overflow);
        setItem(selectedItem + 1);
    };

    const renderLeftOverflow = () => {
        let arrayOfOverflows = [];
        for (let i = 1; i <= overflow[0]; i++) {
            arrayOfOverflows.push(
                <div key={-props.items.length * i} className="slides-content" style={{
                    left: (-240 * (selectedItem - 1)) - 120 - (props.items.length * 240 * i)
                }}>
                    {props.items.map((image, index) => {
                        return <img key={index - props.items.length * i} alt={`img-${index}`} src={image.imgSrc} className={index + 1 !== (selectedItem % props.items.length === 0 ? props.items.length : selectedItem % props.items.length + props.items.length) ? 'gray-img' : ''} />
                    })}
                </div>
            );
        }
        return (
            arrayOfOverflows
        );
    }

    const renderRightOverflow = () => {
        let arrayOfOverflows = [];
        for (let i = 1; i <= overflow[1]; i++) {
            arrayOfOverflows.push(
                <div key={props.items.length * i} className="slides-content" style={{
                    left: (-240 * (selectedItem - 1)) - 120 + (props.items.length * 240 * i)
                }}>
                    {props.items.map((image, index) => {
                        return <img key={index + props.items.length * i} alt={`img-${index}`} src={image.imgSrc} className={index + 1 !== (selectedItem % props.items.length === 0 ? props.items.length : selectedItem % props.items.length) ? 'gray-img' : ''} />
                    })}
                </div>
            );
        }
        return (
            arrayOfOverflows
        );
    }

    return (
        <div className="slider">
            <div className={`content${props.mobile ? ' mobile' : ''}`} style={
                {
                    width: 240 * props.items.length
                }
            }>
                <div className="slides">
                    <div className="active-name">{activeName}</div>
                    <div className="active-position">{activePosition}</div>
                    <div onClick={clickLeftArrow} className={`leftArrow${props.mobile ? ' mobile' : ''}`}><LeftArrow /></div>
                    <div onClick={clickRightArrow} className={`rightArrow${props.mobile ? ' mobile' : ''}`}><RightArrow /></div>
                    {renderLeftOverflow()}
                    <div className="slides-content" style={{
                        left: (-240 * (selectedItem - 1)) - 120
                    }}>
                        {props.items.map((image, index) => {
                            return (
                                <img key={index} alt={`img-${index}`} src={image.imgSrc} className={index + 1 !== (selectedItem % props.items.length === 0 ? selectedItem : selectedItem % props.items.length) ? 'gray-img' : ''} />
                            );
                        })}
                    </div>
                    {renderRightOverflow()}
                </div>
            </div>
        </div>
    );
};


export default ImageSlider;
