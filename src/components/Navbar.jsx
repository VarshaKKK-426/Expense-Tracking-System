import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
                        <Link to={"/getquote"}>GetQuote</Link>

                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;