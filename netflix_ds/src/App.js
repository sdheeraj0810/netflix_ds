import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import {Provider} from "react-redux";
import store from './utils/store';

const AppLayout= () => {    
    return (  
        <Provider store={store}>
        <Body />
        </Provider>  
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 
