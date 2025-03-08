// index.js
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './redux/store.js';  // Correct import for default export
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
