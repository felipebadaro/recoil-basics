import React from "react";
import ReactDOM from "react-dom/client";
import CounterOne from "./CounterOne.tsx";
import CounterTwo from "./CounterTwo.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <CounterOne />
      <CounterTwo />
    </RecoilRoot>
  </React.StrictMode>
);
