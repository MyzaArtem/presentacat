import React from 'react';

interface CircleProps {
    kWidth: number;
    kHeight: number;
    borderColor: string
}

function Circle(props: CircleProps) {

    return (
            <svg width={props.kWidth} height={props.kHeight}>
                <circle
                    cx={Math.round(props.kWidth/2)}
                    cy={Math.round(props.kHeight/2)}
                    stroke={props.borderColor}
                    r={Math.round(props.kWidth/2-4)}
                    fill={props.borderColor}
                >
                </circle>
            </svg>
    );
}

export default Circle;