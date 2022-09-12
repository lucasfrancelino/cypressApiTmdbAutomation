# Desafio tecnico Suno

>1ª Parte - 
    Teste exploratorio em uma página estática do aplicativo Suno, onde pude perceber alguns pontos em desacordo com o Figma, todos os pontos encontrador foram reportados em um documento que será enviado por e-mail.

## Testando APIs utilizando Cypress

>2ª Parte - 
    Suite de testes automatizadas, na API TMDB, dentre varias Collections da API, foquei na de Movie, onde raciocinei o que seria mais importante para os usuário, então validei o que seria mais critico nessa collection.

Configurando o ambiente para execução 

1º passo - Instalando as dependencias

No terminal execute o comando
```sh
 npm install
```
Esse comando instala todas as dependencias que o projeto precisa para que seja executado.

2º Passo - Executando os testes com o Cypress


Existe duas formas de executar, pode escolher qualquer uma, no terminal execute o comando, essa primeira abre uma tab do Cypress, na qual pode acompanhar a execução do teste
```sh
 npx cypress open
```
Essa segunda é para a execução no terminal, nessa apresenta apenas o que foi executado se passou ou não.
```sh
 npx cypress run
```
>Recomendo que use a segunda forma, pois o Cypress é um framework de teste E2E, ele abre uma tab de browser consumindo recursos desnescessários para esse projeto. Fique a vontade para escolher.
