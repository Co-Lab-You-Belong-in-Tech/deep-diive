import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    modalIsOpen: false,
    showExitAlert: false
}

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 
    // Actions for changing state
    function openModal() {
        dispatch({
            type: 'MODAL',
        });
    }
    function closeModal() {
      dispatch({
          type: 'CLOSE_MODAL',
      });
    }
   function openAlertModal() {
    dispatch({
        type: 'ALERT_MODAL',
    });
    }
 
    return(
       <GlobalContext.Provider value = {{
         modalIsOpen: state.modalIsOpen,
         openModal,
         closeModal,
         showExitAlert: state.showExitAlert,
         openAlertModal
        }}> 
         {children} 
       </GlobalContext.Provider>
    )
 }

 export default GlobalProvider;