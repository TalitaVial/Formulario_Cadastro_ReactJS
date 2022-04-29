import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'

function FormularioCadastro() {
  const [nome, setNome] = useState("")

  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      console.log(setNome)
    }}>
      <TextField value={nome} onChange={(event)=>{
        let tpmNome = event.target.value
        if(tpmNome.length >= 3){
          tpmNome = tpmNome.substr(0,3)
        }
        setNome(tpmNome)
       
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