import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'

function FormularioCadastro({aoEnviar, validaCPF}) {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({cpf:{valido: true, texto:""}})

  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
    }}>
      <TextField value={nome} onChange={(event)=>{
        setNome(event.target.value)
      }} id='nome' label='Nome' variant='outlined' fullWidth margin='normal'/>
      <TextField 
      value={sobrenome} onChange={(event)=>{
        setSobrenome(event.target.value)
      }} id='sobrenome' label='Sobrenome' variant='outlined' fullWidth margin='normal'/>
      <TextField value={cpf} onChange={(event)=>{
        setCpf(event.target.value)
      }}
       onBlur={(event)=>{
         const valido = validaCPF(cpf)
         setErros({cpf: valido})
       }}
       error={!erros.cpf.valido}
       helperText={erros.cpf.texto}
       id='CPF' label='CPF' variant='outlined' fullWidth margin='normal'/>
      <FormControlLabel label='Promoções' control={<Switch checked={promocoes} onChange={(event)=>{
        setPromocoes(event.target.checked)
      }} color='primary' />}/>
      <FormControlLabel label='Novidades' control={<Switch checked={novidades} onChange={(event)=>{
        setNovidades(event.target.checked)
      }} color='primary' />}/>
      <Button type='submit' variant='contained' color='primary'>cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;