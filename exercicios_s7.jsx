class Letre extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      texto: '',
      index: 0
    };
  }

  componentDidMount() {
    const textoLet = 'Venha estudar na Fatec';
    const interval = setInterval(() => {
      if (this.state.index == textoLet.length) {
        limpar(interval);
      } else {
        this.setState({
          texto: textoLet.substring(0, this.state.index + 1),  
          index: this.state.index + 1
        });
      }
    }, 100);
  }

  render() {
    return React.createElement('h1', { style: { backgroundColor: 'gray', color: '#b00d15', textAlign: 'center' } }, this.state.texto);
  }
}

ReactDOM.render(React.createElement(Letre, null), document.getElementById('root'));
