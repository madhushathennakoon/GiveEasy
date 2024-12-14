import React from "react";
import { Home, BarChart2, Users, Calendar, Settings, X } from "lucide-react";
import "./cancel_campaign.css";

const CancelCampaign = () => {
  return (
    <div className="page-container">
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

      <main className="main-content">
        <div className="header">
          <h1 className="page-title">Cancel Campaign - Forestation United</h1>
          <span className="status-badge">Active</span>
        </div>

        <section className="progress-container">
          <h2 className="section-title">Overall progress</h2>

          <div className="campaign-card">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Forestation Campaign"
              className="campaign-image"
            />
            <div className="campaign-stats">
              <div className="stat-item">
                Donation milestones reached: <strong>10/20</strong>
              </div>
              <div className="stat-item">
                Total funds raised: <strong>Rs 125,000</strong>
              </div>
              <div className="stat-item">
                Total donations: <strong>1245</strong>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "56%" }} />
              </div>
              <div className="progress-text">56% Complete</div>
            </div>
          </div>
        </section>

        <section className="reason-container">
          <label className="reason-label">
            Please state the reason for cancelling (participants of the campaign
            will be notified with this)
          </label>
          <textarea
            className="reason-textarea"
            placeholder="Enter description"
          />

          <p className="warning-text">
            *once you cancel, potential donors will no longer be able to
            participate
          </p>

          <button className="cancel-button">
            <X size={16} />
            Cancel Campaign
          </button>
        </section>
      </main>
    </div>
  );
};

export default CancelCampaign;
