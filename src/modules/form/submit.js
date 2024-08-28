import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//pega a data de hoje
const inputToday = dayjs(new Date()). format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//definir a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento de recarregar a pagina ao enviar o form
    event.preventDefault()

    console.log("Enviado")
}