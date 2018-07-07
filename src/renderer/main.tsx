import {HydroApp} from "./components/app";
import * as React from "react";
import * as ReactDOM from "react-dom";

import './launcher.scss';

const domContainer = document.getElementById("app");
ReactDOM.render(<HydroApp/>, domContainer);