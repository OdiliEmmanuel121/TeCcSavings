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
import Disclosure from './admin/pages/disclosure/Disclosure';
import Faqs from './admin/pages/faq/Faqs';
import Professions from './admin/pages/professions/Professions';
import Aboutus from './admin/pages/aboutus/Aboutus';
import Navtop from './admin/mainpage/navtop/Navtop';
import Home from './admin/mainpage/home/Home';



// LAYOUT 1: Both Navigations (Full Site)
const MainLayout = () => (
  <>
    <Nav />
    <div className="content-area">
      <Outlet />
    </div>
  </>
);

// LAYOUT 2: Navtop ONLY (Another specific route)
const TopOnlyLayout = () => (
  <>
    <Navtop />
    <div className="content-area">
      <Outlet />
    </div>
  </>
);

// LAYOUT 3: No Navigation (Clean/Auth pages)
const AuthLayout = () => (
  <div className="auth-container">
    <Outlet />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* GROUP 1: ROUTES WITH BOTH NAV ONLY */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Whytecc />} />
          <Route path="/goforgrowth" element={<Goforgrowth />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* GROUP 2: ROUTES WITH NAVTOP ONLY */}
        {/* Add any page here that should only show the top bar */}
        <Route element={<TopOnlyLayout />}>
          <Route path="/hom" element={<Home />} />
        </Route>

        {/* GROUP 3: ROUTES WITH NO NAVIGATION (Clean Pages) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/business" element={<Teccbusiness />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/professions" element={<Professions />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/why-tecc" element={<Whyteccsavings />} />
          <Route path="/faqs" element={<Faqs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;