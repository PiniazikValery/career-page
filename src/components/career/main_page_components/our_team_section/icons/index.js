import React from 'react';

export const RightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 70 70">
            <defs>
                <filter id="Ellipse_7" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodOpacity="0.102" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Стрелка" transform="translate(1400 1340) rotate(180)">
                <g transform="matrix(-1, 0, 0, -1, 1400, 1340)" filter="url(#Ellipse_7)">
                    <circle id="Ellipse_7-2" data-name="Ellipse 7" cx="26" cy="26" r="26" transform="translate(61 58) rotate(180)" fill="#fff" />
                </g>
                <g id="baseline-arrow_forward-24px" transform="translate(1353 1296)">
                    <path id="Path_374" data-name="Path 374" d="M24,0H0V24H24Z" fill="none" />
                    <path id="Path_375" data-name="Path 375" d="M12,4l1.41,1.41L7.83,11H20v2H7.83l5.58,5.59L12,20,4,12Z" fill="#666" />
                </g>
            </g>
        </svg>

    );
};

export const LeftArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 70 70">
            <defs>
                <filter id="Ellipse_7" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodOpacity="0.102" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Стрелка" transform="translate(-1330 -1276)">
                <g transform="matrix(1, 0, 0, 1, 1330, 1276)" filter="url(#Ellipse_7)">
                    <circle id="Ellipse_7-2" data-name="Ellipse 7" cx="26" cy="26" r="26" transform="translate(9 6)" fill="#fff" />
                </g>
                <g id="baseline-arrow_forward-24px" transform="translate(1353 1296)">
                    <path id="Path_374" data-name="Path 374" d="M24,0H0V24H24Z" fill="none" />
                    <path id="Path_375" data-name="Path 375" d="M12,4l1.41,1.41L7.83,11H20v2H7.83l5.58,5.59L12,20,4,12Z" fill="#666" />
                </g>
            </g>
        </svg>

    );
};
