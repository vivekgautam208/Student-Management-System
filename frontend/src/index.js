
app.get('/', (req, res) => {
  // Login पेज या कोई और होम पेज दिखाएं
  res.render('login'); // या जो भी आपका होम पेज है
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
