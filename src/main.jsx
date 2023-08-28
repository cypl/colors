import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ModalProvider } from "react-modal-classic"
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
)
