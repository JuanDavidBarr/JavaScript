/*. Un semáforo tiene tres colores. Dependiendo del color, se debe mostrar una
acción: avanzar, detenerse o esperar.*/
let LightColor = prompt("Please, introduce a color among yellow, green and red");
LightColor = LightColor.toLocaleLowerCase();
if (LightColor != "yellow" && LightColor != "green" && LightColor != "red"){
    console.error("Please, valid colors only!");
    alert("Please, valid colors only");
} else {
    if (LightColor == "red"){
        console.warn("You shall not pass");
        alert("You shall not pass");
    } else if (LightColor == "yellow"){
        console.warn("You must slow down");
        alert("You must slow down");
    } else if (LightColor == "green"){
        console.warn("Go ahead");
        alert("Go ahead");
    }
}
