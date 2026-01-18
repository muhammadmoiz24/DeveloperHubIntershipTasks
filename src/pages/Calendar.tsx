import { useState } from "react";

type Meeting = {
  id: number;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "declined";
};

export default function Calendar() {
  const [meetings, setMeetings] = useState<Meeting[]>([
    { id: 1, date: "2026-01-18", time: "10:00 AM", status: "pending" },
    { id: 2, date: "2026-01-19", time: "02:00 PM", status: "confirmed" }
  ]);

  const updateStatus = (id: number, status: Meeting["status"]) => {
    setMeetings(prev =>
      prev.map(m => (m.id === id ? { ...m, status } : m))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Meeting Scheduler</h1>

      {meetings.map(m => (
        <div key={m.id} className="flex justify-between border-b py-2">
          <span>{m.date} — {m.time}</span>

          {m.status === "pending" && (
            <div className="space-x-2">
              <button
                onClick={() => updateStatus(m.id, "confirmed")}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Accept
              </button>
              <button
                onClick={() => updateStatus(m.id, "declined")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Decline
              </button>
            </div>
          )}

          <span className="text-sm">{m.status}</span>
        </div>
      ))}
    </div>
  );
}
