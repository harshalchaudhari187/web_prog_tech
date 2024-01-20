import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmp from "./pages/AddEmp";

import { Navigate, Route, Routes } from "react-router-dom";
import GetAll from "./pages/GetAll";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/emps" />}></Route>
        <Route path="/emps" element={<GetAll />}></Route>
        <Route path="/emps/emp" element={<AddEmp />}></Route>
      </Routes>
    </>
  );
}

export default App;
