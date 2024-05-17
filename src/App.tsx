import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AccountPage from "./pages/accountPage/accountPage";
import RequestsPage from "./pages/requestsPage/requestsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/account" Component={AccountPage}/>
          <Route path="/requests" Component={RequestsPage}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
