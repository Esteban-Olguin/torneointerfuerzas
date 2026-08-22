import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Terms from './pages/Terms.jsx'
import Admin from './pages/Admin.jsx'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default Router;