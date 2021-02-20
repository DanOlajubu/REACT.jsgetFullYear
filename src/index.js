//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Daniel Olajubu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Daniel";
const lName = "Olajubu";

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {`${fName + " " + lName}`}</p>
    <p>Copyright &copy; {`${year}`}</p>
  </div>,
  document.getElementById("root")
);
