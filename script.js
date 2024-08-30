const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com as mudanças em nossas alimentações está cada vez mais modificado oque você acha nessa mudança? ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Com as mudanças e com a utilização da tecnologia, biotecnologia entre outras inteligências oque você acha de introduzir esse tipo de coisa na nossa alimentação?",
        alternativas: [
            {
                texto:"Pode ser utilizada para ter novas produções",
                afirmacao:"afirmacao"
            },
            {
                texto: "Não poderia ter por conta que está contaminando o Planeta Terrra ",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Como o uso de agrotóxicos deve ser gerenciado para garantir uma alimentação segura e sustentável no futuro? ",
        alternativas: [
            {
                texto:"Reduzir o uso de agrotóxicos por meio de regulamentações mais rigorosas e incentivo à agricultura orgânica.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Integrar tecnologias avançadas para monitoramento e controle preciso dos agrotóxicos, minimizando riscos à saúde e ao meio ambiente.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Qual é a melhor abordagem para garantir a segurança alimentar no futuro?",
        alternativas: [
            {
                texto:"Adoção de tecnologias avançadas, como a agricultura vertical e alimentos geneticamente modificados.",
                afirmacao:"afirmacao"
            },
            {
            texto:"Promoção de práticas agrícolas sustentáveis e dietas baseadas em alimentos locais e menos processados",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Qual estratégia é mais promissora para atender à crescente demanda por alimentos no futuro?",
        alternativas: [
            {
                texto: "Expansão da produção agrícola intensiva e uso de biotecnologia.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Incentivo à agricultura regenerativa e à redução do desperdício de alimentos.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Obrigada pelas respostas!...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();