import { Link } from "react-router-dom";
import Hearts from "../components/Hearts";
import Counter from "../components/Counter";
import Surprise from "../components/Surprise";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">

      
      <Hearts />

      <div className="card p-6 max-w-md w-full">

        <h1 className="text-3xl font-bold text-pink-500">
          Pour toi Habibi 💖
        </h1>

        <p className="mt-2">
          Depuis que t’es dans ma vie… tout est devenu plus beau 🌸
        </p>

        <Counter />
        <Surprise />

        <Link
          to="/story"
          className="block mt-6 bg-pink-500 text-white py-2 rounded-full"
        >
          Découvrir notre histoire →
        </Link>
          

          <Link
  to="/secret"
  className="text-xs text-pink-300 mt-6 block underline"
>
  🤫 secret
</Link>

      </div>
    </div>
  );
}