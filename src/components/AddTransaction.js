import React, {useState, useContext , useRef} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

    const [text,setText] =useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const amountRef=useRef();
    const textRef=useRef();
    const submitHandler=(e) => {
        e.preventDefault();

        const newTransaction={
          id:Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }

        addTransaction(newTransaction);
        amountRef.current.value='';
        textRef.current.value='';
    }

    return (
        <>
          <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" ref={textRef} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" ref={amountRef} required onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>  
        </>

     )}   