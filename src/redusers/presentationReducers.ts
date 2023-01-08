import { AppType, History } from '../types/types';
import constructors from '../functionts/functionts';
import titleReducer from './titleReducer';
import slidesReducer from './slidesReducer';
import { exportApp } from '../functionts/jsonMethods';
import choosedObjectReducer from './choosedObjectReducer';
import { actionType } from '../actions/actionsCreators';
import { exportPDF } from '../functionts/exportPdfMethods';
import { cloneApp } from '../functionts/supportMethods';

const undoStack: History = [];
const redoStack: History = [];

export default function presentationReducers(state: AppType = constructors.createApp(constructors.createSettings()), action: actionType): AppType {
    if (action.type === 'CREATE_NEW') {
        const newApp = constructors.createApp(constructors.createSettings());
        window.localStorage.setItem('app', JSON.stringify(newApp));
        return newApp;
    } else if (action.type === 'EXPORT_APP') {
        exportApp(state);
    } else if (action.type === 'EXPORT_PDF') {
        exportPDF(state);
    } else if (action.type === 'REDO') {
        if (redoStack.length) {
            undoStack.push(cloneApp(state));
            const prevState = redoStack.splice(redoStack.length - 1)[0];
            window.localStorage.setItem('app', JSON.stringify(prevState));
            return prevState;
        }
    } else if (action.type === 'UNDO') {
        if (undoStack.length) {
            redoStack.push(cloneApp(state));
            const prevState = undoStack.splice(undoStack.length - 1)[0];
            window.localStorage.setItem('app', JSON.stringify(prevState));
            return prevState;
        }
    } else if (action.type.indexOf('@@redux/INIT') === -1) {
        undoStack.push(cloneApp(state));
        redoStack.splice(0, redoStack.length);
    }

    const newState = {
        name: titleReducer(state.name, action),
        choosedObject: choosedObjectReducer(state.choosedObject, action),
        slides: slidesReducer(state.slides, action, state.choosedObject),
        settings: state.settings,
    }

    return newState
}