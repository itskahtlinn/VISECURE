import React, { useEffect } from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import Settings from "../../assets/images/settings.png";
import Search from "../../assets/images/search.png";
import DashboardPic from "../../assets/images/dashboard.png";
import Reports from "../../assets/images/reports.png";
import Logout from "../../assets/images/logout.png";

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Visecure Website';
      }, []);
      
    return(
        <div className="dashboardMain">
          
          {/*<Link to = "/main" className="icon">
            <img src={ViSecureIcon} alt="Visecure Icon" />
          </Link>
          <a href="#" className="logo">
            ViSecure
          </a>
          <a href="#" className="Dashboard">
            Dashboard
          </a>
          <a href="#" className="Visitor">
            Visitor
          </a>
         <Link to = "/company-partner" className="CompanyPartner">
          Company Partner
         </Link>
         <Link to = "/about" className="AboutUs">
          About Us
        </Link>
          <a href="#">
            <img src={Settings} alt="Settings Icon" />
          </a>*/} //Header
          <div className="Header">
            <div className="SideNav">
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
        <div className="DashboardContent">
          <div className="container">
            <h1>Welcome to Dashboard!</h1>
            <div className="flex-container">
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
        </div>
      </div>
    )
}

export default Dashboard;