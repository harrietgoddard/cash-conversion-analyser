import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ConversionPercentage = ({ test }) => {
    
    const value = test;
    
    return (
        <div 
            style={{width: 200, height: 200, margin: "auto"}}
            className="mt-5 mb-5"
        >
            <CircularProgressbar 
                value={ value } 
                maxValue={1} 
                text={`${value * 100}%`}
            />
        </div>
    );
};

export default ConversionPercentage;