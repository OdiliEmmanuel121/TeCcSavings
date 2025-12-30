import './Navtop.css'
import { NavLink } from 'react-router-dom';
import { 
  GridView, 
  AccountBalanceWallet, 
  TrendingUp, 
  Person, 
  SupportAgent,
  Logout
} from '@mui/icons-material';
import logo from '../../../assets/logo.png'

const Navtop= () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logoimagenav" className='logoimagenav' />
      </div>

      <nav className="sidebar-links">
        {/* The 'end' prop ensures '/' only highlights when exactly on that path */}
        <NavLink to="/hom" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <GridView className="icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/wall" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <AccountBalanceWallet className="icon" />
          <span>My Wallet</span>
        </NavLink>

        <NavLink to="/inv" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <TrendingUp className="icon" />
          <span>Investments</span>
        </NavLink>

        <NavLink to="/acc" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <Person className="icon" />
          <span>Account</span>
        </NavLink>

        <NavLink to="/con" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <SupportAgent className="icon" />
          <span>Support</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/login" className="nav-item logout">
          <Logout className="icon" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navtop;