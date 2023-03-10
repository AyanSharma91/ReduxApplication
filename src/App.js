import CakeComponent from "./components/CakeComponent";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeComponent/>
      </div>
    </Provider>
  );
}

export default App;
