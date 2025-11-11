import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import GetQuote from "./pages/GetQuote";
import AddTransaction from "./pages/AddTransaction";

function App() {

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);
  return (
    <>

      <BrowserRouter>
        <Navbar openQuote={openQuote} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
        </Routes>

        {isQuoteOpen && <GetQuote isOpen={isQuoteOpen} onClose={closeQuote}/> }

      </BrowserRouter>


    </>
  )
}
export default App;