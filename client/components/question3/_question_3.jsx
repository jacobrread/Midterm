import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';

const Transaction = (transactions) => {
  return (
    <>
      <div>
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id} className="m-2">
              <p>Amount: {transaction.amount}</p>
              <p>From: {transaction.fromUser.name}</p>
              <p>To: {transaction.toUser.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Question3 = () => {
  const [transactions, setTransactions] = useState([]);
  const api = useContext(ApiContext);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransactions(transactions);
  }, []);

  return <div>{Transaction(transactions)}</div>;
};
