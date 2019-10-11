import React from 'react';

export const LocationPoint = () => {
    return (
        <svg id="outline-place-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Path_619" data-name="Path 619" d="M0,0H24V24H0Z" fill="none" />
            <path id="Path_620" data-name="Path 620" d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2ZM7,9A5,5,0,0,1,17,9c0,2.88-2.88,7.19-5,9.88C9.92,16.21,7,11.85,7,9Z" fill="#333" />
            <circle id="Ellipse_37" data-name="Ellipse 37" cx="2.5" cy="2.5" r="2.5" transform="translate(9.5 6.5)" fill="#333" />
        </svg>
    );
};

export const UnselectedDot = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="Ellipse_17" data-name="Ellipse 17" fill="none" stroke="#fff" strokeWidth="2">
                <circle cx="6" cy="6" r="6" stroke="none" />
                <circle cx="6" cy="6" r="5" fill="none" />
            </g>
        </svg>
    );
};

export const SelectedDot = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="6" cy="6" r="6" fill="#fff" />
        </svg>
    );
};
