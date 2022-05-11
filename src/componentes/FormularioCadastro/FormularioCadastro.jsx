import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'

function FormularioCadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      console.log({nome, sobrenome, cpf, promocoes, novidades})
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
      }} id='CPF' label='CPF' variant='outlined' fullWidth margin='normal'/>
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