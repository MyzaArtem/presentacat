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

    return slide.elementList.map((node, id) => {
        let width = miniature ? Math.round(node.width/4) : node.width;
        let height = miniature ? Math.round(node.height/5) : node.height;
        

        if (node.type === 'text') {
            return (
                <TextObject
                    x = {miniature ? Math.round(node.x/4) : node.x}
                    y = {miniature ? Math.round(node.y/5) : node.y}
                    kWidth={width}
                    kHeight={height}
                    fontFamily={node.fontFamily}
                    fontColor={node.fontColor}
                    fontSize={miniature ? Math.round(node.fontSize/4) : node.fontSize}
                    fontWeight={node.fontWeight}
                    underline={node.underline}
                    data={node.data}
                    key = {id}
                />

            );
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return (
                <Circle
                    x = {miniature ? Math.round(node.x/4) : node.x}
                    y = {miniature ? Math.round(node.y/5) : node.y}
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={id}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return (
                <Rectangle
                    x = {miniature ? Math.round(node.x/4) : node.x}
                    y = {miniature ? Math.round(node.y/5) : node.y}
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={id}
                />
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return (
                <Triangle
                    x = {miniature ? Math.round(node.x/4) : node.x}
                    y = {miniature ? Math.round(node.y/5) : node.y}
                    kWidth={width}
                    kHeight={height}
                    borderColor={node.strokeColor}
                    key={id}
                />
            );
        }
        if (node.type === 'img') {
            return (
                <ImgObject
                    x = {miniature ? Math.round(node.x/4) : node.x}
                    y = {miniature ? Math.round(node.y/5) : node.y}   
                    key={id}
                    kWidth={width}
                    kHeight={height}
                    src={node.path}
                />
            );
        }
        throw new Error('Unexpected type');
    });
}
