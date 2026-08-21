const agora = new Date();
const hora  = agora.getHours();
const minutos = agora.getMinutes();
const minutosFormatados= String(minutos).padStart(2,'0');
const horaTexto = `${hora};${minutosFormatados}`;;

const pagina = document.getElementoById('pagina');
const emojiEl = document.getElementoById('emoji');
const saudacaoEl = document.getElementoById('saudacao');
const horarioEl = document.getElementoById('horario');

let turno = '';
let emojiStr = '';
let msg = '';          

if (hora >= 5 && hora < 12) {
    turno = 'manha';
    emojiStr = '';
    msg = 'bom dia!';



}else if (hora >=12 && hora < 18){
turno = 'tarde'
emojiStr = ''
msg = 'Boa tarde!'


}else if (hora >=18 && hora < 23){
turno = 'noite'
emojiStr = ''
msg = 'Boa noite!'

}else {
    turno = 'madrugada';
    emojiStr = '';
    msg = 'Boa Madrugada!';

}

pagina.classlist.add(turno);

emojiEl.textContent = emojiStr;
saudacaoEl.textContent = msg;
horarioEl.textContent = `São ${horaTexto}h`;

console.log(`Turno ${turno} | hora ${horaTexto}`);