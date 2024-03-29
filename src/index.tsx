import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import App from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <App />
        <Footer />
      </>
    </React.StrictMode>
  </BrowserRouter>
);
