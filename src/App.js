import './App.css';
import FormSignUp from './components/FormSignUp';
import { Container, Typography } from '@mui/material';

function App() {

  const handleSubmit = (data) => {
    console.log('app',data);
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center' component="h1">Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
