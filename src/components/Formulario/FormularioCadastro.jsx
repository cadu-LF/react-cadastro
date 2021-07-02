import React, { useState } from 'react';
import {DadosPessoais} from './DadosPessoais'
import {DadosUsuario} from './DadosUsuario'
import {DadosEntrega} from './DadosEntrega'
import { useEffect } from 'react';
import {Typography, Stepper, Step, StepLabel} from '@material-ui/core'

// desconstrução do parâmetro
export function FormularioCadastro({enviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  // useEffect tem os 3 momentos do ciclo de vida de um componente:
  // construção, update, desconstrução
  useEffect(() => {
    if(etapaAtual === forms.length-1){
      enviar(dadosColetados)
    }
  })

  const forms =[
    <DadosUsuario enviar={coletarDados} />, 
    <DadosPessoais enviar={coletarDados} />, 
    <DadosEntrega enviar={coletarDados} />,
    <Typography variant='h5'>Obg pelo Cadastro</Typography>
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  function proximo(){
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      { forms[etapaAtual] }
    </>
  )

}