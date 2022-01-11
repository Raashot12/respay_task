import React, { useState, useContext } from "react";
// import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ( { children } ) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState( false );
  const openSidebar = () => {
    setIsSidebarOpen( !isSidebarOpen );
    document.body.classList.toggle( "no-scroll" );
  };
  const closeSidebar = () => {
    setIsSidebarOpen( false );
  };


  return (
    <AppContext.Provider
      value={ {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        setIsSidebarOpen
      } }
    >
      { children }
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext( AppContext );
};

export { AppContext, AppProvider };