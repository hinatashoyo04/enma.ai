import React, { useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff } from "lucide-react";

const Call = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [status, setStatus] = useState("Calling...");

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative text-white">
      {/* Main Video Area */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
          alt="User"
          className={`object-cover ${
            isCameraOff ? "opacity-30" : "opacity-100"
          } w-full h-full md:w-[80%] md:h-[80%] rounded-none md:rounded-2xl`}
        />
      </div>

      {/* Small Self Preview */}
      <div className="absolute bottom-28 right-4 md:bottom-32 md:right-10 w-28 h-36 md:w-40 md:h-52 bg-gray-800 rounded-xl overflow-hidden border border-gray-600">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
          alt="Self"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call Status */}
      <div className="absolute top-10 text-center">
        <h2 className="text-lg font-semibold">Alex Johnson</h2>
        <p className="text-sm text-gray-300">{status}</p>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 w-full flex items-center justify-center">
        <div className="bg-white rounded-full px-6 py-3 flex gap-6 items-center">
          {/* Mic */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            {isMuted ? (
              <MicOff className="text-black" />
            ) : (
              <Mic className="text-black" />
            )}
          </button>

          {/* Camera */}
          <button
            onClick={() => setIsCameraOff(!isCameraOff)}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            {isCameraOff ? (
              <VideoOff className="text-black" />
            ) : (
              <Video className="text-black" />
            )}
          </button>

          {/* End Call */}
          <button className="p-3 rounded-full bg-red-500 hover:bg-red-600">
            <PhoneOff />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call;