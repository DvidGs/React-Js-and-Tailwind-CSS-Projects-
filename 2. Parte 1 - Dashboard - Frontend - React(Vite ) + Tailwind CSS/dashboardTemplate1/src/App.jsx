import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages auth
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
// Pages admin
import Home from "./pages/admin/Home";
import Error404 from './pages/Error404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
