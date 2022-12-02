import "./App.scss";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

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
