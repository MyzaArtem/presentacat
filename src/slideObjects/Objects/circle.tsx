import React from 'react';
import styles from '../../App.module.css';

interface CircleProps {
    x: number;
    y: number;
    kWidth: number;
    kHeight: number;
    borderColor: string;
    resizeNode: (width: number, height: number) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

function Circle(props: CircleProps) {

    return (
            <svg className={styles.Object} style = {{top: props.x, left: props.y}} width={props.kWidth} height={props.kHeight}>
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

interface CircleOwnProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

export default Circle;