import {motion} from "motion/react"

export const Modal = ({children, onClose}) => {
  return(
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      onClick={onClose}
    >
      <motion.div
        className="bg-tarjetas border-2 border-primarioverde w-full max-w-sm p-8 flex flex-col gap-6 items-center text-center"
        initial={{scale:0.9, opacity:0}}
        animate={{scale:1, opacity:1}}
        exit={{scale:0.9, opacity:0}}
        transition={{duration: 0.3, ease: "easeOut"}}
        onClick={(e) => e.stopPropagation()}
        >
          {children}


      </motion.div>
    </motion.div>
  )
}