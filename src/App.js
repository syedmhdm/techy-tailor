import Stack from "react-bootstrap/Stack";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";
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
