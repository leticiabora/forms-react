#  Little Form Redux

Esse é um passo a passo do plantão guiado realizado na turma 06, sinta-se a vontade pra seguir apenas o passo a passo ou acompanhar o vídeo, disponível na thread de plantões especiais no canal da turma.

### Resumo
O objetivo aqui é treinar Redux, que vai ser o gerenciador dos estados da nossa aplicação. Você lembra que até agora criamos formulários e salvamos os dados apenas no state, certo? Agora vamos utilizar o Redux pra deixar essas informações acessíveis dentro de toda a nossa aplicação.

O nosso fluxo será o seguinte:  

 - Digitei as informações no input
 - Salvei essas informações no state do meu componente
 - Cliquei no botão "Enviar"
 - Ao clicar no botão, esses dados foram guardados pra ficarem disponíveis por toda a nossa aplicação e não somente no nosso componente

Ou seja, digitei meu nome e meu email na página inicial, mas quero que esse nome e esse email apareçam na página seguinte (outro componente) também. Então, salvamos essa informação com o Redux, que vai deixar esses dados disponíveis pra serem acessados em qualquer outro componente da aplicação.

_Como podemos realizar esse fluxo?_

Ao digitarmos no input, vamos salvar esses dados no state **do componente**.
Assim que a pessoa usuária clicar no botão de "Enviar", disparamos uma **action**, essa **action** é uma função, que vai receber como parâmetro, o state do nosso componente e vai entregar essa informação pro **reducer**.

O **reducer**, por sua vez, tem a função de atualizar a **store** (que é a responsável por guardar as informações da aplicação), ele vai verificar o tipo da **action**, vai atualizar os dados e devolver pra **store**.

Fique tranquilo se você ainda tiver confuso com todas essas informações, Redux é prática em cima de prática, eu também já passei por essa fase de chamar Redux de Helldux :P\

Então vamos lá e lembre-se: você tem o vídeo disponível pra te ajudar a seguir com esse passo a passo.

#### 1) Crie a aplicação react
**Se atentem pra não escrever o nome da pasta com letra maiúscula**
Se você for criar uma pasta nova, como você já está habituado a fazer, exemplo:

`npx create-react-app nome-da-pasta`

Caso você já tenha criado uma pasta, basta digitar:

`npx create-react-app .`

#### 2) Inicialize a aplicação
Por mais bobo que pareça, é importante a gente sempre inicializar pra ver se a nossa aplicação tá rodando no navegador, pra isso, digite:

`npm start`

#### 3) Instale o Redux e o React-Redux
O Redux não é próprio do React, portanto, usamos o react-redux pra conectar os dois.

`npm install redux react-redux`

#### 4) Acesse o arquivo App e faça alguma alteração no texto
  
  Escreva qualquer texto dentro do componente App pra verificar se as alterações estão aparecendo no navegador.

#### 5) Configure o Redux e o Redux DevTools

 - [ ] Crie uma pasta chamada 
 - [ ] Crie o arquivo index dentro dela

Lembre-se que a store vai ser responsável por armazenar os dados compartilhados da aplicação.

  - [ ] Criar as pastas de actions e reducers
  - [ ] Crie um arquivo reducers.js e actions.js dentro das respectivas pastas

A estrutura do nosso diretório é essa:

  /store
    - index.js (index da pasta store)
    /actions
      - actions.js
    /reducers
      - reducers.js

  - [ ] Crie o reducer
 
  `<!-- reducer/reducer.js -->`
  
  ` const initialState = { `
    ` username: null, `
    ` email: null, `
    ` preferencia: null`
  ` } `

  ` export const forms = (state = initialState, action) => { `
    ` switch (action.type) { `
      ` case 'SET_FORMS': `
        ` return { `
          ` ...state, `
          ` ...action.payload `
        ` } `
       ` default: `
        ` return state; `
    ` } `
  ` } `

Lembre-se:  O **reducer** é uma função, ele vai receber a **action** (que tem a informação atualizada), retornando um novo state e salvando na nossa store. 

_Mas como o reducer sabe que ele vai ser chamado?_

A seguir vamos criar a nossa **action**, ela vai receber um `type` e um `payload` (que é a informação, nesse caso é o state do nosso componente). O **reducer** se comunica com a nossa **action** através desse `type`, olhe a estrutura de código acima e veja que "caso o type seja SET_FORM, atualize o state". A seguir você verá que, ao estruturar a nossa **action**, vamos passar o `type` pra ela também.

Reforçando, não se preocupe se ainda tá confuso pra você, Redux é prática em cima de prática.

Pra visualizar melhor o funcionamento do Redux, é extremamente aconselhável que você baixe a extensão do Redux DevTools no seu navegador e a seguir, vamos implementar a linha de código necessária pra que a nossa aplicação fique acessível pra extensão.

  - [ ] Crie o index da store, importe o reducer
  - [ ] Conecte a aplicação com o DevTools
  
  `<!-- store/index.js -->`
 
` import { createStore } from 'redux'; `
` import { forms } from './reducers/reducers'; `

` const store = createStore( `
  ` forms, `
  ` window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() `
` ); `

` export default store; `

  - No nosso index geral, vamos importar o Provider e a store:
  ` import { Provider } from 'react-redux'; `
  ` import store from './store'; `

  ` ReactDOM.render( `
    ` <React.StrictMode> `
      ` <Provider store={store}> `
        ` <App /> `
      ` </Provider> `
    ` </React.StrictMode>, `
    ` document.getElementById('root') `
  ` );`

 - [ ] Verifique se o DevTools está funcionando.
 É só você abrir seu console e clicar em Redux ou clicar no ícone da extensão do DevTools no seu navegador. Se aparecer o initialState (reducers.js) é porque tá funcionando certinho.
---
  6) Crie o formulário dentro de App.js
- [ ] Crie o formulário
**ATENÇÃO:** é importante componentizar, nesse caso não fizemos a componentização pra visualizar melhor o que está acontecendo na aplicação.
     ` <label>`
       ` Nome: <br />`
        `<input type="text" value="" onChange={() => console.log('input nome')}/>`
      `</label>`

      `<br />`

      `<label>`
        `Email: <br />`
        `<input type="text" value="" onChange={() => console.log('input email')}/>`
      `</label>`

     ` <br />`

      **Atentem-se para que, no radio button, name seja exatamente o mesmo para que ele fique alternando**

      `<label>`
        `Biscoito:`
       ` <input type="radio" name="preferencia" value="biscoito" onChange={() => console.log('input biscoito')}/>`
      `</label>`

      `<label>`
        `Bolacha:`
       ` <input type="radio" name="preferencia" value="bolacha" onChange={() => console.log('input bolacha')}/>`
      `</label>`

      `<br />`

      `<button type="button" onClick={() => console.log('aqui vai nossa action')}>Enviar</button>`

#### 7) Vamos criar nossa action, que vai acionar nosso botão:

  - No nosso arquivo actions.js, vamos criar uma... action. Ela é uma função que vamos chamar no nosso componente e que tem o tipo dela e o dado que ela vai carregar.
    Então vamos lá:

  ` export const setForms = (payload) => ({ `
    ` type: 'SET_FORMS', `
    ` payload`
  ` }); `


#### 8) Altere o App.js de função para classe

  `class App extends React.Component {`

  `render() {`
    `return (`
   ` <div> ....`

####  9) Salve os dados do input no state do componente
  `constructor() {`
    `super();`
    `this.state = { `
      `username: '',`
      `email: '',`
      `preferencia: ''`
    `}`
  `}`

#### 10) Atualize o state com o onChange do input

  - [ ] Faça o destructuring do state
    `const { username, email } = this.state;`

  - [ ] Passe um name, um value (que será o state) e o setState(que atualiza o state) no onChange dos inputs
    `<input type="text" name="nome" value={username} onChange={(e) => this.setState({ username: e.target.value })}/>`

  - [ ] Coloque um console.log antes do return pra saber se os states estão aparecendo
    `console.log(this.state)`

#### 11) Importe o connect
O connect serve pra nos conectarmos com o Provider e avisar a store que nosso componente mudou

  `import { connect } from 'react-redux';`

  - [ ] Troque o export default do App para o connect
   `export default connect(`
      `null,`
      `null`
    `)(App);`

  - [ ] Importe a action
  `import { setForms } from './store/actions/actions';`

  - [ ] Declare o mapStateToProps
 O mapStateToProps (lê a store) que vai ler nossa store e vai deixar os dados acessíveis através de props
O mapDispatchToProps (escreve na store) que vai escrever na nossa store, ou seja, vamos enviar a informação.
- [ ] Pegue o state da store através do mapDispatchToProps e receba como parâmetro o state (esse state é o da store)
  `const mapStateToProps = (state) => ({`
    `forms: state`
  `})`


  No mapDispatchToProps, pegamos a função da action
  - [ ] Passe a action a ser enviada para o reducer
  `const mapDispatchToProps = (dispatch) => ({`
    `setForms: (data) => dispatch(setForms(data))`
  `})`

  `export default connect(`
    `mapStateToProps,`
    `mapDispatchToProps`
  `)(App);`

Lembre-se: O setForms: pode ter qualquer nome, já o setForms de dentro da função do dispatch dispatch(setForms(data)) é a action que você importou. O parâmetro data será o state do componente, que vai ser carregado até o reducer através dessa action.

  - [ ] Coloque um console.log pra saber você está recebendo alguma informação
  
  `console.log(this.props)`: Recebemos todas as props (se atente que nossa função/action setForms também vem como props e pra acessá-la precisamos usar o `this.props.setForm(stateDoComponente))`
  
 `console.log('testando mapState', this.props.forms)`: recebemos apenas o forms, que é nossos dados de username, email e preferencia.

Opa! Tá vindo como undefined... É porque ainda não colocamos nenhum dado. Vamos lá!

#### 12) Chame a action (setForms) no clique do botão
Essa action será responsável por pegar o state do componente e enviar pra store.
**Não se esqueça de colocar o this.props**

`<button type="button" onClick={() => this.props.setForms(this.state)}>Enviar</button>`

Pronto, e agora, se olharmos no nosso DevTools, estamos atualizando a nossa store ao clicar no botão de enviar!
