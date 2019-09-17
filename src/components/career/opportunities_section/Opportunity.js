import React from 'react';
import { RombCheckIcon } from './icons';

const Opportunity = (props) => {
    return (
        <div className={`opportunity${props.mobile ? ' mobile' : ''}`}>
            {props.mobile ? undefined : <RombCheckIcon />}
            {props.children}
        </div>
    );
};

export default Opportunity;
