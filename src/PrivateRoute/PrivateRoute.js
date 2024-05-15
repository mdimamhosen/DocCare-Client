import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AppContext } from "../ContextProvider/AppContext";
import { BallTriangle, Triangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Triangle
          color="blue"
          ariaLabel="triangle-loading"
          wrapperStyle={{ position: "absolute", top: "45%" }}
          visible={loading}
        />
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
};

export default PrivateRoute;
