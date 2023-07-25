import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <h1> Hello, {new Date().toUTCString()}</h1>
    </React.Fragment>
  );
};
export default App;
