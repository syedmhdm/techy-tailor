import Navigation from "./components/Navigation/Navigation";
import TailorForm from "./components/TailorForm/TailorForm";
import Stack from "react-bootstrap/Stack";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
// WCMG wood cloth metal glass
function App() {
  return (
    <div className='App'>
      <Header className='header' />
      <div className='d-flex'>
        <Sidebar className='sidebar' />
        <Outlet className='outlet' />
      </div>
    </div>
  );
}

export default App;
