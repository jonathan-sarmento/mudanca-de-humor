const person = {
    nome: 'gato de Schrodinger',
    estado: true,// vivo=true, morto=false
    img: 'https://blog.biologiatotal.com.br/wp-content/uploads/2019/04/destaque-gato-schrodinger.jpg'
}

const elementoNome = document.getElementsByClassName('nome');

for (const elemento of elementoNome) {elemento.innerHTML = person.nome;}



function atualizarEstado(){
    const elementoImagem = document.getElementById('imagem');
    const elementoEstado = document.getElementById('estado');

    if(person.estado){
        elementoImagem.alt = 'gato-vivo';
        elementoEstado.innerHTML = 'vivo';
    }else {
        elementoImagem.alt = 'gato-morto';
        elementoEstado.innerHTML = 'morto';
    }
}

atualizarEstado();

const elementoAlterar = document.getElementById('alterarEstado');
elementoAlterar.addEventListener('click', function() {
    person.estado = !person.estado;

    elementoAlterar.style = person.estado ? 'background-color: rgb(105, 174, 253);' : 'background-color: rgb(253, 186, 60);'

    atualizarEstado();
});