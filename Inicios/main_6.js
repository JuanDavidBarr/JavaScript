/* Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba,
aprueba o tiene excelente desempeño. */
const score = prompt("What grade did you get?")
if (score < 3 && score >=0){
    console.log("You failed")
} else if (score >= 3 && score < 4.5){
    console.log("You passed")
} else if (score >= 4.5 && score <=5){
    console.log("Your performance was great")
} else if (score > 5 || score < 0){
    console.log(`${score} is not allowed`)
}