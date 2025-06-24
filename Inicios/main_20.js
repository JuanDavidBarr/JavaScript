/*Se ingresan las notas de 5 estudiantes. 
• Por cada estudiante, si la nota es menor a 3, se le muestra que está en riesgo. 
• Al final, muestra: 
o Promedio general 
o Número de estudiantes en riesgo 
o Mayor y menor nota*/
function inputScores(){
    let studentsScore = {};
    let addMoreStudents = true;
    let score;
    while(addMoreStudents){
        let name = prompt("name");
        let notNumber = true;
        while(notNumber){
            score = prompt("score");
            if(isNaN(score) || score > 5 || score < 0){
                console.warn("Please, valid values only");
            } else{
                notNumber = false;
                score = parseFloat(score);
            }
        }

        let isOnList = false;
        if(name in studentsScore){
            console.warn(`${name} is already in the list`);
            isOnList = true;
        } else{
            studentsScore[name] = score;
        }
        console.log(studentsScore);   
        
        if(score < 3 && !isOnList){
            console.warn(`Score below 3, the student must improve their performance`);
        }

        let flag = true;
        while(flag){
            let answer = prompt("Do you want to add another student?");
            answer = answer.toLowerCase();
            if (answer == "yes"){
                flag = false;
            } else if (answer == "no"){
                addMoreStudents = false;
                flag = false;
            } else {
                console.warn("Please, 'yes' and 'no' answers only");
            }
        }            
    }
    return studentsScore;
} 

function average(scores){
    let sumScores = 0;
    let average;
    let totalScores = Object.keys(scores);
    let scoreList = [];
    if (totalScores.length === 0){
        console.warn("There are no scores to calculate");
        return;
    } else{
       for (const key in scores) {
        let score = scores[key];
        scoreList.push(score);
       }
       scoreList.forEach(score => {
            sumScores += score;
        });
    console.log(sumScores);
    average = sumScores / scoreList.length;
    console.info(`The general average is ${average}`)
    }  
}

function lowPerformanceStudents(scores){
    let scoreList = [];
    let lowScoresList = [];
    for (const key in scores) {
        let score = scores[key];
        scoreList.push(score);
    }
    for (const element of scoreList) {
        if(element < 3){
            lowScoresList.push(element);
        }
    }
    console.info(`There are/is ${lowScoresList.length} student(s) with low performance`)
}

function maxMinScore(scores){
    let scoreList = [];   
    for (const key in scores) {
        let score = scores[key];
        scoreList.push(score);
    }
    let highestScore = Math.max(...scoreList);
    let lowestScore = Math.min(...scoreList);
    console.info(`The highest score is ${highestScore} and the lowest score is ${lowestScore}`)   
}

let scoresObject = inputScores();
average(scoresObject);
lowPerformanceStudents(scoresObject);
maxMinScore(scoresObject);


