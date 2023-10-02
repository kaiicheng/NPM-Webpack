console.log("Hello Webpack!!!")

// import programs from other files
// SASS
import "./style.scss";
// import title file
import title from "./title.js";
// import list file
import list from "./list.js";



// create the same contents with dynamic method

// create html object
// <!-- Webpack loader -->
// <div class="title">Webpack Loader</div>

// alternative method
// add title

// move below code to title.js module
/** 
let title=document.createElement("div");
title.className="title";
title.textContent="Webpack Loader created dynamically.";
**/
document.body.appendChild(title);

// create the same contents with dynamic method
// <ul>
//     <li>CSS Loader</li>
//     <li>SASS Loader</li>
//     <li>Babel Loader</li>
// </ul>
// </div>

// alternative method
// add list

// move below code to list.js module
/**
let list=document.createElement("ul");
let item=document.createElement("li");
item.textContent="CSS Loader";
list.appendChild(item);

item=document.createElement("li");
item.textContent="SASS Loader";
list.appendChild(item);

item=document.createElement("li");
item.textContent="Babel Loader";
list.appendChild(item);
**/
document.body.appendChild(list);



// importt and export

// import whole file
// import "./lib.js";
// console.log(data);

// import variables
// import {x, y} from "./lib.js";
// console.log("x: ", x, "y: ", y);

// import default
// import {x} from "./lib.js";
// import data from "./lib.js";
// console.log("x: ", x, "data: ", data);

// mix
// import data, {x, y} from "./lib.js";
// console.log("x: ", x, "y", y, "data: ", data);

// import function module
// import lib from "./lib.js";
// let result=lib.add(3, 4);
// console.log(result)
// result=lib.multiply(3, 4);
// console.log(result)

// Webpack loader
// import "./style.css";