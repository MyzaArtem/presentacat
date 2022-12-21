import React from "react";
import styles from '../../App.module.css';
import { FigureObject, AppType} from "../../types";
import { NodeType } from "../../types";
import { connect } from 'react-redux';
import { resizeNode } from "../../actions/actionsCreators";
import { changeSelectedObject } from "../../actions/actionsCreators";
import { moveItem } from "../../actions/actionsCreators";

interface triangleProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    borderColor: string,
}


function Triangle(props: triangleProps){
    const points = '0,' + props.kHeight + ' ' + props.kWidth / 2 + ', 0 ' + props.kWidth + ',' + props.kHeight; 
    
    return(
        <svg className={styles.Object} style = {{top: props.x, left: props.y}} width={props.kWidth} height = {props.kHeight}>
            <polygon points={points}
            fill={props.borderColor}/>
        </svg>
    );
}

interface TriangOwnProps {
    node: FigureObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapStateToProps = (state: AppType, ownProps: TriangOwnProps) => {
    return ownProps;
};

const mapDispatchToProps = {
    resizeNode,
    changeSelectedObject,
    moveItem,
};

export default Triangle;



