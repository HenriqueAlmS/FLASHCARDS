const perguntas = [

{
pergunta:"Quem é a protagonista do Digital Circus?",
resposta:"Pomni."
},

{
pergunta:"Quem é o apresentador do circo?",
resposta:"Caine."
},

{
pergunta:"Quem acompanha Caine em várias cenas?",
resposta:"Bubble."
},

{
pergunta:"Quem é o personagem mais sarcástico?",
resposta:"Jax."
},

{
pergunta:"Quem tenta sempre ajudar os amigos?",
resposta:"Ragatha."
},

{
pergunta:"Quem possui um corpo formado por peças diferentes?",
resposta:"Zooble."
},

{
pergunta:"Quem usa máscaras de comédia e tragédia?",
resposta:"Gangle."
},

{
pergunta:"Em que mundo os personagens estão presos?",
resposta:"Em um mundo digital."
},

{
pergunta:"Qual é o nome completo da série?",
resposta:"The Amazing Digital Circus."
},

{
pergunta:"Quem criou a série?",
resposta:"Gooseworx."
},

{
pergunta:"Qual estúdio produz a animação?",
resposta:"GLITCH."
},

{
pergunta:"Qual é o objetivo dos personagens?",
resposta:"Encontrar uma maneira de escapar do mundo digital."
}

];

const flashcard = document.getElementById("flashcard");

const titulo = document.getElementById("tituloQuestao");

const pergunta = document.getElementById("pergunta");

const resposta = document.getElementById("resposta");

let indice = 0;

let mostrandoResposta = false;

function atualizar(){

    titulo.innerHTML = `Questão ${indice+1} de ${perguntas.length}`;

    pergunta.innerHTML = perguntas[indice].pergunta;

    resposta.innerHTML = perguntas[indice].resposta;

}

atualizar();

flashcard.addEventListener("click",()=>{

    if(!mostrandoResposta){

        flashcard.classList.add("flip");

        mostrandoResposta=true;

    }

    else{

        flashcard.classList.remove("flip");

        mostrandoResposta=false;

        indice++;

        if(indice>=perguntas.length){

            indice=0;

        }

        setTimeout(atualizar,400);

    }

});