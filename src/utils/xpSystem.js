const xpPorNivel = 40;
import {exercises} from "../data/exercises.js"

export const calcularNivel= (totalXp) => {
  return Math.floor(totalXp / xpPorNivel ) + 1;

}

export const progresoNivelActual = (totalXp) =>{
  return {
    xpActual: totalXp % xpPorNivel,
    xpNecesario: xpPorNivel
  }
}

export const calcularFaltante = (totalXp) => {

  return xpPorNivel - (totalXp % xpPorNivel);
  
}

export const getTotalXpByCategory = (completedExercises, category) => {
  return completedExercises[category].reduce((total, id) => {
    const exercise = exercises[category].find((e) => e.id === id) 
    return total + (exercise ? exercise.xp : 0);
  }, 0);

}

export const getTotalXp = (completedExercises) => {
  return Object.keys(completedExercises).reduce((total, category) => {
    return total + getTotalXpByCategory(completedExercises, category);
  }, 0);
}