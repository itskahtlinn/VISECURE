import React, { useEffect, useState } from 'react';

import "./index.scss";
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import Search from "../../assets/images/search.png";
import DashboardPic from "../../assets/images/dashboard.png";
import Reports from "../../assets/images/reports.png";
import Logout from "../../assets/images/logout.png";



const Dashboard = () => {
  const [isSideNavHovered, setIsSideNavHovered] = useState(false);
    useEffect(() => {
        document.title = 'Visecure Website';
      }, []);
      
      
    return(
        <div className="dashboardMain">
          <div className="Header">
            <div className="SideNav"
            onMouseEnter={() => setIsSideNavHovered(true)}
            onMouseLeave={() => setIsSideNavHovered(false)}
            >
                <div className="CompanyLogo">
                    <img src={ViSecureIcon} class="icon"/>
                    <h3>ViSecure</h3>
                </div>
                <ul>
                    <li><img src={Search}/><p>Search</p></li>
                    <li><img src={DashboardPic}/><p>Dashboard</p></li>
                    <li><img src={Reports}/><p>Reports</p></li>
                </ul>
                <ul className="LogOut">
                    <li><img src={Logout}/><p>Log Out</p></li>
                </ul>
            </div>
          </div>
          <div className={`DashboardContent ${isSideNavHovered ? 'sideNavHovered' : ''}`}>
            <h1>Welcome to Dashboard!</h1>
                <div className="dashboard-container">
                  <div className="small-container">
                    <div className="TodayVisits"></div>
                    <div className="WeeklyVisits"></div>
                    <div className="TotalVisits"></div>
                  </div>
                  <div className="DashboardInsights">
                    <div className="Graphs">
                      <div className="WeeklyVisitsGraph"></div>
                      <div className="MonthlyVisitsGraph"></div>
                    </div>
                    <div className="EmployeeList"></div>
                  </div>
                </div>
          </div>
      </div>
    )
}

export default Dashboard;