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
import { my_dictionary } from "./data.js";
export default function App() {
  return (
    <div className="resume-container">
      {my_dictionary.hasOwnProperty("intro") ? (
        <Introduction {...my_dictionary["intro"]} />
      ) : (
        ""
      )}
      {my_dictionary.hasOwnProperty("edu") ? (
        <Education {...my_dictionary} />
      ) : (
        ""
      )}
      {my_dictionary.hasOwnProperty("exp") ? (
        <Experience {...my_dictionary} />
      ) : (
        ""
      )}

      {my_dictionary.hasOwnProperty("hobby") ? (
        <Hobby {...my_dictionary} />
      ) : (
        ""
      )}
      {my_dictionary.hasOwnProperty("skills") ? (
        <Skill {...my_dictionary} />
      ) : (
        ""
      )}
      {my_dictionary.hasOwnProperty("lang") ? (
        <Language {...my_dictionary} />
      ) : (
        ""
      )}
      <ExtraCircular {...my_dictionary} />
    </div>
  );
}
