import React from "react";
import styles from '../../App.module.css';
import { NodeType, Presentation } from "../../types";
import { connect } from 'react-redux';

interface textProps{
    x: number;
    y: number;
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    underline: boolean,
    data: string,
    kWidth: number,
    kHeight: number,
    key: number,
    changeTextData: (data: string) => void,
    resizeNode: (width: number, height: number) => void,
    changeSelectedObject: (id: string, type: NodeType) => void,
    moveItem: (x: number, y: number) => void,
}

function TextObject(props: textProps){
    return(
        <textarea className={styles.Object} style={{
            top: props.x, 
            left: props.y,
            fontFamily: props.fontFamily,
            color: props.fontColor,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            width: props.kWidth,
            height: props.kHeight,
            textDecoration: props.underline ? 'underline' : '',
            overflow: 'hidden'
        }}>
            {props.data}
        </textarea>
    );
}

interface TextOwnProps {
    node: TextObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapDispatchToProps = {
    changeTextData,
    resizeNode,
    changeSelectedObject,
    moveItem
}

const mapStateToProps = (state: Presentation, ownProps: TextOwnProps) => {
    return ownProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(TextObject)

