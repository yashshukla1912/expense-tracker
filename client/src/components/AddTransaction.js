import React, { useContext, useState } from 'react'
import { GlobalContext } from './../context/GlobalState'

export default function AddTransaction() {
    const { addTransaction, transactions } = useContext(GlobalContext)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    console.log(transactions)

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTransaction = {
            id: transactions.length + 1,
            text: text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense, positive - income) 
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
                </div>
                <button className="btn" onClick={handleSubmit}>Add transaction</button>
            </form>
        </>
    )
}
