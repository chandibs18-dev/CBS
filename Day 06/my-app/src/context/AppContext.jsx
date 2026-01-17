import {createContext} from 'react';

export const AppContext=createContext();

const ContextProvider = (props) => {
    const phone ="011 2334798";
    const name = "Department of Examinations"
  return (
    <AppContext.Provider value={[phone,name]}>
        {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;