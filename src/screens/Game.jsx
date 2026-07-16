import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { exercises as Exercises} from "../data/exercises.js";
import { useGame } from "../context/GameProvider";
import { validateCommand } from "../utils/commandValidator.js";
import { CommandInput } from "../components/ui/CommandInput.jsx";
import { VictoryModal } from "../components/ui/VictoryModal.jsx";


export const Game = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useGame();

  const exercises = Exercises[categoria] ?? [];
  const completedIds = state.completedExercises[categoria] ?? [];

  const [currentIndex, setCurrentIndex] = useState(() => {
    const firstPending = exercises.findIndex(
      (e) => !completedIds.includes(e.id),
    );
    return firstPending === -1 ? 0 : firstPending;
  });

  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showVictory, setShowVictory] = useState(false);

  const exercise = exercises[currentIndex];
  const showHint = attempts >= 2;

  function handleSubmit(input) {
    const isCorrect = validateCommand(input, exercise.accepted);

    if (isCorrect) {
      dispatch({
        type: "completeExercise",
        payload: { category: categoria, exerciseId: exercise.id },
      });
      setFeedback("correct");
      setAttempts(0);

      setTimeout(() => {
        setFeedback(null);
        const nextIndex = currentIndex + 1;
        if (nextIndex >= exercises.length) {
          setShowVictory(true);
        } else {
          setCurrentIndex(nextIndex);
        }
      }, 800);
    } else {
      setAttempts((a) => a + 1);
      setFeedback("incorrect");
      setTimeout(() => setFeedback(null), 600);
    }
  }

  if (!exercises.length) {
    return (
      <div className="h-full bg-fondo flex items-center justify-center">
        <p className="text-textosecundario font-monospace">
          Category not found
        </p>
      </div>
    );
  }

  return (
    <div className="h-full bg-fondo flex flex-col">
      <header className="flex items-center justify-between px-6 py-3 border-b border-bordesecundario bg-tarjetas">
        <button
          onClick={() => navigate("/levels")}
          className="flex items-center gap-2 font-monospace text-xs text-textosecundario uppercase tracking-widest hover:text-primarioverde transition-colors cursor-pointer"
        >
          Back to levels
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primarioverde animate-pulse"/>
          <span className="font-monospace text-xs text-primarioverde uppercase tracking-widest">
            System ready
          </span>
        </div>

        <span className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
          {currentIndex +1} / {exercises.length}
        </span>
      </header>

      <div className="flex flex-col lg:flex-row flex-1 gap-0">
        <aside className="lg:w-72 xl:w-80 border-b lg:border-b-0 lg:border-r border-bordesecundario flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={exercise.id}
              className="flex flex-col flex-1 p-6 gap-6"
              initial={{opacity:0, x:-12}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x: -12}}
              transition={{duration: 0.3}}
            >

              <div>
                <p className="font-monospace text-xs text-primarioverde uppercase tracking-widest ,mb-3">
                  Challenge {currentIndex + 1}
                </p>
                <h2 className="font-display text-xl font-bold text-textoprincipal leading-snug">
                  {exercise.prompt}
                </h2>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-modal border border-bordesecundario p-4">
                      <p className="font-monospace text-xs text-primarioverde uppercase tracking-widest mb-2">
                        Hint
                      </p>
                      <p className="font-monospace text-xs text-textosecundario italic leading-relaxed">
                        "{exercise.hint}"
                      </p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {attempts === 1 && (
                  <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className="font-monospace text-xs text-error"
                  >
                    One more wrong attempt and you will get a hint
                  </motion.p>
                )}
              </AnimatePresence>
              
            </motion.div>
          </AnimatePresence>
        </aside>

        <main className="flex-1 flex flex-col p-6 gap-4">
          <div className="flex-1 bg-modal border border-bordesecundario flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-bordesecundario">
              <span className="w-3 h-3 rounded-full bg-error opacity-70"/>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-70"/>
              <span className="w-3 h-3 rounded-full bg-primarioverde opacity-70"/>

            </div>
            <div className="flex-1 p-4 font-monospace text-xs flex flex-col gap-2">
              <p>
                <span className="text-textosecundario">01</span>
                <span className="text-primarioverde ml-3">[System]</span>
                <span className="text-textosecundario ml-2">Conecting to server...</span>
              </p>
              <p>
                <span className="text-textosecundario">02</span>
                <span className="text-secundariomarron">[Admin]</span>
                <span className="text-textosecundario ml-2">Welcome back crafter. Input the correct command</span>
              </p>

              <AnimatePresence>
                {feedback === "incorrect" && (
                  <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity: 0}}
                  >
                    <span className="text-textosecundario">03</span>
                    <span className="text-error ml-3">[Error]</span>
                    <span className="text-textosecundario ml-2">Unknown command. Try again</span>
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {feedback === "correct" && (
                  <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                  >
                    <span className="text-textosecundario">03</span>
                    <span className="text-textosecundario">[System]</span>
                    <span className="text-textosecundario ml-2">Well done crafter</span>
                    
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-bordesecundario px-4 py-3">
              <CommandInput onSubmit={handleSubmit} feedback={feedback}/>
            </div>
            
          </div>
        </main>
      </div>

      <AnimatePresence>
        {showVictory && (
          <VictoryModal 
            category={categoria}
            onClose={() => navigate("/levels")}
          />
        )}
      </AnimatePresence>

    </div>
  );
};
