import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
  <Content>
    <Form text2="hola" text1="chau" par="Ejemplo de parrafo descriptivo....">
    <Button>Ingresar</Button>
    </Form>
  </Content>
  );
}

export default App;
