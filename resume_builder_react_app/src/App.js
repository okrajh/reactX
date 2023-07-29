import { react } from "@babel/types";
import React from "react";
import ReactDOM from "react-dom/client";
import Introduction from "./components/Introduction/Introduction";
import Education from "./components/Education/Education";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Language from "./components/Language/Language";
import Hobby from "./components/Hobby/Hobby";
import ExtraCircular from "./components/Extra_circular/ExtraCircular";
export default function App() {
  return (
    <div className="resume-container">
      <Introduction />
      <Education />
      <Skill />
      <Experience />
      <Language />
      <Hobby />
      <ExtraCircular />
    </div>
  );
}
