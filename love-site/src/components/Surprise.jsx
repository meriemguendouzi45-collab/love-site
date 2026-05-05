import { useState } from "react";

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setShow(true)}
        className="bg-pink-500 text-white px-4 py-2 rounded-full"
      >
        🎁 Clique ici
      </button>

      {show && (
        <p className="mt-4 text-pink-500 text-lg">
          je t'aime trop Habibi… tu es toute ma vie 💖
        </p>
      )}
    </div>
  );
}