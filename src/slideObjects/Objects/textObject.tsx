import React from "react";

interface textProps{
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    underline: boolean,
    data: string,
    kWidth: number,
    kHeight: number
}

function TextObject(props: textProps){
    return(
        <div style={{
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
        </div>
    );
}

export default TextObject; 
