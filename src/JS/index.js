const personagens = document.querySelectorAll('.personagem') ;
let personagem ; 

//Eu estou usando o forEach que é um laço que armazena todos os itens da class personagem

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0 , behavior: 'smooth'});


        }

        removerSelecaoDoPersonagem();

      

       
       
        personagem.classList.add('selecionado');

       

        MudarImagemDeSelecao(personagem);


        AlterartituloEDescricao(personagem);

    })
    
});

function AlterartituloEDescricao(personagem) {
    const nomepersona = document.getElementById('nome-personagem');
    nomepersona.innerText = personagem.getAttribute('data-name');

    const descricao = document.getElementById('descricao-personagem');
    descricao.innerText = personagem.getAttribute('data-description');
}

function MudarImagemDeSelecao(personagem) {
    const imagemPersonagemgrande = document.querySelector('.personagem-grande');

    const idpersonagem = personagem.attributes.id.value;
    console.log(idpersonagem);
    imagemPersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;
}

function removerSelecaoDoPersonagem(){
    const personagemSelecionado = document.querySelector('.selecionado')  
    personagemSelecionado.classList.remove('selecionado');


}

