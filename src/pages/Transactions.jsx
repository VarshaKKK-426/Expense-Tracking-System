import React from "react";
import "../styles/Transactions.css";
import { useNavigate } from "react-router-dom";

function Transactions() {
    const navigate = useNavigate();
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

    function handleEdit(index){
        const editTransaction = existingTransactions[index];
        console.log(editTransaction)
        navigate('/addtransaction', {state: {transaction: {...editTransaction, index}}});
    }

    function handleDelete(index){
        const updatedTransactions = existingTransactions.filter((data, i) => i !== index);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
        window.location.reload();
    }

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
                            <td>
                                <div className="action-buttons">
                                    <button className="edit-btn" onClick={()=>handleEdit(index)}>Edit</button>
                                    <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>

                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}
export default Transactions;