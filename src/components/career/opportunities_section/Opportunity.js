import React from 'react';
import { RombCheckIcon } from './icons';

const Opportunity = (props) => {
    return (
        <div className="opportunity">
            <RombCheckIcon />
            {props.children}
        </div>
    );
};

export default Opportunity;
