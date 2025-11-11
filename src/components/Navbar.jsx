import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import GetQuote from "../pages/GetQuote";

function Navbar({openQuote}) {

    return (
        <>
            <nav className="navBar">
                <h3 className="logoName">Expense Tracking System</h3>
                <ul className="navLink">
                    <li>
                        <Link to={"/"}>Dashboard</Link>

                    </li>
                    <li>
                        <Link to={"/transactions"}>Transactions</Link>

                    </li>
                    <li>
                        <Link to={"/reports"}>Reports</Link>

                    </li>
                    <li>
                        {/* <Link to={"/getquote"}>GetQuote</Link> */}
                        <div className="quote-btn" onClick={openQuote}>Get Quote</div>
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default Navbar;