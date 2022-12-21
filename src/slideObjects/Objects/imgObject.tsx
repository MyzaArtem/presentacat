import React from "react";
import styles from '../../App.module.css';
import { NodeType, AppType } from "../../types";
import { ImgObject } from "../../types";
import { connect } from 'react-redux';
import { resizeNode } from "../../actions/actionsCreators";
import { changeSelectedObject } from "../../actions/actionsCreators";
import { moveItem } from "../../actions/actionsCreators";

interface imgProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    src: string,
    resizeNode: (width: number, height: number) => void,
    changeSelectedObject: (id: string, type: NodeType) => void,
    moveItem: (x: number, y: number) => void;
}

function ImgObject(props: imgProps){
    return(
        <img 
            className={styles.Object}
            style = {{
                top: props.x, 
                left: props.y,
                width: props.kWidth,
                height: props.kHeight
            }}
            src={props.src} 
            alt=""
            />
    );
}

interface ImgOwnProps {
    node: ImgObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
}

const mapStateToProps = (state: AppType, ownProps: ImgOwnProps) => {
    return ownProps;
}

const mapDispatchToProps = {
    resizeNode,
    changeSelectedObject,
    moveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgObject);

