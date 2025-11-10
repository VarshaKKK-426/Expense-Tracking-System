import { useState } from "react";
import "../styles/AddTransaction.css";

function AddTransaction() {
    const [type, setType] = useState("Expense");
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    function submitForm() {
        console.log(type, amount, category, description, date);
    }
    return (
        <div className="addTransactionContainer">
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
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select a Category</option>
                    <option value="Salary">Salary</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Dinning">Dinning</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
                <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <button onClick={submitForm}>Add Transaction</button>
            </div>
        </div>
    );
}
export default AddTransaction;