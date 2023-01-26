Pokemon Trade TUTORIAL

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


Para finalizar vamos deixar pronto mais uma estrutura de pastas para nossa organização. Vamos adicionar a pasta `js` e dentro dessa pasta vamos adicionar dois arquivos um `api.js` e o `functions.js`