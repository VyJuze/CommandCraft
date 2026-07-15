import {motion} from "motion/react"

export const CompletionBar = ({percent}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-monospace text-xs text-textosecundario uppercase">
          completion
        </span>
        <span className="font-monospace text-xs text-primarioverde">
          {percent}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-modal">
        <motion.div
          className="h-full bg-primarioverde"
          initial={{width: 0}}
          animate={{width: `${percent}%`}}
          transition={{duration: 0.6, ease: "easeOut"}}
        />
      </div>
    </div>
  )
}