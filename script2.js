//Meu primeiro passo é tentar me conectar com a API

//Qual o endereço da API? 

//Endereço fixo da API no meu sistema
const API_URL = "https://cadastro-alunos-api.onrender.com";

//Função assíncrona para acessar o primeiro endpoint lá da API retorna uma lista de alunos
async function retornarAlunosDaApi(){

    //para fazer uma requisição com o JS eu uso o fetch
    let response = await fetch(API_URL + "/alunos",{//Passa a URL + o endpoint
        method: "GET" //Utiliza o verbo HTTP GET
    });

    //a reposta ela traz pra mim o status e objeto
    //status se deu certo ou errado
    //objeto é o conteúdo que ela traz no corpo dela, é um retorno
    if(response.ok){
        //.json() vai ler o json e transformar em objeto javaScript
        let listaAlunos = await response.json();
        console.log(listaAlunos);
        alert("Olhe o console, a request deu certo!");
    }
}
