import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Whytecc from './admin/pages/whytecc/Whytecc';
import Goforgrowth from './admin/pages/goforgrowth/Goforgrowth';
import Blog from './admin/pages/blog/Blog';
import Login from './admin/pages/login/Login';
import Getstarted from './admin/pages/getstarted/Getstarted';
import Nav from './admin/navfolder/Nav';
import Teccbusiness from './admin/pages/teccbusiness/Teccbusiness';
import Whyteccsavings from './admin/pages/whyteccsavings/Whyteccsavings';
import Developer from './admin/pages/developer/Developer';
import Privacypolicy from './admin/pages/privacypolicy/Privacypolicy';

// 1. Create a Layout for Public Pages (Navbar included)
const MainLayout = () => (
  <>
    <Nav />
    {/* You can add your Footer here too */}
    <Outlet />
  </>
);

// 2. Create a Layout for Auth/Business Pages (No Navbar)
const AuthLayout = () => (
  <div className="auth-container">
    <Outlet />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROUTES WITH NAVBAR */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Whytecc />} />
          <Route path="/goforgrowth" element={<Goforgrowth />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* ROUTES WITHOUT NAVBAR (Login, Register, Business) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/business" element={<Teccbusiness />} />
          <Route path="/why-tecc" element={<Whyteccsavings />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy" element={<Privacypolicy/>} />
        </Route>

        {/* DASHBOARD ROUTES (Example of a 3rd layout) */}
        {/* <Route path="/dashboard" element={<DashboardLayout />}>
             <Route index element={<Home />} />
             <Route path="invest" element={<Invest />} />
        </Route> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;