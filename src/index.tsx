import * as React from "react";
import { render } from "react-dom";
import Counter from "./components/Counter";
import "./styles.css";

const rootElement = document.getElementById("root");
render(<Counter />, rootElement);
