import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'

function FormularioCadastro() {
  let nome = ''
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      console.log(nome)
    }}>
      <TextField onChange={(event)=>{
        nome = event.target.value
       
      }} id='nome' label='Nome' variant='outlined' fullWidth margin='normal'/>
      <TextField id='sobrenome' label='Sobrenome' variant='outlined' fullWidth margin='normal'/>
      <TextField id='CPF' label='CPF' variant='outlined' fullWidth margin='normal'/>
      <FormControlLabel label='Promoções' control={<Switch defaultChecked color='primary' />}/>
      <FormControlLabel label='Novidades' control={<Switch defaultChecked color='primary' />}/>
      <Button type='submit' variant='contained' color='primary'>cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;