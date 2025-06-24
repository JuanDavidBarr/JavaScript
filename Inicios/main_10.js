/* Un restaurante ofrece menús dependiendo del día de la semana. Escribe una
lógica que, según el día, muestre qué menú hay disponible. */
let dayOfWeek = prompt("Introduce the day of the week");
if (!isNaN(dayOfWeek)){
    console.error("Numbers are not allowed!");
    alert("Numbers are not allowed!");
} else {
    dayOfWeek = dayOfWeek.toLocaleLowerCase();
    if (dayOfWeek != "monday" && dayOfWeek != "tuesday" && dayOfWeek != "wednesday" && dayOfWeek != "thursday" && dayOfWeek != "friday" && dayOfWeek != "sunday" &&  dayOfWeek != "saturday"){
        console.error("Entry is not a day of the week");
        alert("Entry is not a day of the week");
    }
    else if (dayOfWeek == "monday" || dayOfWeek == "tuesday" || dayOfWeek == "wednesday" || dayOfWeek == "thursday" || dayOfWeek == "friday"){
        console.info("Today's menu is weekdays menu:\n Starters: Empanadas\n Main course: Chicken with side salad\n Dessert: Ice cream");
    }
    else {
        console.info("Today's menu is weekend menu:\n Starters: Tacos\n Main course: beef with french fries\n Dessert: Lemon cheese cake")
    }
}




 