import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { YoutubeForm, FormikForm } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <NavLink to="/">Basic Form</NavLink>
        <NavLink to="/formik">Formik Form</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<YoutubeForm/>}></Route>
        <Route path="/formik" element={<FormikForm/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
