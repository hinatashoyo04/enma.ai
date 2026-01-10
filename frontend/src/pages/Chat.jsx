import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Phone, Video } from "lucide-react";

const messages = [
  { id: 1, text: "Hey! 👋", sender: "friend" },
  { id: 2, text: "Hi! How are you?", sender: "me" },
  { id: 3, text: "I'm good 😄", sender: "friend" },
];

export default function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen bg-[#0B0E14] text-[#F2F3F7] flex flex-col">
      
      {/* HEADER */}
<div className="flex items-center justify-between px-4 py-3 border-b border-[#1F2430] bg-[#0B0E14] sticky top-0 z-10">
  
  <div className="flex items-center gap-3">
    {/* Mobile Back */}
    <button
      onClick={() => navigate("/chat")}
      className="md:hidden p-1 hover:bg-[#11141C] rounded-full transition"
    >
      <ArrowLeft size={20} />
    </button>

    <img
      src="https://i.pravatar.cc/150?img=1"
      alt="User"
      className="w-10 h-10 rounded-full"
    />

    <div>
      <p className="font-medium leading-tight">Anna</p>
      <p className="text-xs text-[#A0A6BA]">Online</p>
    </div>
  </div>

  {/* CALL BUTTONS */}
  <div className="flex gap-2">
    <button
      onClick={() => navigate(`/call/${id}?type=voice`)}
      className="p-2 rounded-full hover:bg-[#11141C] hover:text-[#6C63FF] transition"
    >
      <Phone size={18} />
    </button>

    <button
      onClick={() => navigate(`/call/${id}?type=video`)}
      className="p-2 rounded-full hover:bg-[#11141C] hover:text-[#6C63FF] transition"
    >
      <Video size={18} />
    </button>
  </div>
</div>


 {/* MESSAGES */}
<div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
  {messages.length === 0 ? (
    <div className="h-full flex items-center justify-center text-[#A0A6BA] text-sm">
      Say hi 👋 to Anna
    </div>
  ) : (
    messages.map((msg) => (
      <div
        key={msg.id}
        className={`flex ${
          msg.sender === "me" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`group relative max-w-[65%] px-4 py-2 rounded-2xl text-sm leading-relaxed
          animate-[fadeIn_0.25s_ease-out]
          ${
            msg.sender === "me"
              ? "bg-[#6C63FF] text-white rounded-br-md"
              : "bg-[#11141C] text-[#F2F3F7] rounded-bl-md"
          }`}
        >
          {msg.text}

          {/* Timestamp (Feature 2 below) */}
          <span className="absolute bottom-[-16px] right-2 text-[10px] text-[#A0A6BA] opacity-0 group-hover:opacity-100 transition">
            09:32
          </span>
        </div>
      </div>
    ))
  )}
</div>

{/* TYPING INDICATOR */}
<div className="px-4 text-xs text-[#A0A6BA] flex items-center gap-1 mb-1">
  Anna is typing
  <span className="animate-pulse">.</span>
  <span className="animate-pulse delay-150">.</span>
  <span className="animate-pulse delay-300">.</span>
</div>


{/* INPUT */}
<div className="p-3 border-t border-[#1F2430] bg-[#0B0E14]">
  <div className="flex items-center gap-2 bg-[#11141C] border border-[#1F2430] rounded-full px-3 py-2 focus-within:border-[#6C63FF] transition">
    <input
      type="text"
      placeholder="Type a message"
      className="flex-1 bg-transparent outline-none text-sm"
    />
    <button className="text-[#6C63FF] hover:scale-110 transition">
      ➤
    </button>
  </div>
</div>


    </div>
  );
}
