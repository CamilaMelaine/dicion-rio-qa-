function carregaDicionario() {

    let conceitos = {
        conceito01: {
            nome: "Teste de caixa branca",
            imagem:"teste caixa branca.png",
            descricao: "É usado para testar um sistema de software com base na sua arquitetura. Esse tipo de abordagem serve para testar cada módulo do sistema de acordo com seu código. Pode ser feito pelos próprios desenvolvedores ou QAs técnicos que entendam da estrutura do projeto. Um exemplo de testes de caixa branca são: teste unitário, de integração de módulos e de serviço (API)."
       },

        conceito02: {
            nome: "Teste de caixa preta",
            imagem: "teste caixa preta.png",
            descricao: "O teste de caixa preta é usado para testar a funcionalidade do sistema, independentemente de seu código. Seu objetivo principal é garantir que os requisitos sejam atendidos. Por exemplo: testes funcionais e regressivos.",
        },

        conceito03: {
            nome: "Pirâmide de testes",
            imagem: "piramide de teste.png",
            descricao: "A pirâmide de testes é importante porque define níveis de testes e nos dá um norte quanto à quantidade de testes necessários em cada um dos níveis. No topo, temos os testes de ponta a ponta, no meio, teste de integração e na base, testes de unidade. Precisamos lembrar que a base da pirâmide compreende testes mais fáceis e rápidos para executar, enquanto o topo, mais difíceis e lentos."

        },

        conceito04: {
            nome: "Reporte de bugs",
            imagem:"reporte de bug.jpg",
            descricao: "Consiste em descrever bem o bug de forma precisa a fim que todo o time consiga reproduzi-lo classificamos bugs no sistema por severidade. Então, eles se dividem em: blockers (que bloqueiam nossos testes), críticos e graves, moderados e pequenos. Especificamos a severidade no nosso plano de teste, considerando o impacto deles no sistema.",
        },

        conceito05: {
            nome: "Casos de testes",
            imagem:"caso de teste.jpg",
            descricao: "Tem várias maneiras de fazer esse caso de teste. Mas é sempre importante seguir um passo a passo com coisas que são sempre importantes de detalharmos para informar as pessoas nesses casos de teste e para facilitar nossa vida também na hora de fazer o nosso caso de teste. A primeira coisa é que é bom que o nosso caso de teste tenha um nome exclusivo para ele para identificá-lo, que é o nome entalhar no nosso caso de teste são as nossas pré-condições, ou seja, o que precisamos ter antes de começar o nosso teste.",

        },

        conceito06: {
            nome: "Fluxo de teste e Tabela de decisão",
            imagem: "teste.png",
            descricao: "Uma boa forma de estruturar esse nosso pensamento é fazer um fluxo de todas as coisas que precisamos testar.Uma outra forma para mapear seus testes é através da tabela de decisão. Ao invés de criar um fluxo, podemos expressar o conjunto de condições em forma de tabela. Cada condição (regra de negócio) é colocada em uma linha, geralmente no topo, e os resultados nas linhas inferiores. Assim, cada coluna vira um conjunto de condições e seus resultados, ou seja, cada coluna é um teste."
        },
    };

    var content = document.getElementById("content");

    for (var chave in conceitos) {
      let conceito = conceitos[chave];
      content.innerHTML += 
        '<div class="card">' + 
        '<img src="'
          + conceito.imagem +
          '"/>' + 
          '<details>' +
           '<summary>' + 
           conceito.nome + 
           "</summary>" + 
           "<p>"+
           conceito.descricao +
           "</p>" +
           "<blockquote><q>" +
           "</q><blockquote>" +
           "</details>" +
           "</div'>";  
    }
}

carregaDicionario();