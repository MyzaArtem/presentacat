import React from 'react';
import { NodeType, SlideType } from '../types/types';
import Text from './Objects/textObject';
import Circle from './Objects/circle';
import Rectangle from './Objects/rectangle';
import Triangle from './Objects/triangle';
import Img from './Objects/imgObject';
import { getDefaultColor } from '../../src/functionts/functionts';


export default function getObjects(
    slide: SlideType,
    kWidth: number,
    kHeight: number,
    selectedId: string | null,
    changeSelectedObject: (id: string, type: NodeType) => void
) {
    return slide.objects.map((node, index) => {
        let style = {
            position: 'absolute',
            top: node.positionTopLeft.y / kHeight + 'px',
            left: node.positionTopLeft.x / kWidth + 'px',
            border: '2px solid transparent',
            // zIndex: node.zIndex
        } as React.CSSProperties;
        if (selectedId && node.id === selectedId) {
            const color = getDefaultColor(slide.background);
            style.borderColor = color;
            style.border = `2px dashed`;
            style.cursor = 'move';
        }

        if (node.type === 'text') {
            style = {
                ...style,
                top: 'unset',
                left: 'unset',
                position: 'relative',
                fontSize: node.fontSize / kHeight + 'px',
                fontStyle: node.fontStyle,
                fontWeight: node.fontWeight,
                textDecoration: node.fontDecoration,
                color: node.color,
                fontFamily: node.fontFamily
            };
            return (
                <Text
                    key={index}
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'circle') {
            return (
                <Circle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }

        if (node.type === 'figure' && node.figure === 'rectangle') {
            return (
                <Rectangle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            return (
                <Triangle
                    node={node}
                    style={style}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    key={index}
                />
            );
        }
        if (node.type === 'img') {
            return (
                <Img
                    key={index}
                    node={node}
                    kWidth={kWidth}
                    kHeight={kHeight}
                    choosed={node.id === selectedId}
                    style={style}
                />
            );
        }
        throw new Error('Unexpected type');
    });
}
