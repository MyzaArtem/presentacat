import {
    addFigure,
    addImage,
    addSlide,
    addText,
    changeText,
    changeTextColor,
    changeTextFontFamily,
    changeTextSize,
    deleteSlide,
    deleteSlideObject,
    figureBackgroundSet,
    moveItem,
    resizeNode,
    setSlideBg,
    strokeColorSet,
    strokeResize,
    toggleBoldText,
    toggleItalicText,
    toggleUnderlinedText
} from '../functionts/mainMethods';
import { choosedObjectType, SlidesObject} from '../types/types';
import { actionType } from '../actions/actionsCreators';
import constructors from '../functionts/functionts';

const defaultSlide = constructors.createSlide();

export default function slidesReducer(
    state: SlidesObject = {
        current: defaultSlide.id,
        slides: [defaultSlide],
    },
    action: actionType,
    choosedObject: choosedObjectType,
): SlidesObject {
    if (action.type === 'CHANGE_SLIDE') {
        return {
            ...state,
            current: action.id
        }
    }
    if (action.type === 'SET_SLIDE_BG') {
        return setSlideBg(state, action.color);
    } else if (action.type === 'MOVE_SLIDE_NODE') {
        return moveItem(state, choosedObject, action.x, action.y);
    } else if (action.type === 'ADD_SLIDE') {
        return addSlide(state);
    } else if (action.type === 'ADD_FIGURE') {
        return addFigure(state, action.figureType);
    } else if (action.type === 'ADD_TEXT') {
        return addText(state);
    } else if (action.type === 'ADD_IMAGE') {
        return addImage(state, action.path, action.k);
    } else if (action.type === 'DELETE_SLIDE') {
        return deleteSlide(state);
    } else if (action.type === 'DELETE_SLIDE_OBJECT' ) {
        return deleteSlideObject(state, choosedObject);
    } else if (action.type === 'CHANGE_TEXT_DATA') {
        return changeText(state, choosedObject, action.data);
    } else if (action.type === 'CHANGE_TEXT_COLOR') {
        return changeTextColor(state, choosedObject, action.color);
    } else if (action.type === 'CHANGE_TEXT_FONT_SIZE') {
        return changeTextSize(state, choosedObject, action.size);
    } else if (action.type === 'CHANGE_TEXT_FONT_FAMILY') {
        return changeTextFontFamily(state, choosedObject, action.family);
    } else if (action.type === 'TOGGLE_UNDERLINED_TEXT') {
        return toggleUnderlinedText(state, choosedObject);
    } else if (action.type === 'TOGGLE_ITALIC_TEXT') {
        return toggleItalicText(state, choosedObject);
    } else if (action.type === 'TOGGLE_BOLD_TEXT') {
        return toggleBoldText(state, choosedObject);
    } else if (action.type === 'RESIZE_NODE') {
        return resizeNode(state, choosedObject, action.width, action.height);
    } else if (action.type === 'CHANGE_FIGURE_BACKGROUND') {
        return figureBackgroundSet(state, choosedObject, action.color);
    } else if (action.type === 'CHANGE_FIGURE_STROKE_COLOR') {
        return strokeColorSet(state, choosedObject, action.color);
    } else if (action.type === 'RESIZE_FIGURE_STROKE') {
        return strokeResize(
            state,
            choosedObject,
            action.strokeWidth
        );
    } else return state;
}
