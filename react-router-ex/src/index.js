import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import 'react-confirm-alert/src/react-confirm-alert.css';

import App from "./App";
import Books from "./components/Books";
import About from "./components/About";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route 
            index
            element={
              <main style={{padding: '1rem'}}>
                <p>کتاب مورد نظر خود را وارد کنید</p>
              </main>
            }/>
            <Route path=":bookID" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path='*' element={
          <main style={{padding: "1rem 2.5rem"}}>
            <h2>گشتم نبود نگرد نیست</h2>
          </main>
        }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// For Single page application

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App/>}/>
//         <Route path="/books" element={<Books/>}/>
//         <Route path="/about" element={<About/>}/>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// );
