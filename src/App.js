import Navigation from "./components/Navigation/Navigation";
import TailorForm from "./components/TailorForm/TailorForm";
import Stack from "react-bootstrap/Stack";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <TailorForm />
    </div>
  );
}

export default App;
