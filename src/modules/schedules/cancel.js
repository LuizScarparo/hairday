import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedules-cancel.js"

const periods = document.querySelectorAll(".period")

//gera evento de clique para cada lista - manha tarde noite

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            //pega o id do agendamento para remover
            const { id } = item.dataset

            //confirma cancelamento
            if(id) {
                const isConfirm = confirm("tem certeza que deseja remover o agendamento?")
                
                //faz requisiç]ao na API pra cancelar
                if(isConfirm) {
                    await scheduleCancel({ id })
    
                    //reseta a lista
                    schedulesDay()
                }
            }

        }
    })
})