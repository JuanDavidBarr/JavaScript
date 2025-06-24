// Una app de transporte da recomendaciones dependiendo de:
// • La hora del día (mañana, tarde, noche)
// • El clima (soleado, lluvioso, nublado)
// • Si el usuario tiene paraguas o no
// Dependiendo de esas variables, sugiere si caminar, tomar bus, o esperar.
function setting(){
    let todayUmbrella = true;
    console.info("Analysing today's conditions...")
    let criteriaForRecommendation = {
        time: ["morning", "afternoon", "night"],
        weather: ["sunny", "rainy", "cloudy"]
    }
    let todayTime = criteriaForRecommendation.time[Math.floor(Math.random() * 3)];
    let todayWeather = criteriaForRecommendation.weather[Math.floor(Math.random() * 3)];
    todayUmbrella = prompt("Are you carrying a umbrella right now? (yes/no)");
    switch (todayUmbrella) {
        case "yes":
            todayUmbrella = true;
            break;
        case "no":
            todayUmbrella = false;
            break;
        default:
            console.error("Please, yes/no only")
            break;
    }

    let todayCriteria = [todayTime, todayWeather, todayUmbrella];
    console.info(`Todays' conditions are:\nTime: ${todayTime}\nWeather: ${todayWeather}`)
    return todayCriteria;
}

function recomendation(todayCriteria) {
    console.info(`${todayCriteria[0]} ${todayCriteria[1]} ${todayCriteria[2]}`)
    if (todayCriteria[0] == "night" || todayCriteria[1] == "rainy"){
        console.info("We suggest you take the bus")
    } else if ((todayCriteria[0] == "morning" || todayCriteria[0] == "afternoon") && (todayCriteria[1] == "sunny"|| todayCriteria[2] == true)){
        console.info("We suggest you take a walk")
    } else {
        console.info("We suggest you wait")
    }
}


recomendation(setting());