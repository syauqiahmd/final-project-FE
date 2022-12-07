import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
