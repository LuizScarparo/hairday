import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //obtem data do input
    const date = selectedDate.value

    //busca na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    //exibe os agendamentos
    schedulesShow({ dailySchedules })

    //renderiza as horas disponiveis
    hoursLoad({ date, dailySchedules })
}