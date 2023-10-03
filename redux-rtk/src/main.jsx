import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store/store.js";
import { Provider } from "react-redux";
// import {ApiProvider} from '@reduxjs/toolkit/dist/query/react/index.js';

const preloadedState = window.__PRELOADED_STATE__

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/*<ApiProvider api={store}>*/}
		<Provider store={store} serverState={preloadedState}>
			<App />
		</Provider>
		{/*</ApiProvider>*/}
	</React.StrictMode>,
);
