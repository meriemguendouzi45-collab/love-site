import { useState } from "react";
import { Link } from "react-router-dom";

export default function Secret() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const check = () => {
    if (input.trim().toLowerCase() === "habibi") {
      setOpen(true);
    } else {
      alert("💔 non… essaie encore mon amour");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">

      {/* 🔐 PAGE LOGIN */}
      {!open ? (
        <div className="bg-white/50 backdrop-blur-lg p-6 rounded-2xl shadow text-center w-full max-w-sm">

          <h2 className="text-pink-500 font-bold mb-4">
            🔐 Page secrète
          </h2>

          <input
            type="password"
            placeholder="Mot de passe..."
            className="border p-2 rounded w-full"
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={check}
            className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-full w-full"
          >
            OK
          </button>

          {/* 🔙 BACK BUTTON (LOGIN PAGE) */}
          <Link
            to="/"
            className="block mt-4 text-sm text-gray-500 underline"
          >
            ← Retour à l’accueil
          </Link>

        </div>
      ) : (
        /* 💖 PAGE OUVERTE */
        <div className="text-center space-y-5">

          <h1 className="text-3xl text-pink-500 font-bold">
            💖 Tu es mon habibi pour toujours 💖
          </h1>

          <img
            src="/IMG_7701.jpg"
            alt="us"
            className="rounded-2xl shadow-lg w-64 mx-auto"
          />

          {/* 🔙 BACK BUTTON (OPEN PAGE) */}
          <Link
            to="/"
            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full"
          >
            ← Retour à l’accueil
          </Link>

        </div>
      )}

    </div>
  );
}