import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//import Tiktac from "./Myfile.js";
//import Dynamicvalue from "./Valuebased.js";
//import Interactive from "./Interactive.js";
//import UseState from "./UseState.js";
//import Arraystate from "./Arraystate.js";
import Arrayclick from "./Arrayclick.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Arrayclick />
  </StrictMode>
);
