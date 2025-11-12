import { useEffect, useState } from "react";
import "../styles/AddTransaction.css";
import { useLocation, useNavigate } from "react-router-dom";

function AddTransaction() {
    const [type, setType] = useState("Expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const [transaction, setTransactions] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const location = useLocation();

    const navigate = useNavigate();


    function addTransaction(e) {
        if (!amount || !category || !description || !date) {
            alert("Please fill all the fields");
            return
        }

        // const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

        const currentTransaction = {
            type: type,
            amount: amount,
            category: category,
            description: description,
            date: date
        };

        // const newTransaction = [...existingTransactions, currentTransaction]
        let newTransactions;
        if (editIndex === null) {
            newTransactions = [...transaction, currentTransaction]
        }
        else {
            newTransactions = [...transaction];
            newTransactions[editIndex] = currentTransaction;
        }
        setTransactions(newTransactions);

        localStorage.setItem("transactions", JSON.stringify(newTransactions));
        if (editIndex !== null) {
            alert(`${type} updated successfully`);
        }
        else {
            alert(`${type} added successfully`);
        }

        setType("Expense");
        setAmount("");
        setCategory("");
        setDescription("");
        setDate("");

    }

    useEffect(() => {
        const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(existingTransactions);

        console.log(location.state);
        if (location.state && location.state.transaction) {
            const transaction = location.state.transaction;
            setType(transaction.type);
            setAmount(transaction.amount);
            setCategory(transaction.category);
            setDescription(transaction.description);
            setDate(transaction.date);
            setEditIndex(transaction.index);
        }
    }, [location])

    function navigateToDashboard(){
        navigate('/');
    }

    return (
        <div className="addTransactionContainer">
            <button type="submit" className="back-btn" onClick={navigateToDashboard}>Back</button>
            <h3>Add New Transaction</h3>
            <div className="transactionBox">
                <div className="transactionType">
                    <label>
                        <input type="radio" value="Expense" checked={type == "Expense"} onChange={(e) => setType("Expense")} /> Expense
                    </label>
                    <label>
                        <input type="radio" value="Income" checked={type == "Income"} onChange={(e) => setType("Income")} /> Income
                    </label>
                </div>
                <input type="text" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Select a Category</option>
                    <option value="Salary">Salary</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Dinning">Dinning</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button onClick={addTransaction}>{editIndex === null ? 'Add Transaction' : 'Update Transaction'}</button>
            </div>
        </div>
    );
}
export default AddTransaction;