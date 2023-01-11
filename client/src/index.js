import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import {store} from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
