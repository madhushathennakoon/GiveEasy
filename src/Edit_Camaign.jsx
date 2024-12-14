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
import "./Edit_Camaign.css";

const EditCampaign = () => {
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
        <h1 className="page-title">Edit Campaign - Forestation United</h1>

        <div className="form-container">
          <div className="form-left">
            <section>
              <h2 className="section-title">Campaign Info</h2>

              <div className="form-group">
                <label className="form-label">Campaign title</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Forestation United"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Campaign type</label>
                <select className="form-select" defaultValue="donation">
                  <option value="donation">Donation</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Campaign category</label>
                <select className="form-select" defaultValue="environment">
                  <option value="environment">Environment Restoration</option>
                  <option value="community">Community</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Campaign description</label>
                <textarea
                  className="form-textarea"
                  defaultValue="Join us in planting a greener future, one tree at a time"
                ></textarea>
              </div>

              <div className="date-inputs">
                <div className="form-group">
                  <label className="form-label">Start date</label>
                  <select className="form-select" defaultValue="2/12/2024">
                    <option value="2/12/2024">2/12/2024</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">End date</label>
                  <select className="form-select" defaultValue="11/12/2024">
                    <option value="11/12/2024">11/12/2024</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Location address</label>
                <select className="form-select" defaultValue="main-road">
                  <option value="main-road">Main Road, Ambalantota</option>
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

            <button className="update-button">Update campaign</button>
          </div>

          <div className="form-right">
            <div className="gallery-container">
              <h2 className="section-title">Gallery</h2>
              <div className="gallery-preview">
                <button className="nav-button prev">
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-button next">
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

export default EditCampaign;
