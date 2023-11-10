import { EntriesState } from ".";


type EntriesActionType =
    | {type: '[Entries] - Open Sidebar' }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState =>{
    
    switch(action.type){
        case '[Entries] - Open Sidebar':
            return {
                ...state,
            }
        default:
            return state
    }    
}