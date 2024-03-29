import React, { useState, useContext } from 'react';
import {TextField, Button} from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros';

export function DadosUsuario({enviar}){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)
  
  return(
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar()){
          enviar({email, senha})
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id="email"
        label="email"
        name="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        onBlur={ validarCampos }
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name='senha'
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>

    </form>
  )
}