import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2>All images</h2>
      </Link>

      <Link to="/favorites">
        <i className="fas fa-heart fa-3x"></i>
      </Link>
    </div>
  );
};

export default Header;
