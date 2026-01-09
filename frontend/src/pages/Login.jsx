import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 shadow-lg animate-fade-up">
        
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] mb-4 transition"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Welcome Back
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Login to continue to ENMA AI
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-lg bg-[var(--primary)] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[var(--primary)] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
