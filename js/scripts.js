const boxQuestion = document.querySelectorAll(".box-question");

boxQuestion.forEach((pregunta) =>{
    const iconMinus = pregunta.querySelector(".icon-minus");
    const iconPlus = pregunta.querySelector(".icon-plus");
    
    let respuesta = pregunta.querySelector(".answer");

    pregunta.addEventListener("click", () =>{
        document.querySelectorAll(".answer").forEach((respuesta) =>{
            respuesta.classList.remove("visible");
            respuesta.previousElementSibling.querySelector(".icon-minus").style.display = "none";
            respuesta.previousElementSibling.querySelector(".icon-plus").style.display = "block";
        });

        respuesta.classList.toggle("visible");
        if (respuesta.classList.contains("visible")){
            iconMinus.style.display = "block";
            iconPlus.style.display = "none";
        } else {
            iconMinus.style.display = "none";
            iconPlus.style.display = "block";
        }
    });
});
