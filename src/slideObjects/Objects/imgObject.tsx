// import React from "react";
// import styles from '../../App.module.css';
// import { NodeType, AppType } from "../../types/types";
// import { ImgObject } from "../../types/types";
// import { connect } from 'react-redux';
// import { resizeNode } from "../../actions/actionsCreators";
// import { changeSelectedObject } from "../../actions/actionsCreators";
// import { moveItem } from "../../actions/actionsCreators";

// interface imgProps{
//     x: number;
//     y: number;
//     kWidth: number,
//     kHeight: number,
//     src: string,
//     resizeNode: (width: number, height: number) => void,
//     changeSelectedObject: (id: string, type: NodeType) => void,
//     moveItem: (x: number, y: number) => void;
// }

// function ImgObject(props: imgProps){
//     return(
//         <img 
//             className={styles.Object}
//             style = {{
//                 top: props.x, 
//                 left: props.y,
//                 width: props.kWidth,
//                 height: props.kHeight
//             }}
//             src={props.src} 
//             alt=""
//             />
//     );
// }

// interface ImgOwnProps {
//     node: ImgObject;
//     style: React.CSSProperties;
//     kWidth: number;
//     kHeight: number;
//     choosed: boolean;
// }

// const mapStateToProps = (state: AppType, ownProps: ImgOwnProps) => {
//     return ownProps;
// }

// const mapDispatchToProps = {
//     resizeNode,
//     changeSelectedObject,
//     moveItem
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ImgObject);

import React from 'react';
import useDragResize from './useDragResize';
import styles from './Object.module.css';
import { AppType, ImgObject, NodeType } from '../../types/types';
import { resizeNode, changeSelectedObject, moveItem } from '../../actions/actionsCreators';
import { connect } from 'react-redux';

interface ImgProps {
    node: ImgObject;
    style: React.CSSProperties;
    kWidth: number;
    kHeight: number;
    choosed: boolean;
    resizeNode: (width: number, height: number) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

function Img(props: ImgProps) {
    const el = React.useRef<HTMLDivElement>(null);
    const resizeIconRef = React.useRef<SVGSVGElement>(null);

    const refs = useDragResize({
        obj: el,
        resizeIcon: resizeIconRef,
        x: props.node.positionTopLeft.x,
        y: props.node.positionTopLeft.y,
        kWidth: props.kWidth,
        kHeight: props.kHeight,
        id: props.node.id,
        choosed: props.choosed,
        width: props.node.width,
        height: props.node.height,
        squareResize: true,
        type: 'img',
        resizeNode: props.resizeNode,
        changeSelectedObject: props.changeSelectedObject,
        moveItem: props.moveItem
    });


    let style = props.style;
    if (props.kWidth !== 1) {
        style = {
            ...style,
            border: 0
        }
    }

    const size = refs.sizeRef;

    const width = size.current.width / props.kWidth + 'px';
    const height = size.current.height / props.kHeight + 'px';


    return (
        <div ref={el} className={styles.paddedObjectBlock} style={style}>
            <svg
                ref={resizeIconRef}
                className={styles.resizeIcon}
                width={11}
                height={11}
                style={
                    props.choosed ? { display: 'block' } : { display: 'none' }
                }
            >
                <circle
                    cx={5.5}
                    cy={5.5}
                    stroke={props.style.borderColor}
                    r={5}
                    fill={props.style.borderColor}
                ></circle>
            </svg>
            <img
                style={{width: width, height: height}}
                key={props.node.id}
                src={props.node.path}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    props.changeSelectedObject(props.node.id, props.node.type);
                }}
                alt=''
            ></img>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Img);
