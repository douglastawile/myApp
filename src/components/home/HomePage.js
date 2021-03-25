import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Douglas Administration</h1>
        <p className="card-text">
          This app uses React, Redux and React Router to build ultra-responsive
          web apps.
        </p>
        <Link to="/about" className="btn btn-primary">
          Know More
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
