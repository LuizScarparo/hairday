import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById('client')
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

    try {
        //recupera o nome do cliente
        const name = clientName.value.trim()

        if(!name) {
            return alert("informe o nome do cliente")
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected) {
            return alert("selecione um horario")
        }

        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        console.log(hour)


        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        console.log(when)

        //gera um id
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when,
        })
    } catch (err) {
        alert('nao foi possivel concluir o agendamento')
        console.log(err)
    }
}