function RecentTransactions({transactions}) {
    return (
        <div>
           {transactions.slice(-10).reverse().map((transaction,index)=>(
            <li key={index}>
                <span>{transaction.category}</span>
                <span className={transaction.type === 'Income' ? 'income' : 'expense'}>{transaction.amount}</span>
                 
            </li>
           ))}
        </div>
    );
}
export default RecentTransactions;