import { schedulesDay } from "../schedules/load.js"

//seleciona um input de data
const selectedDate = document.getElementById("date")

//recarrega a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDay()