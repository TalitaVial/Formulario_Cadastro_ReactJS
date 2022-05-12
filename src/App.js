import './App.css'
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" color="primary">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF} />
    </Container>
  )
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validaCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF inválido' }
  } else {
    return { valido: true, texto: '' }
  }
}

export default App
