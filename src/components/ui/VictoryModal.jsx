import {exercises } from "../../data/exercises"
import {useGame} from "../../context/GameProvider"
import {getTotalXpByCategory} from "../../utils/xpSystem"
import {Button} from "./Button"
import {Modal} from "./Modal"

export const VictoryModal = ({category, onClose}) => {
  const {state} = useGame()
  const totalExercises = exercises[category].length
  const xpEarned = getTotalXpByCategory(state.completedExercises, category)

  return (
    <Modal onClose={onClose}>
      <span className="text-5xl">🏆</span>

      <div>
        <p className="font-display text-3xl font-bold uppercase text-textoprincipal mb-2">
          Category Completed :)
        </p>
        <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
          {totalExercises} exercises solved
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-monospace text-2xl font-bold text-primarioverde">
          +{xpEarned} XP
        </span>
        <span className="font-monospace text-xs text-textosecundario uppercase">
          earned
        </span>
      </div>

      <Button onClick={onClose}>Back to levels</Button>
    </Modal>
  )
}