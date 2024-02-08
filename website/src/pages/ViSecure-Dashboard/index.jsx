import React, { useEffect, useState, useRef, useLayoutEffect} from 'react';
import ViSecureIcon from "../../assets/images/visecure-icon.png";
import VisitsTodayIcon from "../../assets/images/visitsToday.png";
import TotalVisitorsIcon from "../../assets/images/totalVisitors.png";
import Search from "../../assets/images/search.png";
import DashboardPic from "../../assets/images/dashboard.png";
import Reports from "../../assets/images/reports.png";
import Logout from "../../assets/images/logout.png";
import "./index.scss";
import { Link } from 'react-router-dom';

const VisitorCounter = ({ numberOfVisitors, context }) => {
  let textToShow = '';
  let iconToShow = null;

  if (numberOfVisitors === 0) {
    textToShow = '0';
  } else if (numberOfVisitors === 1) {
    textToShow = '1';
  } else {
    textToShow = `${numberOfVisitors}`;
  }

  if (context === 'TodayVisits') {
    iconToShow = <img src={VisitsTodayIcon} alt="Visits Today Icon" />;
  } else if (context === 'TotalVisits') {
    iconToShow = <img src={TotalVisitorsIcon} alt="Total Visitors Icon" />;
  }

  return (
    <div className='numberOfVisitorsHeader'>
      <p>{textToShow}</p>
      {iconToShow}
    </div>
  );
};

const Dashboard = () => {
  const [isSideNavHovered, setIsSideNavHovered] = useState(false);
  const [visited, setVisited] = useState(false);
  const [numberOfVisitors, setNumberOfVisitors] = useState(0);
  const monthlyVisitsGraphRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    document.title = 'Visecure Website';

    const hasVisited = sessionStorage.getItem('hasVisited');
  
    if (!hasVisited) {
      setNumberOfVisitors((prevCount) => prevCount + 1);
      sessionStorage.setItem('hasVisited', 'true');
      setVisited(true);
    } else {
      setVisited(true);
    }
  
    const script = document.createElement('script');
    script.src = 'https://c2hcz115.caspio.com/dp/A427D0007e51db2138bd45a6901d/emb';
    script.type = 'text/javascript';
    script.async = true;

    const parentContainer = monthlyVisitsGraphRef.current;
    script.onload = () => {
      // Resize the script container to match its parent's size after the script loads
      const scriptContainer = parentContainer.querySelector('iframe');
      if (scriptContainer) {
        scriptContainer.style.width = '100%';
        scriptContainer.style.height = '100%';
      }
    };

    parentContainer.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);



  return (
    <div className="dashboardMain">
      <div className="Header">
        <div
          className="SideNav"
          onMouseEnter={() => setIsSideNavHovered(true)}
          onMouseLeave={() => setIsSideNavHovered(false)}
        >
          <div className="CompanyLogo">
            <Link to= "/main">
            <img src={ViSecureIcon} className="icon" alt="ViSecure Icon" />
            </Link>
            <h3>ViSecure</h3>
          </div>
          <ul>
            <li>
              <img src={Search} alt="Search Icon" />
              <p>Search</p>
            </li>
            <li>
              <img src={DashboardPic} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={Reports} alt="Reports Icon" />
              <p>Reports</p>
            </li>
          </ul>
          <ul className="LogOut">
            <li>
              <img src={Logout} alt="Logout Icon" />
              <p>Log Out</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`DashboardContent ${isSideNavHovered ? 'sideNavHovered' : ''}`}>
        <h1>Welcome to Dashboard!</h1>
        <div className="dashboard-container">
          <div className="small-container">
            <div className="TodayVisits">
              <h2>Today's Visits</h2>
              {visited && <VisitorCounter numberOfVisitors={numberOfVisitors} context="TodayVisits" />}
            </div>
            <div className="WeeklyVisits">
              <h2>Visitors for the Last 7 days</h2>
              {visited && <VisitorCounter numberOfVisitors={numberOfVisitors} context="WeeklyVisits" />}
            </div>
            <div className="TotalVisits">
              <h2>Total Visitors</h2>
              {visited && <VisitorCounter numberOfVisitors={numberOfVisitors} context="TotalVisits" />}
            </div>
          </div>
          <div className="DashboardInsights">
            <div className="Graphs">
              <div className="WeeklyVisitsGraph"></div>
              <div ref={monthlyVisitsGraphRef} className="MonthlyVisitsGraph"></div>
            </div>
            <div className="EmployeeList">
              <h2>Employee List</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
