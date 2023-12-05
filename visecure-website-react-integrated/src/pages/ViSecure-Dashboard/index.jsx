import React, { useEffect } from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import Settings from "../../assets/images/settings.png";

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Visecure Website';
      }, []);
      
    return(
        <div className="dashboardMain">
      
        {/*<header>
          <Link to = "/main" className="icon">
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
          </a>
        </header> */}

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