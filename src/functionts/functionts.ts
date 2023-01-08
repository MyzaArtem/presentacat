import { slideHeight, slideWidth } from '../App';
import {
    SettingsObject,
    SlideType,
    AppType,
    ImgObject,
    TextObject,
    ObjectsList,
    FigureType,
    FigureObject,
} from '../types/types';
import hexRgb from 'hex-rgb';

export function getDefaultColor(background: string | null): string {
    let color = '#000000';
    if (background && background.indexOf('#') !== -1) {
        const rgb = hexRgb(background);
        const l = Math.sqrt( 0.299*rgb.red^2 + 0.587*rgb.green^2 + 0.114*rgb.blue^2 );
        if (l <= 5) color = '#ffffff';
    }
    return color;
}

function createId(): string {
    return String(Math.floor(Number(Date.now()) * Math.random()));
}

function createSlide(): SlideType {
    let objectsArr: ObjectsList = [];
    return {
        id: constructors.createId(),
        objects: objectsArr,
        background: '#fff'
    };
}

function createSettings(): SettingsObject {
    return {
        slideWidth: slideWidth,
        slideHeight: slideHeight,
    };
}

function createApp(settings: SettingsObject): AppType {
    const slide: SlideType = createSlide();
    return {
        name: 'presentacat.',
        slides: {
            current: slide.id,
            slides: [slide],
        },
        choosedObject: {
            id: null,
            type: null,
        },
        settings: settings,
    };
}

function createImage(path: string, k: number): ImgObject {
    return {
        id: constructors.createId(),
        type: 'img',
        path: path,
        width: 200,
        height: 200 / k,
        positionTopLeft: { x: 30, y: 30 },
    };
}

function createFigure(type: FigureType): FigureObject {
    return {
        id: constructors.createId(),
        type: 'figure',
        figure: type,
        width: 200,
        height: 200,
        positionTopLeft: { x: 30, y: 30 },
        strokeColor: '#000',
        background: '#fff',
        strokeWidth: 2,
    };
}

function createText(background: string | null): TextObject {
    const c = getDefaultColor(background);
    return {
        id: constructors.createId(),
        type: 'text',
        width: 300,
        height: 50,
        positionTopLeft: { x: 30, y: 30 },
        fontStyle: 'unset',
        fontDecoration: 'unset',
        fontFamily: 'Anton',
        fontSize: 35,
        color: c,
        data: 'Text',
        fontWeight: 400
    };
}

const constructors = {
    createId,
    createSlide,
    createSettings,
    createApp,
    createImage,
    createText,
    createFigure,
};

export default constructors;
