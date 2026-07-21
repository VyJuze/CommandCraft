import {useNavigate} from "react-router"
import { motion } from "motion/react"
import { exercises } from "../../data/exercises.js"
import { CompletionBar } from "./CompletionBar.jsx"
import {Button} from "./Button.jsx"
import building_image from "../../assets/building_image.jpg";
import entiti_image from "../../assets/entiti_image.jpg";
import img_basic from "../../assets/img_basic.jpg"
import movement_image from "../../assets/movement_image.jpg"

const CATEGORY_CONFIG = {
  "comandos_basicos": {
    label: "Basic Commmands",
    subtitle: "Learn the essential commands",
    image: img_basic,
  },
  entidades: {
    label: "Entities",
    subtitle: "Mobs and summons",
    image: entiti_image,
    
  },
  movimiento: {
    label: "Movement",
    subtitle: "Teleport and navigate",
    image: movement_image
  },
  construccion:{
    label: "Building",
    subtitle: "Fill, clone and place",
    image: building_image
  }

}

export const LevelCard = ({category, completeIds, xpEarned}) => {
  const navigate = useNavigate()
  const config = CATEGORY_CONFIG[category]
  const total = exercises[category].length
  const completed = completeIds.length
  const percent = total === 0 ? 0 : Math.round((completed/total) * 100)

  const ctaLabel = percent === 100 ? "Play Again" : completed > 0 ? "continue" : "Start"

  return (
    <motion.div
      whileHover={{y: -4}}
      whileTap={{scale: 0.98}}
      onClick={() => navigate(`/game/${category}`)}
      className="cursor-pointer flex flex-col border border-bordesecundario w-full"
      >

      <div className="h-60 border-b border-bordesecundario overflow-hidden">
        <img
        src={config.image}
        alt={config.label}
        className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col p-4 gap-2">

        <div>
          <p className="font-display text-2xl font-bold uppercase text-textoprincipal tracking-wide">
            {config.label}
          </p>
          <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest mt-1">
            {config.subtitle}
          </p>
        </div>

        <CompletionBar percent={percent}/>

        <div className="flex items-center justify-between">
          <span className="font-monospace text-xs text-textosecundario uppercase">
            {completed } / {total} exercises
          </span>
          <span className="font-monospace text-xs text-primarioverde uppercase">
            +{xpEarned} XP
          </span>
        </div>
        
        <Button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/game/${category}`)
          }}
        >
          {ctaLabel}
        </Button>
      </div>
      </motion.div>
  )
}