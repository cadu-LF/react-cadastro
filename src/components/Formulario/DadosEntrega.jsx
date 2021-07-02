import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'

export function DadosEntrega({enviar}){
  const [cep, setCep] = useState(0)
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState(0)
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  
  return(
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({cep, endereco, numero, estado, cidade})
      }}
    >
      <TextField
        value={cep} 
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
        id="estado"
        name="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        id="endereco"
        name="endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        id="numero"
        name="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar Cadastro
      </Button>

    </form>
  )
}