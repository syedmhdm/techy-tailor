import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TailorForm from "./components/TailorForm/TailorForm";
import TailorList from "./components/Datatable/TailorList";
import OrderList from "./components/Datatable/OrderList";
import TailorDetails from "./components/TailorDetails/TailorDetails";
import AddOrder from "./components/addorder/AddOrder";
import MyOrders from "./components/MyOrders/MyOrders";
import MyProfile from "./components/MyProfile/MyProfile";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<TailorList />} />
          <Route path='addtailor' element={<TailorForm />} />
          <Route path='edittailor' element={<TailorForm />} />
          <Route path='tailors' element={<TailorList />} />
          <Route path='orders' element={<OrderList />} />
          <Route path='addorder' element={<AddOrder />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='myproflie' element={<MyProfile />} />
          <Route path='tailorDetails' element={<TailorDetails />} />
        </Route>
        <Route path='*' element={<h3>404 Page not found</h3>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
