import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router";

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
