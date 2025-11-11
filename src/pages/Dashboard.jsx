import React, { useEffect, useState } from 'react';
import "../styles/Dashboard.css";
import TransactionCards from '../components/TransactionCards';
import RecentTransactions from '../components/RecentTransactions';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [balance, setBalance] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
        const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(existingTransactions);
        let income = 0;
        let expense = 0;

        existingTransactions.forEach((transaction) => {
            if (transaction.type == "Income") {
                income += Number(transaction.amount);
            }
            else {
                expense += Number(transaction.amount);
            }
        })
        setTotalIncome(income);
        setTotalExpense(expense);
        setBalance(income - expense);
    }, []);

    function addTransaction() {
        navigate('/addtransaction');
    }

    return (
        <div className="dashboard">
            <div className="dashboard-inner">
                <h2>Dashboard</h2>
                <button className="add-transaction" onClick={addTransaction}> + Add Transaction</button>
            </div>
            <TransactionCards balance={balance} income={totalIncome} expense={totalExpense} />
            <div className='transactions-chart-row'>
                <div className='transactions half-width'>
                    <h3>Recent Transactions</h3>
                    <RecentTransactions transactions={transactions} />

                </div>
            </div>
        </div>
    );
}
export default Dashboard;