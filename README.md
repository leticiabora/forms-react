1) Vamos criar/inicializar nossa aplicação react
**Se atentem pra não escrever o nome da pasta com letra maiúscula**
Ps: se você for criar uma pasta nova, escreva o nome da pasta, caso seja na pasta que você está, é só usar o .

`npx create-react-app .`

2) Vamos inicializar ver se ta funcionando

`npm start`

3) Vamos instalar o Redux e o React-Redux

`npm install redux react-redux`

4) Vamos acessar nosso arquivo App.js e ver tá tudo certo
  - Lá no App, só escrever um testeeee pra ver se tá rodando certinho

5) Agora vamos utilizar a extensão do chrome pra saber se o redux tá com a gente

  - Vamos criar nossa pasta chamada store
  - Vamos criar o arquivo index dentro dela

  - Agora vamos criar as pastas de actions e reducers
  - Vou colocar o nome dos arquivos como actions.js e reducers.js pra ficar mais fácil

  Então nosso diretório ficou:

  /store
    - index.js (index da pasta store)
    /actions
      - actions.js
    /reducers
      - reducers.js

  - Agora vamos criar o nosso reducer, pra ver se aparece o estado inicial na ferramenta:
  <!-- reducer/reducer.js -->
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

  - Vamos no nosso index da store, importar o reducer e passar a linha do devtools pra conectar nossa aplicação com o devtools
  <!-- store/index.js -->
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

  Beleza, vamos olhar nosso devtools... tá funcionando certinho!

  6) Vamos criar nosso formulário, dentro do nosso arquivo App.js:
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

      **Fiquem atentos que no radio button precisamos colocar o mesmo name pra que ele fique alternando**

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

7) Vamos criar nossa action, que vai acionar nosso botão:

  - No nosso arquivo actions.js, vamos criar uma... action. Ela é uma função que vamos chamar no nosso componente e que tem o tipo dela e o dado que ela vai carregar.
    Então vamos lá:

  ` export const setForms = (payload) => ({ `
    ` type: 'SET_FORMS', `
    ` payload`
  ` }); `


8) Vamos alterar nosso app de função pra classe!

  `class App extends React.Component {`

  `render() {`
    `return (`
   ` <div> ....`

9) Beleza, agora vamos salvar os dados do input no state DO NOSSO COMPONENTE.
  `constructor() {`
    `super();`
    `this.state = { `
      `username: '',`
      `email: '',`
      `preferencia: ''`
    `}`
  `}`

10) Vamos agora atualizar nosso state com o onChange do input

  - Fazemos o destructuring 
    `const { username, email } = this.state;`

  - E nos inputs, passamos um name, um value, que vai ser o state e o setState no onChange
    `<input type="text" name="nome" value={username} onChange={(e) => this.setState({ username: e.target.value })}/>`

  - Vamos colocar um console.log antes do return pra saber se tá pegando todos os states
    `console.log(this.state)`

11) Agora vamos importar o connect, pra nos conectarmos com o Provider e avisar a store que nosso componente mudou:
  `import { connect } from 'react-redux';`

  - Vamos trocar nosso export default do App para o connect:
   `export default connect(`
      `null,`
      `null`
    `)(App);`

  - Vamos importar nossa action:
  `import { setForms } from './store/actions/actions';`

  - Vamos agora declarar nosso mapStateToProps, que vai ler nossa store e o mapDispatchToProps que vai escrever na nossa store.
    No mapDispatchToProps, pegamos o nome do nosso reducer e passamos o state
  `const mapStateToProps = (state) => ({`
    `forms: state`
  `})`

  No mapDispatchToProps, pegamos a função da action
  `const mapDispatchToProps = (dispatch) => ({`
    `setForms: (data) => dispatch(setForms(data))`
  `})`

  `export default connect(`
    `mapStateToProps,`
    `mapDispatchToProps`
  `)(App);`

  - Vamos colocar um console.log pra saber se estamos recebendo alguma informação
  `console.log(this.props)` -> recebemos todas as props (se atente que nossa função/action setForms também vem como props...)
  `console.log('testando mapState', this.props.forms)` -> recebemos apenas o forms, que é nossos dados de username, email e preferencia.

  Opa! Tá vindo como undefined... É porque ainda não colocamos nenhum dado. Vamos lá!

12) Vamos chamar nossa action (setForms) no clique do botão, ela será responsável por pegar o state do componente e enviar pra store.
**Não se esqueça de colocar o this.props**

`<button type="button" onClick={() => this.props.setForms(this.state)}>Enviar</button>`

Pronto, se olharmos no nosso devtools, estamos atualizando a nossa store apenas quando clicamos no botão de enviar!





