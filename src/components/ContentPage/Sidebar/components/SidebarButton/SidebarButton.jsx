import React, { Component } from "react";
import Sidebar from "../../Sidebar";
import { NavLink } from "react-router-dom";

const SidebarButton = (props) => {
  const { icon, margin, page } = props;

  return (
    <div className={`row ${margin}`}>
      <div className="col-12">
        <NavLink to={page} className="btn btn-100 btn-lg btn-link">
          <i className={icon} />
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarButton;
