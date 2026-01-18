import { useState } from "react";

export default function VideoCall() {
  const [inCall, setInCall] = useState(false);
  const [camera, setCamera] = useState(true);
  const [mic, setMic] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Video Call</h1>

      <div className="bg-black h-64 text-white flex items-center justify-center mb-4">
        {inCall ? "Live Call (Mock)" : "Not Connected"}
      </div>

      <div className="space-x-2">
        <button
          onClick={() => setInCall(!inCall)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {inCall ? "End Call" : "Start Call"}
        </button>

        <button
          onClick={() => setCamera(!camera)}
          className="bg-gray-300 px-3 py-2 rounded"
        >
          Camera {camera ? "On" : "Off"}
        </button>

        <button
          onClick={() => setMic(!mic)}
          className="bg-gray-300 px-3 py-2 rounded"
        >
          Mic {mic ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}
