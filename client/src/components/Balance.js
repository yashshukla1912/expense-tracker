import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'  
import { numberWithCommas } from '../utils/format';

export default function Balance() {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((amt, item) => amt + item, 0 ).toFixed(2);
        return (
        <>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>   
        </>
    )
}
