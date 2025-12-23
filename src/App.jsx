
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Whytecc from './admin/pages/whytecc/Whytecc'
import Goforgrowth from './admin/pages/goforgrowth/Goforgrowth'
import Blog from './admin/pages/blog/Blog'
import Login from './admin/pages/login/Login'
import Getstarted from './admin/pages/getstarted/Getstarted'
import Nav from './admin/navfolder/Nav'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Whytecc />} />
          <Route path="/goforgrowth" element={<Goforgrowth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<Getstarted />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App