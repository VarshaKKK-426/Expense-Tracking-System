import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import GetQuote from "./pages/GetQuote";
import AddTransaction from "./pages/AddTransaction";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<AddTransaction />} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/getquote" element={<GetQuote />} />
        </Routes>      
      </BrowserRouter>

    </>
  )
}
export default App;