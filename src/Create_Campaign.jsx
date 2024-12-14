import React from "react";
import {
  Home,
  BarChart2,
  Users,
  Calendar,
  Settings,
  Upload,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import "./Create_Campaign.css";

const CreateCampaign = () => {
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
        <h1 className="page-title">Create Campaign</h1>

        <div className="form-container">
          <div className="form-left">
            <section>
              <h2 className="section-title">Campaign Info</h2>

              <div className="form-group">
                <label className="form-label">Campaign title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter title"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Campaign type</label>
                <select className="form-select">
                  <option value="">Select type</option>
                  <option value="forestation">Forestation</option>
                  <option value="cleanup">Cleanup</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Campaign category</label>
                <select className="form-select">
                  <option value="">Select type</option>
                  <option value="environmental">Environmental</option>
                  <option value="community">Community</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Campaign description</label>
                <textarea
                  className="form-textarea"
                  placeholder="Enter description"
                ></textarea>
              </div>

              <div className="date-inputs">
                <div className="form-group">
                  <label className="form-label">Start date</label>
                  <select className="form-select">
                    <option value="">Select type</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">End date</label>
                  <select className="form-select">
                    <option value="">Select type</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Location address</label>
                <select className="form-select">
                  <option value="">Select address</option>
                </select>
              </div>
            </section>

            <section>
              <h2 className="section-title">Donation Settings</h2>

              <div className="form-group">
                <label className="form-label">Overall goal</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter enter goal title"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Overall goal description</label>
                <textarea
                  className="form-textarea"
                  placeholder="Enter description"
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Minimum funds allowed per single donation
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter minimum donation amount per donate"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Milestones</label>
                <div className="milestone-input">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter milestone funds"
                  />
                  <button className="add-button">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="section-title">Volunteer Settings</h2>

              <div className="form-group">
                <label className="form-label">Overall goal</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter enter goal title"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Overall goal description</label>
                <textarea
                  className="form-textarea"
                  placeholder="Enter description"
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Enter max expected volunteer count
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Max expected volunteers"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Enter subtasks</label>
                <div className="milestone-input">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter subtasks"
                  />
                  <button className="add-button">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </section>

            <button className="create-button">Create campaign</button>
          </div>

          <div className="form-right">
            <div className="gallery-container">
              <h2 className="section-title">Gallery</h2>
              <div className="gallery-preview">
                <button className="nav-button">
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-button">
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="gallery-nav">
                <div className="gallery-dot active"></div>
                <div className="gallery-dot"></div>
                <div className="gallery-dot"></div>
                <div className="gallery-dot"></div>
              </div>
              <button className="upload-button">
                <Upload size={16} />
                Upload media
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateCampaign;
