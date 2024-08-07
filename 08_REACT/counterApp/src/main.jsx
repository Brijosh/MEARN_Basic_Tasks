import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header.jsx'
import Counter from './Components/Counter/Counter.jsx'
import Footer from './Components/Footer/Footer.jsx'


import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Counter />
    <Footer/>
  </React.StrictMode>,
)
