import React, { useContext, useState } from "react";

//creates the context
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //hooks and functions

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        modalOpen,
        sidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//create our custom hok for importing values

export const useAppContext = () => {
  return useContext(AppContext);
};
