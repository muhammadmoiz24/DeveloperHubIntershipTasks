import { useState } from "react";

export default function RoleSwitch() {
  const [role, setRole] = useState("Investor");

  return (
    <div className="mb-4">
      <button
        onClick={() => setRole("Investor")}
        className="mr-2 px-3 py-1 border rounded"
      >
        Investor
      </button>
      <button
        onClick={() => setRole("Entrepreneur")}
        className="px-3 py-1 border rounded"
      >
        Entrepreneur
      </button>
      <p className="text-sm mt-1">Current Role: {role}</p>
    </div>
  );
}
