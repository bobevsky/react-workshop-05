import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="ErrorPage">
      <h1>
        404 Error. Go to <Link to="/">homepage</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
