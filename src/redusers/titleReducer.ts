import { actionType } from '../actions/actionsCreators';

export default function titleReducer(state: string = 'presentacat.', action: actionType): string {
    if (action.type === 'CHANGE_PRESENTATION_NAME') {
        return action.name
    }
    return state
}