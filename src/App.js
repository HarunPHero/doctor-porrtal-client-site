import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Register from "./Components/Login/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/Login/RequiredAuth/RequiredAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyAppointment from "./Components/Dashboard/MyAppointment";
import AccountDetails from "./Components/Dashboard/AccountDetails";
import Patients from "./Components/Dashboard/Patients";
import RequireAdmin from "./Components/Login/RequiedAdmin/RequiredAdmin";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AccountDetails></AccountDetails>}></Route>
          <Route
            path="myappointment"
            element={<MyAppointment></MyAppointment>}
          ></Route>
          <Route
            path="patient"
            element={
              <RequireAdmin>
                <Patients></Patients>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/signUp" element={<Register></Register>}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
