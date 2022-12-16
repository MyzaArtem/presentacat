import React from 'react';
import { Slide } from '../types';
import Circle from './Objects/circle';
import Rectangle from './Objects/rectangle';
import Triangle from './Objects/triangle';
import ImgObject from './Objects/imgObject';
import TextObject from './Objects/textObject'

export default function getObjects(
    slide: Slide,
    miniature: boolean
) {

    return slide.elementList.map((node, index) => {

        let width = miniature ? Math.round(node.width/4) : node.width;
        let height = miniature ? Math.round(node.height/5) : node.height;
        

        if (node.type === 'text') {
            return (
                <TextObject
                    kWidth={width}
                    kHeight={height}
                    fontFamily={node.fontFamily}
                    fontColor={node.fontColor}
                    fontSize={miniature ? Math.round(node.fontSize/4) : node.fontSize}
                    fontWeight={node.fontWeight}
                    underline={node.underline}
                    data={node.data}
                />

            );
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return (
                <Circle
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={index}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return (
                <Rectangle
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={index}
                />
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return (
                <Triangle
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={index}
                />
            );
        }
        if (node.type === 'img') {
            return (
                <ImgObject
                    key={index}
                    kWidth={width}
                    kHeight={height}
                    src={node.path}
                />
            );
        }
        throw new Error('Unexpected type');
    });
}
