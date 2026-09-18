function mostrarnome() {
   const nomeInput = document.getElementById("nome");
    const resultado = document.getElementById("resultado");

}

let contador = 0;

function aumentar() {
    contador++;
    document.getElementById("numero").textContent = contador;

}

function diminuir() {
    contador--;
    
    document.getElementById("numero").textContent = contador;
}