import { FigureType, NodeType } from '../types/types';

export type choosedObjectReducerAction =
    | changeSelectedObjectActionType
    | changeSlideActionType
    | deleteSlideObjectActionType;
export type currSlideIdReducerAction = changeSlideActionType;
export type titleReducerAction = changePresentationNameActionType;
export type slideReducerAction =
    | setSlideBgActionType
    | moveItemActionType
    | addSlideActionType
    | addFigureActionType
    | addTextActionType
    | addImageActionType
    | deleteSlideActionType
    | deleteSlideObjectActionType
    | changeTextDataActionType
    | changeTextColorActionType
    | changeTextFontSizeActionType
    | changeTextFontFamilyActionType
    | toggleBoldTextActionType
    | toggleItalicTextActionType
    | toggleUnderlinedTextActionType
    | resizeNodeActionType
    | figureBackgroundSetActionType
    | strokeColorSetActionType
    | strokeResizeActionType
    // | cutSlideNodeActionType;
export type actionType =
    // | bufferedIdReducerAction
    | choosedObjectReducerAction
    | currSlideIdReducerAction
    | titleReducerAction
    | slideReducerAction
    | exportAppActionType
    | exportPDFActionType
    | redoActionType
    | undoActionType
    | createNewActionType;

interface redoActionType {
    type: 'REDO';
}
export function redo(): redoActionType {
    return {
        type: 'REDO',
    };
}

interface createNewActionType {
    type: 'CREATE_NEW';
}
export function createNew(): createNewActionType {
    return {
        type: 'CREATE_NEW'
    };
}

interface undoActionType {
    type: 'UNDO';
}
export function undo(): undoActionType {
    return {
        type: 'UNDO',
    };
}

interface exportAppActionType {
    type: 'EXPORT_APP';
}
export function exportApp(): exportAppActionType {
    return {
        type: 'EXPORT_APP',
    };
}

interface exportPDFActionType {
    type: 'EXPORT_PDF';
}
export function exportPDF(): exportPDFActionType {
    return {
        type: 'EXPORT_PDF',
    };
}

export interface changeSlideActionType {
    type: 'CHANGE_SLIDE';
    id: string;
}
export function changeSlide(id: string): changeSlideActionType {
    return {
        type: 'CHANGE_SLIDE',
        id,
    };
}

export interface changeSelectedObjectActionType {
    type: 'CHANGE_SELECTED_OBJECT';
    id: string | null;
    objType: NodeType | null;
}
export function changeSelectedObject(
    id: string | null,
    objType: NodeType | null
): changeSelectedObjectActionType {
    return {
        type: 'CHANGE_SELECTED_OBJECT',
        id,
        objType,
    };
}

export interface strokeResizeActionType {
    type: 'RESIZE_FIGURE_STROKE';
    strokeWidth: number;
}
export function strokeResize(strokeWidth: number): strokeResizeActionType {
    return {
        type: 'RESIZE_FIGURE_STROKE',
        strokeWidth,
    };
}

export interface strokeColorSetActionType {
    type: 'CHANGE_FIGURE_STROKE_COLOR';
    color: string;
}
export function strokeColorSet(color: string): strokeColorSetActionType {
    return {
        type: 'CHANGE_FIGURE_STROKE_COLOR',
        color,
    };
}

export interface figureBackgroundSetActionType {
    type: 'CHANGE_FIGURE_BACKGROUND';
    color: string;
}
export function figureBackgroundSet(
    color: string
): figureBackgroundSetActionType {
    return {
        type: 'CHANGE_FIGURE_BACKGROUND',
        color,
    };
}

export interface resizeNodeActionType {
    type: 'RESIZE_NODE';
    width: number;
    height: number;
}
export function resizeNode(
    width: number,
    height: number
): resizeNodeActionType {
    return {
        type: 'RESIZE_NODE',
        width,
        height,
    };
}

export interface toggleBoldTextActionType {
    type: 'TOGGLE_BOLD_TEXT';
}
export function toggleBoldText(): toggleBoldTextActionType {
    return {
        type: 'TOGGLE_BOLD_TEXT',
    };
}

export interface toggleItalicTextActionType {
    type: 'TOGGLE_ITALIC_TEXT';
}
export function toggleItalicText(): toggleItalicTextActionType {
    return {
        type: 'TOGGLE_ITALIC_TEXT',
    };
}

export interface toggleUnderlinedTextActionType {
    type: 'TOGGLE_UNDERLINED_TEXT';
}
export function toggleUnderlinedText(): toggleUnderlinedTextActionType {
    return {
        type: 'TOGGLE_UNDERLINED_TEXT',
    };
}

export interface changeTextFontFamilyActionType {
    type: 'CHANGE_TEXT_FONT_FAMILY';
    family: string;
}
export function changeTextFontFamily(
    family: string
): changeTextFontFamilyActionType {
    return {
        type: 'CHANGE_TEXT_FONT_FAMILY',
        family,
    };
}

export interface changeTextFontSizeActionType {
    type: 'CHANGE_TEXT_FONT_SIZE';
    size: number;
}
export function changeTextFontSize(size: number): changeTextFontSizeActionType {
    return {
        type: 'CHANGE_TEXT_FONT_SIZE',
        size,
    };
}

export interface changeTextColorActionType {
    type: 'CHANGE_TEXT_COLOR';
    color: string;
}
export function changeTextColor(color: string): changeTextColorActionType {
    return {
        type: 'CHANGE_TEXT_COLOR',
        color,
    };
}

export interface changeTextDataActionType {
    type: 'CHANGE_TEXT_DATA';
    data: string;
}
export function changeTextData(data: string): changeTextDataActionType {
    return {
        type: 'CHANGE_TEXT_DATA',
        data,
    };
}

export interface setSlideBgActionType {
    type: 'SET_SLIDE_BG';
    color: string;
}
export function setSlideBg(color: string): setSlideBgActionType {
    return {
        type: 'SET_SLIDE_BG',
        color,
    };
}

export interface moveItemActionType {
    type: 'MOVE_SLIDE_NODE';
    x: number;
    y: number;
}
export function moveItem(x: number, y: number): moveItemActionType {
    return {
        type: 'MOVE_SLIDE_NODE',
        x,
        y,
    };
}

export interface changePresentationNameActionType {
    type: 'CHANGE_PRESENTATION_NAME';
    name: string;
}
export function changePresentationName(
    name: string
): changePresentationNameActionType {
    return {
        type: 'CHANGE_PRESENTATION_NAME',
        name,
    };
}

export interface addSlideActionType {
    type: 'ADD_SLIDE';
}
export function addSlide(): addSlideActionType {
    return {
        type: 'ADD_SLIDE',
    };
}

export interface addFigureActionType {
    type: 'ADD_FIGURE';
    figureType: FigureType;
}
export function addFigure(type: FigureType): addFigureActionType {
    return {
        type: 'ADD_FIGURE',
        figureType: type,
    };
}

export interface addTextActionType {
    type: 'ADD_TEXT';
}
export function addText(): addTextActionType {
    return {
        type: 'ADD_TEXT',
    };
}

export interface addImageActionType {
    type: 'ADD_IMAGE';
    path: string;
    k: number;
}
export function addImage(path: string, k: number): addImageActionType {
    return {
        type: 'ADD_IMAGE',
        path,
        k
    };
}

export interface deleteSlideActionType {
    type: 'DELETE_SLIDE';
}
export function deleteSlide(): deleteSlideActionType {
    return {
        type: 'DELETE_SLIDE',
    };
}

export interface deleteSlideObjectActionType {
    type: 'DELETE_SLIDE_OBJECT';
}
export function deleteSlideObject(): deleteSlideObjectActionType {
    return {
        type: 'DELETE_SLIDE_OBJECT',
    };
}
