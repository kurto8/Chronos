import React from 'react';
import { Link } from 'react-router-dom';

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import '../stylesheets/SidebarContainer.css';

const SidebarContainer: React.FC = (): JSX.Element => (
  <div className="sidebar-container">
    <div className="sidebar">
      <img alt="Chronos Logo" id="serviceDashLogo" src={'../assets/icon2Cropped.png'} />
      <Link className="sidebar-link" to="/">
        <HomeSharpIcon style={{ boxShadow: 'none', width: '40px', height: '40px' }} />
        &emsp;Home
      </Link>
      <Link className="sidebar-link" to="/about">
        <InfoIcon style={{ boxShadow: 'none', width: '40px', height: '40px' }} />
        &emsp;About
      </Link>
      <Link className="sidebar-link" to="/contact">
        <ContactSupportIcon style={{ boxShadow: 'none', width: '40px', height: '40px' }} />
        &emsp;Contact
      </Link>
      <Link className="sidebar-link" to="/settings">
        <SettingsIcon style={{ boxShadow: 'none', width: '40px', height: '40px' }} />
        &emsp;Settings
      </Link>
    </div>
  </div>
);
export default SidebarContainer;
