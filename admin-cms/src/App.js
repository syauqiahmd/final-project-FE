import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
