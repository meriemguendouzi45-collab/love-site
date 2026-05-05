import { useEffect, useState } from "react";

export default function Hearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-pink-400 animate-float"
          style={{ left: `${h.left}%`, bottom: 0 }}
        >
          💖
        </div>
      ))}
    </div>
  );
}