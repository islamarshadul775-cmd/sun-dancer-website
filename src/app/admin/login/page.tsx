"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock } from "react-icons/fi";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-deep via-ocean to-ocean-light flex items-center justify-center p-6">
      <div className="card w-full max-w-md p-8 shadow-2xl">
        <h1 className="text-4xl font-display font-bold text-center mb-2 text-gradient">☀️ Sun Dancer</h1>
        <p className="text-center text-charcoal-soft mb-8">Admin Dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-charcoal flex items-center gap-2">
              <FiMail size={16} /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sundancercafe.example"
              required
              className="w-full px-4 py-3 border-2 border-sand-dark rounded-lg focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-charcoal flex items-center gap-2">
              <FiLock size={16} /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border-2 border-sand-dark rounded-lg focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
            />
          </div>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 font-bold disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-sand-dark text-center">
          <p className="text-charcoal-soft text-sm mb-3">Demo Credentials:</p>
          <p className="text-xs font-mono bg-sand p-2 rounded mb-2">admin@sundancercafe.example</p>
          <p className="text-xs font-mono bg-sand p-2 rounded">ChangeMe123!</p>
        </div>
      </div>
    </div>
  );
}
