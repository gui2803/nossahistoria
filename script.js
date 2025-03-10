const dataInicio = new Date("2025-02-22T19:30:00"); // Data inicial do namoro

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    // Cálculo de anos, meses e dias
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Exibir anos, meses e dias
    document.getElementById("contadorAnos").innerText =
        `${anos} anos, ${meses} meses e ${dias} dias`;

    // Cálculo de horas, minutos e segundos
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    // Exibir horas, minutos e segundos
    document.getElementById("contadorHoras").innerText =
        `${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    // Atualizar a cada 1 segundo
    setTimeout(atualizarContador, 1000);
}

function alternarTema() {
    // Alterna a classe do tema
    document.body.classList.toggle("dark-mode");

    // Salva o tema no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

// Ao carregar a página, verifica o tema salvo
window.onload = () => {
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("dark-mode");
    }
    atualizarContador();
};
