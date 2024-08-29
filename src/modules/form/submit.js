import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedules-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById('client')
const selectedDate = document.getElementById("date")

//pega a data de hoje
const inputToday = dayjs(new Date()). format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//definir a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
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

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gera um id
        const id = new Date().getTime()

        //faz agendamento
        await scheduleNew({
            id,
            name,
            when,
        })
        //recarrega os agendamentos
        await schedulesDay()
        //limpa o campo do nome do input
        clientName.value = ""

    } catch (err) {
        alert('nao foi possivel concluir o agendamento')
        console.log(err)
    }
}