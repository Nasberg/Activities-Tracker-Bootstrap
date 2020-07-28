import React, { Component } from "react";

// import components
import SidebarButton from "./components/SidebarButton/SidebarButton";

const Sidebar = (props) => {
  return (
    <div className="card sidebar">
      <SidebarButton icon="fas fa-home" margin="mb-2" page="/start" />
      <SidebarButton icon="fas fa-user" margin="mb-2" page="/min-profil" />
      <SidebarButton icon="fas fa-search" margin="mb-2" page="/sok" />
      <SidebarButton icon="fas fa-question" margin="mt-auto" page="/support" />
    </div>
  );
};

export default Sidebar;
