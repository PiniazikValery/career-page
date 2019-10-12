import React from 'react';

const QuoteSection = (props) => {
    return (
        <div {...props}>
            <div className="quote">
                <div className="photo" />
                <div className="text">"Не выходи из комнаты, не совершай ошибку..."</div>
            </div>
        </div>
    );
};

export default QuoteSection;
