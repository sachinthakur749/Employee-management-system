import React from "react";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const data = [
    { name: "IT", value: 2000 },
    { name: "sales", value: 2000 },
    { name: "marketing", value: 2000 },
    { name: "developer", value: 2000 },
  ];


    const navigate = useNavigate();

  const handleNavigate = (e)=> {
    navigate('/emplist');
  }
  
    //   
    // 
  


  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://noveltytechnology.com/wp-content/themes/novelty/img/logo.svg"
            alt=""
          />
        </div>
        <div className="title">Employee Management System</div>
      </div>
      <div className="cardContainer">
        <div className="cards">
          <div className="cardsItem cardsItem1">
            <ArticleRoundedIcon />
            <label htmlFor="">DashBoard</label>
          </div>
          <div  onClick={handleNavigate} className="cardsItem cardsItem2">
            <AccountBoxIcon />
            <label  htmlFor=""><button className="user-btn" onClick={handleNavigate}>UserList</button></label>
          </div>
          <div className="cardsItem cardsItem3">
            <AccountBoxIcon />
            <label htmlFor="">Salaries</label>
          </div>
        </div>
      </div>
      <div className="graphContainer">
        <div className="graphItem">
          <PieChart width={500} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="graphItem">
          <PieChart width={500} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="graphItem">
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
