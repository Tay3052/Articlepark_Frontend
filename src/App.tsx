import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
