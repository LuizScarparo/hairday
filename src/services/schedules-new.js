import { apiConfig } from "./api-config.js"

export async function scheduleNew( { id, name, when }) {
    try {
        //requisicao pra enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })
        //exibe mensagem de conclusao
        alert('agendamento realizado com sucesso')
    } catch (error) {
        console.log(error)
        alert('nao foi possivel agendar, tente novamente mais tarde')
    }
}