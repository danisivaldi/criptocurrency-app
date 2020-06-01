# CriptoCurrency App

Projeto de aplicativo iOS de listagem das criptomoedas na toplist atual. Feito para processo seletivo de estágio na empresa Fluke.

## Introdução

O projeto usa React Native para criar um app nativo, com tela de login e registro. Ao logar, o usuário acessa a lista das criptomoedas no toplist com informações de baixa, alta e variação atualizadas.

Para acessar os dados das moedas, utilizei a api criptocompare (https://min-api.cryptocompare.com/). O acesso é feito por uma aplicação em Node que faz a requisição das informações e formata para o front-end. O código em javascript foi guardado na nuvem através do heroku (https://www.heroku.com/), e a aplição em React acessa diretamente por ele.

No back-end, usamos o MongoDB para guardar as informações de usuário.

## Execução

Para rodar o aplicativo, siga os seguintes passos:

### Servidor

Para o servidor, temos duas opções: Usar o docker (Production Ready) ou rodar localmente.

Para rodar pelo docker:

```
cd server
docker-compose up
```

Localmente, é preciso ter o mongo instalado, e em seguida rodar:

```
cd server
npm install
node src/index.js
```

### Cliente

Para executar o aplicativo iOS em sua máquina de desenvolvimento, é necessário ter um simulador iOS instalado. Em seguida, instale o cocoapods:

```
cd client/ios
sudo gem install cocoapods
pod install
```

Depois, rode o projeto no simulador:

```
cd client
react-native run-ios
```

Uma janela do terminal irá abrir com o Metro Bundler, e para rodar o aplicativo, simplesmente pressione "r".

Para gerar o build da aplicação (ideal para produção) execute o seguinte comando no diretório cliente:

```
react-native build
```

## Todo

Aprendi as tecnologias React Native e Node e me aprimorei em Javascript conforme a necessidade do projeto, então faltam alguns detalhes ao projeto:

* Requisitos da especificação (O app lista apenas as moedas da toplist, portanto falta:)
  * Capacidade de buscar uma moeda específica ela estando ou não no toplist
  * Mostrar o histórico das moedas

## Considerações finais

A parte do servidor também foi publicada no heroku, então podemos alterar o acesso ao servidor pelo apisauce da seguinte forma:

Em client/services/api.js

```
const api = create({
    baseURL: 'https://d-ccapp.herokuapp.com',
});
```

Desse modo, só é necessário seguir os passos da sessão cliente no tópico execução.

O exercício 1 proposto pela especificacão do processo seletivo se encontra no arquivo _fluke.py_

O projeto foi desenvolvido no seguinte ambiente:
* macOS Mojave versão 10.14.6
