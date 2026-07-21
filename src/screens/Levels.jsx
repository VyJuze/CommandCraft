import { exercises } from "../data/exercises.js";
import { useGame } from "../context/GameProvider.jsx";
import { LevelCard } from "../components/ui/LevelCard.jsx";
import { getTotalXpByCategory } from "../utils/xpSystem.js";
import { motion } from "motion/react";



export const Levels = () => {
  const { state, dispatch } = useGame();
  const categories = Object.keys(exercises);

  return (
    <div className="min-h-screen bg-fondo p-8">
      <div className="mb-10">
        <motion.h3
          className="text-2xl font-monospace border-l-primarioverde border-l-4 px-1 font-bold mb-4 text-start text-primarioverde text-shadow-black text-shadow-md"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Category Selection
        </motion.h3>

        <motion.h1
          className="text-5xl font-monospace font-bold mb-4 text-textoprincipal text-shadow-black text-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          Select a category
        </motion.h1>

        <motion.p
          className="text-lg mb-8 text-textosecundario text-shadow-black text-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          There are four categories to explore, each with its own set of
          challenges. Choose one to start your journey in mastering Minecraft
          commands.
        </motion.p>
      </div>

      <button
        onClick={() => dispatch({type: "resetProgress"})}
        className="font-monospace text-xs text-error uppercase
        tracking-widest hover:text-textoprincipal transition-colors cursor-pointer"
      >
        Reset Progress
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          return (
            <LevelCard
              key={category}
              category={category}
              completeIds={state.completedExercises[category]}
              xpEarned={getTotalXpByCategory(
                state.completedExercises,
                category,
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
