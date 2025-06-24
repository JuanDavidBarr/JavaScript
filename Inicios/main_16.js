/*Simula una encuesta donde el sistema pregunta la calificación del servicio (1 a 5). 
• Mientras la calificación no sea 5, sigue preguntando. 
• Muestra un mensaje de agradecimiento cuando por fin alguien califique con 5.*/
function satisfactionSurvey(){
    let score;
    do{
        score = prompt("From 1 to 5 (1 being very bad, and 5 being great) How would you rate our service?");
        switch (score) {
            case "1":
                console.info("Thank you for your answer, we will improve next time")
                break;
            case "2":
                console.info("Thank you for your answer, we will improve next time")
                break;
            case "3":
                console.info("Thank you for your answer, we will improve next time")
                break;
            case "4":
                console.info("Thank you for your answer")
                break;
            case "5":
                console.info("Thank you for your answer, It means a lot you enjoyed our service")
                break;
            default:
                console.error("Please, type a valid option (from 1 to 5)")
                break;
        }
    }
    while(score != "5");
}

satisfactionSurvey();