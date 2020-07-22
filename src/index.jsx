//React Imports
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//Components Import
import App from "./app/App";

//Style Imports
import "./styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
