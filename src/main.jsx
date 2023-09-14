import ReactDOM from "react-dom/client";

import GlobalStyles from "./assets/globalStyles.jsx";
import App from "./components/App.jsx";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer.js";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
  </Provider>
);
