import React from "react";
import styles from '../../App.module.css';
import { NodeType, Presentation } from "../../types";
import { FigureObject } from "../../types";
import { connect } from 'react-redux';

interface rectangleProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    borderColor: string,
    resizeNode: (width: number, height: number) => void,
    changeSelectedObject: (id: string, type: NodeType) => void,
    moveItem: (x: number, y: number) => void,
}

function Rectangle(props: rectangleProps){
    return(
        <svg className={styles.Object} style = {{top: props.x, left: props.y}} width={props.kWidth} height = {props.kHeight}>
            <rect
                width={props.kWidth}
                height={props.kHeight}
                stroke = {props.borderColor}
                fill = {props.borderColor}
            >
            </rect>
        </svg>
    );
}

interface RectOwnProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapStateToProps = (state: Presentation, ownProps: RectOwnProps) => {
    return ownProps;
}

const mapDispatchToProps = {
    resizeNode,
    changeSelectedObject,
    moveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Rectangle);
