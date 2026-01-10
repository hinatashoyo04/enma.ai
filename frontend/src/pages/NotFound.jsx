import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#0B0E14] text-[#F2F3F7] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        
        {/* 404 */}
        <h1 className="text-7xl font-bold text-[#6C63FF] mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-lg mb-2">
          Page not found
        </p>
        <p className="text-sm text-[#A0A6BA] mb-8">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border border-[#1F2430] hover:bg-[#11141C] transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-[#6C63FF] text-white hover:opacity-90 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
