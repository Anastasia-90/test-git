import React from "react";
import  reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"

const element = <h1> Helow World </h1>;

const Component=()=>{
    return element
}

reactDom.render(<Component/>, document.getElementById("root"));