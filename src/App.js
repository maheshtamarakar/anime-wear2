import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import { Home } from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import MainLoyout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*TODO: just for now, remove it later*/}
        <Route
          path="/"
          element={<Navigate to={"/login"} replace></Navigate>}
        />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLoyout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
