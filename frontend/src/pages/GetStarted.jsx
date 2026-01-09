import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 fade-up">
              Welcome to Enma 
              <br />
              <span className="text-[var(--primary)]">Chat.</span>
            </h1>

            <p className="text-[var(--text-secondary)] text-base md:text-lg mb-10 max-w-md fade-up">
              ENMA AI is a private web-based communication platform for real-time
              chat, voice messages, and one-to-one video calls — designed for
              focused and meaningful conversations.
            </p>

            <div className="flex gap-4 flex-wrap fade-up">
              <Link
                to="/signup"
                className="
                  px-8 py-3 rounded-lg
                  bg-[var(--primary)]
                  font-medium
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-[var(--primary)/40]
                "
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="
                  px-8 py-3 rounded-lg
                  border border-[var(--border)]
                  transition-all duration-300
                  hover:border-[var(--primary)]
                  hover:text-[var(--primary)]
                "
              >
                Login
              </Link>
            </div>

            <p className="text-xs text-[var(--text-secondary)] mt-10 fade-up">
              ENMA AI is currently in demo mode with limited access and usage.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 h-[280px] md:h-[420px] fade-up">
  <div className="flex flex-col gap-4 h-full">
    
    {/* Header */}
    <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3">
      <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-sm font-semibold">
        A
      </div>
      <div>
        <p className="text-sm font-medium">Alex</p>
        <p className="text-xs text-[var(--text-secondary)]">Online</p>
      </div>
    </div>

    {/* Messages */}
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 h-[280px] md:h-[420px] fade-up flex flex-col justify-center gap-6">
  <div>
    <h3 className="text-lg font-medium mb-1">1-to-1 Chat</h3>
    <p className="text-sm text-[var(--text-secondary)]">
      Private, focused conversations without distractions.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-1">Voice Messages</h3>
    <p className="text-sm text-[var(--text-secondary)]">
      Send quick voice notes when typing isn’t enough.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-1">Video Calls</h3>
    <p className="text-sm text-[var(--text-secondary)]">
      Secure, peer-to-peer one-to-one calls.
    </p>
  </div>
</div>


  </div>
</div>


        </div>
      </div>
    </div>
  );
}
