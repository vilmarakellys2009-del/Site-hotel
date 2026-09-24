const formulario = document.getElementById("reservaForm");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;
    const quarto = document.getElementById("quarto").value;
    const hospedes = document.getElementById("hospedes").value;

    // Verifica as datas
    if (saida <= entrada) {
        alert("A data de saída deve ser depois da data de entrada.");
        return;
    }

    // Dados da reserva
    const reserva = {
        nome: nome,
        email: email,
        entrada: entrada,
        saida: saida,
        quarto: quarto,
        hospedes: hospedes
    };

    // Salva a reserva no navegador
    localStorage.setItem("reservaHotel", JSON.stringify(reserva));

    // Mensagem de confirmação
    alert(
        "Reserva solicitada com sucesso!\n\n" +
        "Hóspede: " + nome + "\n" +
        "E-mail: " + email + "\n" +
        "Entrada: " + entrada + "\n" +
        "Saída: " + saida + "\n" +
        "Quarto: " + quarto + "\n" +
        "Hóspedes: " + hospedes
    );

    // Limpa o formulário
    formulario.reset();
});


// Recupera a última reserva salva
const reservaSalva = localStorage.getItem("reservaHotel");

if (reservaSalva) {
    console.log("Última reserva:", JSON.parse(reservaSalva));
}
