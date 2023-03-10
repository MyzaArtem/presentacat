import React from 'react';
import { NodeType } from '../../types/types';
import { Context } from '../../index';

interface UseDraggingProps {
    obj: React.RefObject<HTMLElement>;
    resizeIcon: React.RefObject<SVGSVGElement>;
    x: number;
    y: number;
    kWidth: number;
    kHeight: number;
    id: string;
    choosed: boolean;
    width: number;
    height: number;
    squareResize: boolean;
    type: NodeType;
    resizeNode: (width: number, height: number) => void;
    changeSelectedObject: (id: string, type: NodeType) => void;
    moveItem: (x: number, y: number) => void;
}

export default function useDragResize(props: UseDraggingProps) {
    const settings = React.useContext(Context);

    // setting states

    const [elementCords, _changeElementCords] = React.useState({
        x: props.x,
        y: props.y,
    });
    const [elSize, _changeElSize] = React.useState({
        width: props.width,
        height: props.height,
    });


    // setting states` refs

    const myCordsStateRef = React.useRef(elementCords);
    const changeElementCords = (data: any) => {
        myCordsStateRef.current = data;
        _changeElementCords(data);
    };

    const mySizeStateRef = React.useRef(elSize);
    const changeElSize = (data: any) => {
        mySizeStateRef.current = data;
        _changeElSize(data);
    };

    // setting dynamic cords and sizes

    React.useLayoutEffect(() => {
        if (props.obj.current) {
            props.obj.current.style.width = elSize.width / props.kWidth + 'px';
            props.obj.current.style.height = elSize.height / props.kHeight + 'px';
        }
    });

    React.useLayoutEffect(() => {
        if (props.obj.current) {
            props.obj.current.style.top = elementCords.y / props.kHeight + 'px';
            props.obj.current.style.left = elementCords.x / props.kWidth + 'px';
        }
    });

    // setting props for miniatures

    React.useEffect(() => {
        changeElSize({
            width: props.width,
            height: props.height
        })
    }, [props.width, props.height]);

    React.useEffect(() => {
        changeElementCords({
            x: props.x,
            y: props.y
        })
    }, [props.x, props.y]);

    // setting resize listener

    React.useEffect(() => {
        let initialCursorX: number;
        let initialCursorY: number;
        const elOnMouseMove = (e: MouseEvent) => {
            if (props.resizeIcon.current) {
                const newWidth = elSize.width + e.pageX - initialCursorX;
                const newHeight = elSize.height - e.pageY + initialCursorY;
                const offset = - e.pageY + initialCursorY;
                if (newWidth > 20 && newHeight > 20) {
                    changeElSize({
                        width: newWidth,
                        height: props.squareResize ? newWidth / elSize.width * elSize.height : newHeight,
                    });
                    if (!props.squareResize) {
                        changeElementCords({
                            x: elementCords.x,
                            y: elementCords.y - offset
                        })
                    }
                }
            }
        };
        const elOnMouseUp = (e: MouseEvent) => {
            window.removeEventListener('mousemove', elOnMouseMove);
            props.resizeNode(mySizeStateRef.current.width, mySizeStateRef.current.height);
            props.moveItem(myCordsStateRef.current.x, myCordsStateRef.current.y);
            setTimeout(() => {
                props.changeSelectedObject(props.id, props.type);
            });
        };
        
        const elOnMouseDown = (e: MouseEvent) => {
            if (props.resizeIcon.current) {
                e.preventDefault();
                initialCursorX = e.pageX;
                initialCursorY = e.pageY;
                if (props.type === 'text' && props.obj.current) {
                    const div = props.obj.current;
                    const text = div.querySelector('textarea');
                    if (text) text.blur();
                }
                window.addEventListener('mouseup', elOnMouseUp, { once: true });
                window.addEventListener('mousemove', elOnMouseMove);
            }
        };
        if (props.resizeIcon.current && props.choosed)
            props.resizeIcon.current.addEventListener('mousedown', elOnMouseDown, {
                once: true,
            });
        return () => {
            if (props.resizeIcon.current)
                props.resizeIcon.current.removeEventListener('mousedown', elOnMouseDown);
        };
    });

    // setting dragging listener
    
    React.useEffect(() => {
        let initialCursorX: number;
        let initialCursorY: number;
        const elOnMouseMove = (e: MouseEvent) => {
            if (props.obj.current) {
                const newX = elementCords.x + e.pageX - initialCursorX;
                const newY = elementCords.y + e.pageY - initialCursorY;
                if (newX > -100 && newY > -100 && newX < settings.slideWidth + 100 && newY < settings.slideHeight + 100) {
                    changeElementCords({
                        x: newX,
                        y: newY,
                    });
                    changeElSize({
                        width: mySizeStateRef.current.width,
                        height: mySizeStateRef.current.height,
                        offsetY: newY
                    });
                }
            }
        };
        const elOnMouseUp = (e: MouseEvent) => {
            window.removeEventListener('mousemove', elOnMouseMove);
            props.moveItem(myCordsStateRef.current.x, myCordsStateRef.current.y)
        };
        const elOnMouseDown = (e: MouseEvent) => {
            if (props.obj.current && !e.defaultPrevented) {
                e.preventDefault();
                initialCursorX = e.pageX;
                initialCursorY = e.pageY;
                window.addEventListener('mouseup', elOnMouseUp, { once: true });
                window.addEventListener('mousemove', elOnMouseMove);
            }
        };
        if (props.obj.current && props.choosed)
            props.obj.current.addEventListener('mousedown', elOnMouseDown, {
                once: true,
            });
        return () => {
            if (props.obj.current)
                props.obj.current.removeEventListener(
                    'mousedown',
                    elOnMouseDown
                );
        };
    });

    return {
        sizeRef: mySizeStateRef,
        cordsRef: myCordsStateRef
    }
}
