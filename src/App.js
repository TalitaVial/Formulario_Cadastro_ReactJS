import './App.css'
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro'
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm">
      <h1>Meu Formulario</h1>
      <FormularioCadastro />
    </Container>
  )
}

export default App
