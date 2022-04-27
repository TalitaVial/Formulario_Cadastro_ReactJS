import './App.css'
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" color="primary">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  )
}

export default App
