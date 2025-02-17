import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./routes/about";
import ProjectPages from './projectPages'

console.log({ ProjectPages });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const root = ReactDOM.createRoot(
  document.getElementById("root")
  );
  root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      {ProjectPages.map(ProjectPage => (
        <Route path={ProjectPage.name} element ={<ProjectPage />} />
      ))}
      {/* <Route path="classicSnakeGame" element={<ClassicSnakeGame />} /> */}
    </Routes>
  </BrowserRouter>
);

// Before the routing magic
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
