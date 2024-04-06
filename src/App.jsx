import React from "react";
import PlayerDashboard from "./components/PlayerDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerModal from "./components/PlayerModal";
import Home from "./components/Home";
import UpcomingMatches from "./components/upcomingMatches";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar className="w-full" />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="player-details" element={<PlayerDashboard />} />
          <Route path="upcoming-matches" element={<UpcomingMatches />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
