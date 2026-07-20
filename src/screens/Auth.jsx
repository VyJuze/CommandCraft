import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email.trim() || !password.trim()) return;
    setLoading(true);
    setError(null);

    const { error } =
      mode === "login"
        ? await signIn(email, password)
        : await signUp(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="min-h-screen bg-fondo flex items-center justify-center p-8">
      <motion.div
        className="w-full max-w-sm flex flex-col gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <p className="font-monospace text-xs text-primarioverde uppercase tracking-widest mb-2">
            CommandCraft
          </p>
          <h1 className="font-display text-4xl font-bold text-textoprincipal">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
              Email
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="****"
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-monospace text-xs text-error"
            >
              {error}
            </motion.p>
          )}

          <Button
            onClick={handleSubmit}
            className={loading ? "opacity-60 cursor-not-allwoed" : ""}
          >
            {loading ? "Loading..." : mode === "login" ? "Sign In" : "Sign Up"}
          </Button>
        </div>

        <p className="font-monospace text-xs text-textosecundario text-center">
          <button
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError(null);
            }}
            className="text-primarioverde hover:underline cursor-pointer"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};
