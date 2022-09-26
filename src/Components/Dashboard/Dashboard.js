import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accesstoken')

  }
  return (
    <div className="drawer bg-base-200 sm:bg-white drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col m-5">
        <div className="dropdown-end">
          <label tabIndex={1} htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
            <h2 className="text-2xl font-bold">
              → 
              {/* <span style={{ fontSize: "20px" }}>Open sidebar</span> */}
            </h2>
          </label>
        </div>
        <h2 className="text-2xl font-bold" style={{ color: "purple" }}>
          Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 text-base-content space-y-3  bg-gradient-to-b from-secondary to-primary ...">
          <li style={{color:"white"}} className="font-bold">
            <Link to="/dashboard">My account</Link>
          </li>
          <li style={{color:"white"}} className="font-bold">
            <Link to="/dashboard/myappointment">My appointment</Link>
          </li>
          {admin ? <li style={{color:"white"}} className="font-bold">
            <Link to="/dashboard/patient">All Patients</Link>
          </li>: ""}
          <li>
          <button className="font-bold text-white" onClick={logOut}>Sign Out</button>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
