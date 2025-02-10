import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GradientCanvas from "./Components/GradientCanvas";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CreateAccount from './Components/CreateAccount';
import VerifyMail from './Components/VerifyMail';
import Start from './Components/Start';
import DashBoardHome from './Components/DashBoardHome';  
import ActivatePayments from './Components/ActivatePaymentMain/VerifyPayments';

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full">
        {/* GradientCanvas will only show on these specific routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <GradientCanvas />
                <div className="relative z-10">
                  <Header />
                  <Hero />
                </div>
              </>
            } 
          />
          <Route 
            path="/create-account" 
            element={
              <>
                <GradientCanvas />
                <div className="relative z-10">
                  <CreateAccount />
                </div>
              </>
            } 
          />
          <Route 
            path="/verify-account" 
            element={
              <>
                <GradientCanvas />
                <div className="relative z-10">
                  <VerifyMail />
                </div>
              </>
            } 
          />
          <Route 
            path="/start" 
            element={
              <div className="relative z-10">
                <Start />
              </div>
            } 
          />
          <Route 
            path="/dashboard-home"  
            element={
              <div className="relative z-10">
                <DashBoardHome />
              </div>
            } 
          />
          <Route 
            path="/Active-Payment"  
            element={
              <div className="relative z-10">
                <ActivatePayments />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
