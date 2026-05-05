import { useEffect, useState } from "react";

export default function Counter() {
  const start = new Date("2024-11-08");

  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = now - start;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    };

    update();
    setInterval(update, 1000);
  }, []);

  return (
    <p className="text-pink-500 mt-2">
      ⏳ {days} jours ensemble 💖
    </p>
  );
}