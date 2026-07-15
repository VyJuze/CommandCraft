import {motion, AnimatePresence} from "motion/react"

export const ExerciseCard = ({prompt, hint, showHint, attempts}) => {
  return (
    <div className={"bg-tarjetas border border-bordesecundario p-6 flex flex-col gap-4"}>
      
      <p className="font-monospace text-xs text-primarioverde uppercase tracking-widest">
        Challenge 
      </p>

      <p className="font-display text-xl font-bold text-textoprincipal leading-snug">
        {prompt}
      </p>

      {attempts === 1 && (
        <p className="font-monospace text-xs text-error">
          One more wrong answer and you will get a hint
        </p>
      )}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{opacity:0, height: 0}}
            animate={{opacity:1, height:"auto"}}
            exit={{opacity:0, height: 0}}
            transition={{duration: 0.3, ease: "easeOut"}}
            className="overflow-hidden"
          >
            <div className="border-1-2 border-primarioverde pl-3 mt-2">
              <p className="font-monospace text-xs text-textosecundario">
                Hint: {hint}
              </p>
            </div>
              
          </motion.div>
        )}

      </AnimatePresence>


    </div>
  )
}