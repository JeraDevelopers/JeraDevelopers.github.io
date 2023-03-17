const WhatsappMessageSender = (text, sendButton) => {
    const message_input = document.getElementById(text)
    const button = document.getElementById(sendButton)
    let message = ""
    button.addEventListener("click", () => {

        if (message_input.value == "") {
            alert("Debe ingresar todos los datos.")
        } else {
            message = `https://api.whatsapp.com/send?phone=584129978441&text=${message_input.value.replaceAll(" ", "%20") }`
            window.open(message, "_blank").focus()
        }

    })
}

export default WhatsappMessageSender

