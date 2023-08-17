import Navbar from "./components/navbar/Navbar";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/registration" Component={Registration}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
