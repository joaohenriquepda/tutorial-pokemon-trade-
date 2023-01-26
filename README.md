# Pokemon Trade tutorial - TradeDEX

Dica: começa um repositório separado para esse projeto, faz agora no ínicio que pode facilitar para algumas coisas, principalmente para o readme do seu projeto 


## Primeiros passos
Vamos começar o projeto do zero e para inicializar a estrutura vamos  
criar uma pasta com o nome de tradex-pokemon-tutorial, entrando nessa pasta vamos precisar do terminal para rodar alguns comandos, então pelo terminal vamos acessar essa pasta e executar o seguinte comando:


```shell
$ npm init 
```


Esse comando vai criar o arquivo package.json, esse arquivo vai centralizar algumas informações do projeto. 
Agora vamos precisar criar as estruturas de pastas e arquivos, vamos começar criando uma pasta chamada de css e dentro dessa pasta vamos adicionar o arquivo `global.css` com o seguinte conteúdo:

```css

* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

body {
    background-color: #f6f8fc;
}

h1 {
    text-align: center;
    color: crimson;
}

.content {
    padding: 1rem;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
}

@media screen and (min-width: 992px) {
    .content {
        max-width: 992px;
        margin: 0 auto;
    }
}


```

Vamos adicionar o arquivo `index.html`, o conteúdo nesse início vai ser 


```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trade Pokemon by Rarity</title>

 <!-- Normalize CSS-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- Fonte: Roboto-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap" rel="stylesheet"> 

<!-- Nosso CSS-->
    <link rel="stylesheet" href="./css/global.css">
</head>
<body>
    <section class="content">
        <h1>TraDex Pokemon</h1>
    </section>
    <script src="./index.js">htt</script>
</body>
</html>
```



Outro arquivo que vamos precisar adicionar é o arquivo de `index.js`, esse arquivo vai ser importante pois vamos centralizar grande parte da lógica nele.

```javascript
(async function main() {

    console.log("List all pokemons")

})();
```


Para finalizar vamos deixar pronto mais uma estrutura de pastas para nossa organização. Vamos adicionar a pasta `js` e dentro dessa pasta vamos adicionar dois arquivos um `api.js` e o `functions.js`. Por enquanto vamos deixar sem conteúdo nesses dois aquivos


Com esses arquivos básicos já é possível ver o arquivo `index.html` mostrar uma página em branco e o log que vem do arquivo `index.js`.

Se chegou até aqui seria bem legal subir para o repositório o resultado obtido, um checkpoint da evolução.


#
## Evoluíndo o código

### - Adicionando elementos HTML
Dando seguimento a idéia, vamos começar adicionando alguns elementos na página de `index.html`, os elementos são o *input* e o *button*. Atenção para os *names* e *ids* dos elementos


```html
    <section class="content">
        <h1>TraDex Pokemon</h1>

         <input type="text" name="pokename" id="pokename" autocomplete="on"> <br>
        <button class="search" name="search" id="search">Pesquisar Pokemon</button>

    </section>
```

Com isso precisamos referenciar os valores desse campo no arquivo `index.js`, vamos adicionar no topo do arquivo as seguintes linhas:

``` javascript
const pokename = document.querySelector('[name="pokename"]');
const searchButton = document.getElementById('search');

```

### - Adicionado API

Para esse projeto vamos precisar emular um server API para facilitar nosso desenvolvimento, o pacote que vamos usar será o `json-server`, ele vai prover uma estrutura mínima de API para que possamos agilizar a solução do problema. Para instalar essa dependências vamos usar o :

```shell
$ npm install -install json-server
```

Com a instrução *install* a dependência vai ser registrada no package.json e quando precisar levar o projeto para outro computador já vamos ter a dependência lista e vamos poder instalar com facilidade usando somente. Quando a dependência for instalada uma nova pasta será criada, a *node_modules* centraliza os arquivos necessários, mas não precisamos ter essa pasta versionada no git. Para não subir esses arquivos por engano vamos precisar criar um arquivo na raiz do projeto que serve para o git ignorar essa pasta, vamos criar o *`.gitignore`*. O conteúdo desse arquivo é simples, basta adicionar o conteúdo abaixo e salvar, depois de salva essa pasta será ignorada pelas instruções do *git* 

```
node_modules
```

Com a dependência instalada vamos precisar de informações para alimentar nossa API, para isso vamos adicionar o arquivo *pokemons.json*, esse arquivo vai ter vários pokemons e ele vai ser nosso banco de dados. As informações do pokemons.json. Esse arquivo é muito extenso por isso não vou colocar aqui por extenso, mas é póssivel encontrar ele no repositório.

Para conseguir usurfruir completamente das vantagens de ter uma API servindo informações vamos precisar rodar um comando no terminal. Esse comando vai iniciar o JSON-SERVER e ler as informações que temos no arquivo json. Devemos lembrar que esse server deve ficar ativo para conseguir que nosso código funcione corretamente

```
$ json-server --watch pokemons.json
```


## - Pegando as informações da API 

Agora vamos evoluir nosso arquivo *api.js*, esse arquivo será responsável por ter o contato direto com as informações quem vem da API, nesse arquivo vamos colocar as informações

```javascript

const api = {}

api.getPokemonList = async () => {
    let pokemons = await fetch('http://localhost:3000/pokemon')
        .then((response) =>
            response.json()
        )
        .then(data => {
            return data;
        })
        .catch((error) => console.log("Error", error));

    return pokemons;
}

api.searchPokemonByName = async () => {
    return pokemon = await fetch('http://localhost:3000/pokemon?name=' + pokename)
        .then((response) =>
            response.json()
        )
        .then(data => {
            return data;
        })
        .catch((error) => console.log("Error", error));
} 
```

Adicionando essas funções no arquivo já vamos poder referênciar o script *api.js* no arquivo *index.html*

``` html
    <!-- Nosso CSS-->
    <link rel="stylesheet" href="./css/global.css">
    <!-- Nosso script-->
    <script src='./js/api.js'></script>

```


Agora vamos ver adicionar uma simples linha para verificar se nossa comuninicação com a API está funcionando
no arquivo *index.js* vamos adicionar

``` javascript
(async function main() {
    const pokemonList = await api.getPokemonList();

    console.log("List all pokemons", pokemonList)
})();
```

Agora podemos verificar no browser se as informações estão sendo puxadas, pelo console.log colocado vamos ver a listagem de todos os pokemons que temos no arquivo.json

DICA: agora é bom momento para subir seu progresso para o repositório


