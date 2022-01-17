import React from "react";
import { useState } from "react/cjs/react.development";
import AppContext from "./Context";

const ContextProvider = (props) => {
  const [isAddedSuccesfully, setIsAddedSuccesfully] = useState(false);
  const AddedSuccesfully = () => {
    setIsAddedSuccesfully((prevState) => !prevState);
  };
  const ContextData = { isAddedSuccesfully, AddedSuccesfully };
  return (
    <AppContext.Provider value={ContextData}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
