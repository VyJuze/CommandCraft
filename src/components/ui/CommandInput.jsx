import {useState} from "react";
import {motion} from "motion/react"
import {Input} from "./Input";
import {Button} from "./Button";

export const CommandInput = ({onSubmit, feedback}) => {
  const [value, setValue] = useState("")

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }
  function handleSubmit(){
    if(!value.trim()) return
    onSubmit(value)
    setValue("")
  }

  return(
    <div className="flex flex-col gap-3">
      <motion.div
        animate={
          feedback === "incorrect" ? { x:[0, -8, 8, -6, 6, 0]}
          : feedback === "correct" ? { scale:[1, 1.02, 1]}
          : {}
        }
        transition={{duration: 0.4}}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your command here"
        />
      </motion.div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
} 