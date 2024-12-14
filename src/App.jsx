import React from "react";
import {
  Search,
  Filter,
  Maximize2,
  List,
  Grid,
  MoreVertical,
  Home,
  BarChart2,
  Users,
  Calendar,
  Settings,
} from "lucide-react";
import { imageUrls } from "./ImageUrls";
import "./App.css";

const campaigns = [
  {
    id: "1",
    title: "Forestation Unified",
    type: "forestation",
    status: "active",
    startDate: "November 13th",
    endDate: "December 13th",
    fundsRaised: 125000,
    totalDonations: 1245,
    progress: 56,
  },
  {
    id: "2",
    title: "Lake Cleanup",
    type: "cleanup",
    status: "active",
    startDate: "November 28th",
    endDate: "December 5th",
    goalsCompleted: 6,
    totalGoals: 8,
    totalVolunteers: 38,
    progress: 82,
  },
  {
    id: "3",
    title: "Forestation Unified",
    type: "forestation",
    status: "active",
    startDate: "November 13th",
    endDate: "December 13th",
    fundsRaised: 125000,
    totalDonations: 1245,
    progress: 56,
  },
  {
    id: "4",
    title: "Lake Cleanup",
    type: "cleanup",
    status: "active",
    startDate: "November 28th",
    endDate: "December 5th",
    goalsCompleted: 6,
    totalGoals: 8,
    totalVolunteers: 38,
    progress: 82,
  },
];

const CampaignDashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="nav-sidebar">
        <div className="nav-logo"></div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <Home size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BarChart2 size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <Users size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <Calendar size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <Settings size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <h1 className="dashboard-header">Your Campaigns</h1>

        <div className="status-tabs">
          <div className="status-tab status-tab-active">
            <span>13 Active</span>
            <span>5 🌱</span>
            <span>8 🎣</span>
          </div>
          <div className="status-tab status-tab-upcoming">
            <span>4 Upcoming</span>
            <span>1 🌱</span>
            <span>3 🎣</span>
          </div>
          <div className="status-tab status-tab-completed">
            <span>14 Completed</span>
            <span>7 🌱</span>
            <span>7 🎣</span>
          </div>
        </div>

        <div className="controls">
          <div className="view-controls">
            <button className="control-button">
              <List size={16} />
              List View
            </button>
            <button className="control-button">
              <Grid size={16} />
              Tile View
            </button>
          </div>
          <div className="action-controls">
            <button className="control-button">
              <Filter size={16} />
            </button>
            <button className="control-button">
              <Maximize2 size={16} />
            </button>
            <div className="search-container">
              <Search
                size={16}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <input className="search-input" placeholder="Search" />
            </div>
            <button className="create-button">Create +</button>
          </div>
        </div>

        <div className="campaign-list">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <img
                src={imageUrls[campaign.type]}
                alt={campaign.title}
                className="campaign-image"
              />
              <div className="campaign-content">
                <div className="campaign-header">
                  <h3 className="campaign-title">
                    {campaign.title}
                    {campaign.type === "forestation" ? "🌱" : "🎣"}
                  </h3>
                  <button className="control-button">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className="campaign-status">
                  <span className="status-badge">Active</span>
                  <span className="campaign-date">
                    {campaign.startDate} - {campaign.endDate}
                  </span>
                </div>
                <div className="campaign-metrics">
                  {campaign.fundsRaised && (
                    <div className="metric">
                      <span className="metric-label">Funds Raised:</span>
                      <span className="metric-value">
                        Rs {campaign.fundsRaised.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {campaign.totalDonations && (
                    <div className="metric">
                      <span className="metric-label">Total Donations:</span>
                      <span className="metric-value">
                        {campaign.totalDonations}
                      </span>
                    </div>
                  )}
                  {campaign.goalsCompleted && (
                    <div className="metric">
                      <span className="metric-label">Goals completed:</span>
                      <span className="metric-value">
                        {campaign.goalsCompleted}/{campaign.totalGoals}
                      </span>
                    </div>
                  )}
                  {campaign.totalVolunteers && (
                    <div className="metric">
                      <span className="metric-label">Total Volunteers:</span>
                      <span className="metric-value">
                        {campaign.totalVolunteers}
                      </span>
                    </div>
                  )}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
                <div className="progress-text">
                  {campaign.progress}% Complete
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDashboard;
