import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "./index.scss";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import App from "./App";


const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
}
