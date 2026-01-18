import { useState } from "react";

export default function Payments() {
  const [balance] = useState(1500);

  const transactions = [
    { id: 1, type: "Deposit", amount: 500, status: "Completed" },
    { id: 2, type: "Transfer", amount: 200, status: "Pending" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Wallet & Payments</h1>

      <p className="text-xl mb-4">Balance: ${balance}</p>

      <h2 className="font-semibold mb-2">Transactions</h2>
      {transactions.map(t => (
        <div key={t.id} className="flex justify-between border-b py-1 text-sm">
          <span>{t.type}</span>
          <span>${t.amount}</span>
          <span>{t.status}</span>
        </div>
      ))}
    </div>
  );
}
