import React from 'react';
import { connect } from 'react-redux';
import { setForms } from './store/actions/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      preferencia: '',
      isOk: false
    }
  }

  render() {
    const { username, email } = this.state;
    console.log('props', this.props)
    return (
      <div className="App">
        <label>
          Nome <br />
          <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </label>
        <br />
        <label>
          is OK?
          <input
            type="checkbox"
            onChange={(e) => this.setState({ isOk: e.target.checked })}
          />
        </label>
        <br />
        <label>
          Email <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Biscoito
          <input
            type="radio"
            name="preferencia"
            value="biscoito"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
        </label>
        <br />
        <label>
          Bolacha
          <input
            type="radio"
            name="preferencia"
            value="bolacha"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={() => this.props.setForms(this.state)}
        >
          Enviar
        </button>
      </div>
    );
  }
}


const mapStateToProps = (stateDaStore) => ({
  forms: stateDaStore
})

const mapDispatchToProps = (dispatch) => ({
  setForms: (data) => dispatch(setForms(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ** Lembre-se: Não importa o nome que você dê pra função 'mapStateToProps' nem o nome do parâmetro dela
// o que importa é a ordem que você coloca dentro da função do connect.
//Ele sabe que o primeiro parâmetro dele é a função que vai pegar os states da store e transformar em props pra usar no componente e que o segundo parâmetro vai ser a função responsável por despachar a action.