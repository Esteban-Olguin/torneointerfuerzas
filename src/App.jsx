import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App;