import React from "react";

interface triangleProps{
    tWidth: number,
    tHeight: number,
    points: {
        pointX: string,
        pointY: string,
        pointZ: string,
    },
    borderColor: string,
}



function Triangle(props: triangleProps){
    return(
        <svg width={props.tWidth} height = {props.tHeight}>
            <polygon points={`${props.points.pointX} ${props.points.pointY} ${props.points.pointZ}`} 
            fill="violet" stroke="purple" stroke-width="5"/>
        </svg>
    );
}

export default Triangle;



