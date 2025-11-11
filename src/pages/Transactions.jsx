import React from "react";
import "../styles/Transactions.css";

function Transactions() {
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

    return (
        <div className="transactions-container">
            <h3>All Transactions</h3>
            <table className="transactionTable">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Amount</th> 
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {existingTransactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.category}</td>
                            <td>{transaction.type}</td>
                            <td className={transaction.type === 'Income' ? 'income' : 'expense'}>{transaction.amount}</td>
                            <td>{transaction.description || 'No description'}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}
export default Transactions;