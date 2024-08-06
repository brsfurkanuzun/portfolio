import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header/Header.tsx'
import './index.css'
import './fonts/Manifesto/Manifesto.ttf';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
)
