import React from "react";

interface triangleProps{
    kWidth: number,
    kHeight: number,
    borderColor: string,
}


function Triangle(props: triangleProps){
    const points = '0,' + props.kHeight + ' ' + props.kWidth / 2 + ', 0 ' + props.kWidth + ',' + props.kHeight; 
    
    return(
        <svg width={props.kWidth} height = {props.kHeight}>
            <polygon points={points}
            fill={props.borderColor}/>
        </svg>
    );
}

export default Triangle;



