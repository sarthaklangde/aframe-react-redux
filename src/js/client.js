
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import { connect, Provider } from "react-redux";
import store from "./store";



const app = document.getElementById('app');
//ReactDOM.render(<App/>,app);
ReactDOM.render(<Provider store={store}><Layout /></Provider>, app);




