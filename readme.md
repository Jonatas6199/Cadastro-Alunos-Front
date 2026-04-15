# Gerar código para comunicar com API

Para esta atividade, vocês precisam apenas implementar o arquivo script.js

### Pontos de atenção

* O sistema deve listar os alunos cadastrados no carregamento da tela
* O sistema deve listar os alunos cadastrados ao cadastrar um novo aluno

### Utilize o modelo abaixo para fazer requisições do tipo ```GET```

```javascript
//Buscar registro da API para preencher a tabela
async function buscarDados(){
    
    //Faz a requisição
     let response = await fetch("minhaapi/listar",{
        method: "GET"
    });
    if(response.status == 200){

        const alunos = response.json();
        //preencher a tabela
    }
}
```
### Utilize o modelo abaixo para fazer requisições do tipo ```POST```

``` javascript
 let response = await fetch(API_URL + "/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    });
```
