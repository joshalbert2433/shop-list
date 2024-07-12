import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import MainLayout from "./components/layout/MainLayout";
import Statistics from "./pages/Statistics";
import History from "./pages/History";
import HistoryItem from "./pages/HistoryItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/history" element={<History />} />
            <Route path="/historyItem" element={<HistoryItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
