import './App.css';
import { Component } from 'react'
import { FormularioCadastro } from './components/Formulario/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import {validacaoCpf, validacaoSenha} from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography 
          variant="h3" 
          align="center" 
          component="h1"
        >
          Fomulario de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{cpf:validacaoCpf, senha:validacaoSenha, nome:validacaoSenha}}>
          <FormularioCadastro enviar={aoEnviar}/>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }

}

function aoEnviar(dados){
  console.log(dados)
}

export default App;
