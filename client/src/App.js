import "./App.scss";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';


import router from './routes';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <ToastContainer/>
    </Provider>
  );
}

export default App;