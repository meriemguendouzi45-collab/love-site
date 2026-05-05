import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const moments = [
  {
    title: "Le début 💫",
    text: "Tout a commencé le 8 novembre 2024… un début pas facile, rempli de défis et d’épreuves…",
  },
  {
    title: "Les difficultés 🤍",
    text: "Il y avait beaucoup de problèmes… mais malgré tout, on n’a jamais baissé les bras.",
  },
  {
    title: "Notre force ❤️",
    text: "Parce que notre amour était plus fort que tout… plus fort que les doutes, plus fort que les obstacles.",
  },
  {
    title: "Premier rendez-vous 🥺",
    text: "Et puis… le 5 février 2026, notre premier rendez-vous… un moment gravé à jamais dans mon cœur.",
  },
  {
    title: "Aujourd’hui 🌸",
    text: "Depuis ce jour… chaque instant avec toi est devenu précieux, doux et unique.",
  },
  {
    title: "Toi & moi 💖",
    text: "Habibi… avec toi je me sens en sécurité… c’est le plus beau sentiment au monde.",
  },
];

export default function Story() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">

      <h2 className="text-3xl font-bold text-center text-pink-500 mb-10">
        Notre histoire 💖
      </h2>

      <div className="max-w-md w-full relative border-l-2 border-pink-300 pl-6 space-y-10">

        {moments.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[14px] top-2 w-4 h-4 bg-pink-400 rounded-full shadow"></div>

            <div className="card p-5">
              <h3 className="text-pink-500 font-semibold text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700">{item.text}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* 🔙 BACK BUTTON */}
      <Link
        to="/"
        className="mt-10 bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        ← Retour à l’accueil
      </Link>

    </div>
  );
}