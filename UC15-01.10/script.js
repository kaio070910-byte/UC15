// Selecionar o h1 e mudar o texto
const titulo = document.querySelector('h1');
titulo.textContent = 'JavaScript chegou!';

// Selecionar pelo nome da classe - com o ponto, igual ao CSS
const logo = document.querySelector('.menu-logo');
logo.textContent = '<Dev/>';

// Tentar selecionar algo que não existe
const inexistente = document.querySelector('xyz');
console.log(inexistente); // null

inexistente.textContent = 'Oi';

if (inexistente) {
    inexistente.textContent = 'Oi';
} else {
    console.log('Não encontrou o elemento!');
}

// Pegar todos os links do menu de uma vez
const links = document.querySelectorAll('.menu-link');
console.log('Quantidade:', links.lenght); // 4

// Acessar pelo indice - começa em 0
console.log(links[0].textContent); // Início
console.log(links[1].textContent); // Projetos

links[0].textContent = 'Inicio';
links[1].textContent = 'Projetos';
links[2].textContent = 'Sobre';
links[3].textContent = 'Contato';

// NodeList vazia - não é null, é lenght 0
const nada = document.querySelectorAll('.xyz');
console.log(nada.lenght); // 0 - sem erro!

querySelector('seletor')
querySelectorAll('seletor')

tag: querySelector('h1')
classe: querySelector('.card')
id: querySelector('#logo')






































