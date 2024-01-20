import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import LoginForm from "./pages/LoginForm";
import UserListing from "./pages/UserListing";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/list" element={<UserListing />}></Route>
        <Route path='/edit/:id' element={<EditUser></EditUser>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
