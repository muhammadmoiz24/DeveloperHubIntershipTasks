import { useState } from "react";

export default function DocumentChamber() {
  const [file, setFile] = useState<string | null>(null);
  const [status, setStatus] = useState("Draft");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Document Chamber</h1>

      <input
        type="file"
        onChange={e => setFile(e.target.files?.[0]?.name || null)}
      />

      {file && <p className="mt-2 text-sm">Uploaded: {file}</p>}

      <div className="h-32 bg-gray-200 mt-4 flex items-center justify-center">
        Document Preview (Mock)
      </div>

      <div className="mt-4 flex items-center gap-3">
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="border p-1 rounded"
        >
          <option>Draft</option>
          <option>In Review</option>
          <option>Signed</option>
        </select>
        <span className="text-sm">Status: {status}</span>
      </div>

      <div className="h-20 bg-gray-100 mt-4 flex items-center justify-center">
        E-Signature Pad (Mock)
      </div>
    </div>
  );
}
