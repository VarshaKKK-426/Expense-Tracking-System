function TransactionCards({balance, income, expense}) {
    return (
        <div>
            <div className="balance-card">
                <p>Current balance</p>
                <h2>{balance}</h2>

            </div>
            <div className="summary-cards">
                <div className="income-card">
                    <p>Total Income</p>
                    <h4 className="income">{income}</h4>
                </div>
                <div className="expense-card">
                    <p>Total Expense</p>
                    <h4 className="expense">{expense}</h4>
                </div>

            </div>
        </div>
    );
}
export default TransactionCards;