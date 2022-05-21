import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] =useAuthState(auth)
  const [admin]=useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
      <h1 className="text-6xl">This is your dashboard</h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-2 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          <li>
            {admin && <Link to="/dashboard/users">All users</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
