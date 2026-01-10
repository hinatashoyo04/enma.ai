import { useNavigate } from "react-router-dom";

const chats = [
  {
    id: "1",
    name: "Anna",
    lastMessage: "Yay!",
    time: "09:31",
    unread: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Lucy",
    lastMessage: "Cool! 👍",
    time: "06:53",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Izak",
    lastMessage: "I'll call later!",
    time: "Wed",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function ChatDashboard() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#0B0E14] text-[#F2F3F7] flex">
      
      {/* LEFT: CHAT LIST */}
      <div className="w-full md:w-[380px] border-r border-[#1F2430] flex flex-col">
        
        {/* Header */}
        <div className="p-4 text-xl font-semibold border-b border-[#1F2430]">
          Messages
        </div>

        {/* Search */}
        <div className="p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg bg-[#11141C] border border-[#1F2430] outline-none"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => navigate(`/chat/${chat.id}`)}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#11141C] transition"
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{chat.name}</span>
                  <span className="text-xs text-[#A0A6BA]">{chat.time}</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#A0A6BA] truncate">
                    {chat.lastMessage}
                  </p>

                  {chat.unread && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: EMPTY STATE (DESKTOP ONLY) */}
      <div className="hidden md:flex flex-1 items-center justify-center text-[#A0A6BA]">
        <div className="text-center">
          <h2 className="text-xl mb-2">ENMA AI</h2>
          <p>Select a chat to start messaging</p>
        </div>
      </div>

    </div>
  );
}
