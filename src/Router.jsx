import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
        </Routes>
    )
}

export default Router;