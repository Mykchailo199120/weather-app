import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store';
import { WeatherProvider } from './context/WeatherContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <WeatherProvider>
              <App />
          </WeatherProvider>
      </Provider>
  </StrictMode>,
)
