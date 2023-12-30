export default function AppReducer(state, action) {

    switch(action.type) {
        case 'MODAL':
            return {
                ...state,
                modalIsOpen: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false
            };
        case 'ALERT_MODAL':
            return {
                ...state,
                showExitAlert: true
            }
        default:
            return state;
    }
 }
