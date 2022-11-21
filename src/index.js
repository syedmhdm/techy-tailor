import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerForm from "./components/Pages/CustomerForm/CustomerForm";
import CustomersList from "./components/Pages/CustomersList/CustomersList";
import MyProfile from "./components/Pages/MyProfile/MyProfile";
import InactiveCustomersList from "./components/Pages/InactiveCustomersList/InactiveCustomersList";
import About from "./components/Pages/About/About";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<CustomersList />} />
          <Route path='addcustomer' element={<CustomerForm />} />
          <Route path='customers' element={<CustomersList />} />
          <Route path='inactivecustomers' element={<InactiveCustomersList />} />
          <Route path='myproflie' element={<MyProfile />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<h3>404 Page not found</h3>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
