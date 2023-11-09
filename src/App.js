import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import DynamicWidget from './dynamicwidget';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
const App = () => {
  return (
    <Router>
      <div>
      <nav className='d-none'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/invoice">Invoice</Link>
            </li>
            <li>
              <Link to="/mobile">Mobile</Link>              
            </li>
            <li>
            <Link to="/tablet">Tablet</Link>             
            </li>

          </ul>
        </nav>
      </div>
     <Routes>
     <Route path="/" element={<DynamicWidget />} />
        <Route path="/invoice" element={<DynamicWidget/>} />
        <Route path="/mobile" element={<MobilePreview />} />
        <Route path="/tablet" element={<TabletPreview />} />
      </Routes>
    </Router>
  );
};

export default App;