import React from "react";

interface imgProps{
    kWidth: number,
    kHeight: number,
    src: string
}

function ImgObject(props: imgProps){
    return(
        <img 
            src={props.src} 
            alt=""
            style={{
                width: props.kWidth,
                height: props.kHeight
            }}/>
    );
}

export default ImgObject; 
