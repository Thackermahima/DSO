import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CodesterContextProvider } from './component/Context/Context';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import {LoginContextProvider} from './component/Context/LoginContext'
import { StoreDataContextProvider } from './component/Context/StoreDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CodesterContextProvider>
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
  <LoginContextProvider>
  <StoreDataContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </StoreDataContextProvider>
    </LoginContextProvider>
  </StyledEngineProvider>

  </React.StrictMode>
  </CodesterContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
