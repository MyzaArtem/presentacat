import React from "react";

interface rectangleProps{
    rWidth: number,
    rHeight: number,
    borderColor: string
}

function Rectangle(props: rectangleProps){
    return(
        <svg width={props.rWidth} height = {props.rHeight}>
            rx = {props.rWidth}
            ry = {props.rHeight}
            stroke = {props.borderColor}
            fill = {props.borderColor}
        </svg>
    );
}

export default Rectangle; 
