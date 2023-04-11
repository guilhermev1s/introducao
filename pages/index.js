import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container id="teste">
          <h1>Hello World!</h1>
          <p>Qualquer texto</p>
          <p>Qualquer texto</p>
          <p>Qualquer texto</p>
        </Container>
      </Pagina>
    </>
  )
}
