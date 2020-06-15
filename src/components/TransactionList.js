import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { motion } from "framer";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <motion.ul
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3 }}
        className="list"
      >
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </motion.ul>
    </>
  );
};
