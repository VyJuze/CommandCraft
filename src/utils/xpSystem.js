const xpPorNivel = 40;

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
