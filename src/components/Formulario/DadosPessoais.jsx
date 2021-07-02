import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros'

// desconstrução do parâmetro
export function DadosPessoais({enviar}) {
  // cria estado
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      onSubmit={
        event => {
          event.preventDefault(); // impede comportamento padrão (recarregar)
          if(possoEnviar()){
            enviar({nome, sobrenome, cpf, promocoes, novidades})
          }
        }
      }
    >
      <TextField
        value={nome}
        onChange={
          (event) => {
            setNome(event.target.value)
          }
        }
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="Nome"
        name='nome'
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={
          event => {
            setSobrenome(event.target.value)
          }
        }
        id="Sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={
          (event) => {
              setCpf(event.target.value)
          }
        }
        onBlur={ validarCampos }
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={
              event => {
                setPromocoes(event.target.checked)
              }
            }
            name='Promoções'
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={
              event => {
                setNovidades(event.target.checked)
              }
            }
            name='novidades'
            checked={novidades}
            color="primary"
          />
        }
      />

      <Button 
        type='submit'
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>

    </form>
  )

}