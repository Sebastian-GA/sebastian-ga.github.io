function validarDatos() {
    window.event.preventDefault();

    if (document.form.name.value == "") {
        alert("El campo nombre es obligatorio");
        document.form.name.focus();
    } else if (document.form.email.value == "") {
        alert("El campo e-mail es obligatorio");
        document.form.email.focus();
    } else if (document.form.subject.value == "") {
        alert("El campo asunto es obligatorio");
        document.form.subject.focus();
    } else if (document.form.message.value == "" || document.form.message.value.length >= 50) {
        alert("El campo mensaje es obligatorio y debe contener máximo 50 carateres");
        document.form.message.focus();
    } else if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1) {
        alert("e-mail inválido");
    }
}
document.querySelector("form").addEventListener("submit", validarDatos);
